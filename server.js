import express from 'express';
import moodRoutes from './routes/moods.js';

const app = express();
app.use(express.json()); // Essential for the POST command to work!

app.use('/api/moods', moodRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});