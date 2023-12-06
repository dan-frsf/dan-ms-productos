const express = require('express');
const app = express();
const port = process.env.MS_PORT || 3000;

// Route for /api/health
app.get('/api/health', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ app:'ms-productos', status: 'OK', timestamp: currentTime });
});

// Route for /api/product
app.get('/api/product', (req, res) => {
  const productList = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 },
  ];
  res.json({ products: productList, description: 'Sample Product List' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
