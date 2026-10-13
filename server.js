const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/sort', async (req, res) => {
    const { text } = req.body;

    // Simulated open-source AI model response for instant execution
    setTimeout(() => {
        res.json({
            status: "success",
            extracted_data: {
                vendor: "Cloud / SaaS Provider",
                date: "2026-10-12",
                total_amount: "$45.00",
                category: "Software & Infrastructure",
                items: [
                    { description: "API Usage & Hosting", cost: "$45.00" }
                ],
                privacy_note: "Processed via local-first open-weight model approach with zero data retention."
            }
        });
    }, 1000);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));