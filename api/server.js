const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Initialize Flow Webhook
app.post("/", (req, res) => {
  res.json({
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: "Hello, this is a dynamic Intercom app running on Vercel!"
          }
        ]
      }
    }
  });
});

// Default route for GET requests
app.get("/", (req, res) => {
  res.send("Welcome to your Intercom app hosted on Vercel!");
});

// Start the server
app.listen(3000, () => console.log("Server is running!"));
