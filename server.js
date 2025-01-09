const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// POST endpoint for the Initialize Flow Webhook URL
app.post('/', (req, res) => {
  res.json({
    canvas: {
      content: {
        components: [
          {
            type: 'iframe',
            url: 'https://<your-vercel-project-url>/dynamic-content',
            height: 300
          }
        ]
      }
    }
  });
});

// GET endpoint for the iframe dynamic content
app.get('/dynamic-content', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Dynamic Content</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            margin: 0;
          }
          h1 {
            color: #28a745;
          }
        </style>
      </head>
      <body>
        <h1>Dynamic Status Page</h1>
        <p>Status: All systems are operational.</p>
        <p>Last updated: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
