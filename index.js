const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/status', (req, res) => {
  res.json({
    github: '✅',
    jenkins: '✅',
    uptimeKuma: '✅',
    grafana: '✅'
  });
});

app.listen(port, () => {
  console.log(`🚀 DevOps portal running at http://localhost:${port}`);
});
