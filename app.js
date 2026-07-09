const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Azure App Service Demo</h1><p>Express を GitHub Actions からデプロイしています。25G1045</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
