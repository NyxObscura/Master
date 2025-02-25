module.exports = (req, res) => {
  const allowedOrigin = "https://www.obscuraworks.com"; // Hanya domain ini yang boleh
  const origin = req.headers.origin;

  if (origin !== allowedOrigin) {
    return res.status(403).json({ error: "Access Denied" }); // Blokir selain domain ini
  }

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.status(200).json({ key: process.env.SMARTSUPP_KEY });
};
