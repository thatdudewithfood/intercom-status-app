const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// POST route for Intercom Initialize Flow Webhook
app.post("/", (req, res) => {
  res.json({
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: "✅ **Status: All systems operational**"
          },
          {
            type: "divider"
          },
          {
            type: "text",
            text: "[Scheduled] Database Maintenance"
          },
          {
            type: "text",
            text: "We are planning a scheduled maintenance during that time. [Read More](https://your-status-page-url.com)"
          }
        ]
      }
    }
  });
});

// GET route for debugging
app.get("/", (req, res) => {
  res.send("Welcome to your Intercom status app!");
});

// Start the server (for local testing)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
