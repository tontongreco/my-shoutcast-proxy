export default async function handler(req, res) {
  const url = 'https://a3.asurahosting.com:6750/stats?sid=1&json=1';

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch SHOUTcast data' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}