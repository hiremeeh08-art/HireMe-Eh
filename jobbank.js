// api/jobbank.js
// Fetches real listings directly from Job Bank Canada (Government of Ontario)
// This is a FREE public API — no key needed!

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { keywords, location = 'Ontario' } = req.body

  try {
    // Job Bank Canada public search API
    const url = `https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=${encodeURIComponent(keywords)}&locationstring=${encodeURIComponent(location)}&action=results&sort=D&fprov=ON&ws=0&num=10`

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/html,application/xhtml+xml',
      }
    })

    const html = await response.text()

    // Parse job listings from the HTML
    const jobs = []
    const jobMatches = html.matchAll(/class="resultJobItem"[\s\S]*?<\/article>/g)

    for (const match of jobMatches) {
      const block = match[0]

      const titleMatch = block.match(/class="noctitle"[^>]*>([\s\S]*?)<\/span>/)
      const companyMatch = block.match(/class="business"[^>]*>([\s\S]*?)<\/span>/)
      const locationMatch = block.match(/class="location"[^>]*>([\s\S]*?)<\/span>/)
      const salaryMatch = block.match(/class="salary"[^>]*>([\s\S]*?)<\/span>/)
      const dateMatch = block.match(/class="date"[^>]*>([\s\S]*?)<\/span>/)
      const linkMatch = block.match(/href="(\/jobsearch\/jobposting\/[^"]+)"/)

      if (titleMatch) {
        jobs.push({
          title: titleMatch[1].replace(/<[^>]+>/g, '').trim(),
          company: companyMatch ? companyMatch[1].replace(/<[^>]+>/g, '').trim() : 'Not listed',
          location: locationMatch ? locationMatch[1].replace(/<[^>]+>/g, '').trim() : location,
          salary: salaryMatch ? salaryMatch[1].replace(/<[^>]+>/g, '').trim() : 'Not listed',
          posted: dateMatch ? dateMatch[1].replace(/<[^>]+>/g, '').trim() : 'Recent',
          applyUrl: linkMatch ? `https://www.jobbank.gc.ca${linkMatch[1]}` : 'https://www.jobbank.gc.ca',
          source: 'Job Bank Canada',
          type: 'Full-time',
          description: 'View full details on Job Bank Canada — Canada\'s official government job board.',
          skills: [],
        })
      }

      if (jobs.length >= 8) break
    }

    return res.status(200).json({ jobs })
  } catch (error) {
    console.error('Job Bank error:', error)
    return res.status(500).json({ error: 'Could not fetch Job Bank listings', jobs: [] })
  }
}
