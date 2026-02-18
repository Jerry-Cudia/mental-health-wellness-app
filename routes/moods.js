import { Router } from 'express';
import { db } from '../db.js'; 
import { getAIResponse } from '../services/aiService.js';

const router = Router();


router.post('/', async (req, res) => {
    try {
        const { user_id, mood_text } = req.body;

    
        if (!mood_text || mood_text.trim() === "") {
            return res.status(400).json({ error: "Mood text cannot be empty" });
        }

     
        const [result] = await db.query(
            'INSERT INTO mood_entries (user_id, mood_text) VALUES (?, ?)',
            [user_id, mood_text]
        );

        const moodEntryId = result.insertId;

      
        const aiMessage = await getAIResponse(mood_text);

     
        await db.query(
            'INSERT INTO ai_responses (mood_entry_id, ai_message) VALUES (?, ?)',
            [moodEntryId, aiMessage]
        );

        res.status(201).json({ 
            message: "Mood saved", 
            id: moodEntryId, 
            aiMessage 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT u.full_name, m.id, m.mood_text, a.ai_message 
            FROM users u 
            JOIN mood_entries m ON u.id = m.user_id 
            JOIN ai_responses a ON m.id = a.mood_entry_id
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
 
        await db.query('DELETE FROM ai_responses WHERE mood_entry_id = ?', [id]);
        const [result] = await db.query('DELETE FROM mood_entries WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Mood not found" });
        }

        res.json({ message: `Mood with ID ${id} and its AI response deleted.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;