// Import necessary libraries
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define your Slack API token (stored securely as an environment variable)
const slackApiToken = process.env.SLACK_API_TOKEN;

// Create an endpoint to send a summary to Slack
app.post('/send-summary', async (req, res) => {
  try {
    const { summaryText } = req.body; // Get the summary text from the request

    // Construct the message payload
    const messagePayload = {
      channel: '#general', // The Slack channel where you want to send the message
      text: summaryText,   // The summary text
    };

    // Make a POST request to the Slack API to send the message
    const response = await axios.post('https://slack.com/api/chat.postMessage', messagePayload, {
      headers: {
        Authorization: `Bearer ${slackApiToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Check for a successful response from Slack
    if (response.data.ok) {
      res.status(200).json({ message: 'Summary sent to Slack.' });
    } else {
      res.status(500).json({ message: 'Failed to send summary to Slack.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
