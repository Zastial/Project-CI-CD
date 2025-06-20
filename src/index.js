const express = require('express');
const app = express();
const { sum } = require('../src/sum.js');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sum Example</title>
</head>
<body>
  <h1>Sum Example</h1>
  <input type="number" id="num1" placeholder="Enter first number">
  <input type="number" id="num2" placeholder="Enter second number">
  <button id="calculate">Calculate Sum</button>
  <p id="result"></p>
  <script>
    document.getElementById('calculate').addEventListener('click', async () => {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const response = await fetch('/sum?a=' + num1 + '&b=' + num2);
      const data = await response.json();
      document.getElementById('result').textContent = 'Sum: ' + data.result;
    });
  </script>
</body>
</html>
`;

// Serve the HTML page
app.get('/', (req, res) => {
  res.type('html').send(html);
});

// Serve the sum endpoint
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  res.json({ result: sum(a, b) });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
