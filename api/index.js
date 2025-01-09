export default function handler(req, res) {
  res.status(200).json({
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: "**Dynamic Status Page**\n\n🟢 **Status:** All systems are operational\n\n_Last updated: " + new Date().toLocaleString() + "_"
          }
        ]
      }
    }
  });
}
