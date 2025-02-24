export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const response = await fetch('https://api.obscura.icu/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.APIKEY_A
            },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();
        res.status(response.status).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
