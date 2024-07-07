const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const session = require('express-session');  // Import express-session
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configure session middleware
app.use(session({
  secret: 'replace_this_with_a_secure_secret_key', // Use a secure and unique key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if your app is running over HTTPS
}));

app.get('/', (req, res) => {
  res.send('Server is running and ready to receive requests!');
});

// Existing API endpoint for generating slides
app.post('/api/chatbot', async (req, res) => {
  const userMessage = req.body.message;  
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4o",  // Use the correct model identifier
      messages: [{ role: "user", content: userMessage }]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.json({ slides: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error.response ? error.response.data : error.message);
    res.status(500).send('Failed to fetch response from OpenAI');
  }
});



// PDF download endpoint
app.get('/download-slides', (req, res) => {
  const doc = new PDFDocument();
  const fileName = `slides-${Date.now()}.pdf`;

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

  doc.pipe(res);
  doc.text(req.session.slides || "No slides content available", 100, 100);  // Provide fallback text if no slides
  doc.end();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
