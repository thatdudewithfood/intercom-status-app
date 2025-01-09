export default function handler(req, res) {
  // Respond with JSON for Intercom Canvas Kit
  res.status(200).json({
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: `
              <h2>Dynamic Status Page</h2>
              <p>🟢 <strong>Status:</strong> All systems are operational</p>
              <p><em>Last updated: ${new Date().toLocaleString()}</em></p>
            `,
          },
        ],
      },
    },
  });
}
