import { Router } from 'express';
import pool from '../db.js'; 

const router = Router();


router.post('/', async (req, res) => {
    try {
        const { user_id, mood_text } = req.body;
        const [result] = await pool.query(
            'INSERT INTO moods (user_id, mood_text) VALUES (?, ?)',
            [user_id, mood_text]
        );
        res.status(201).json({ id: result.insertId, user_id, mood_text });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM moods');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
  
        const [result] = await pool.query('DELETE FROM moods WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Mood not found" });
        }

        res.json({ message: `Mood with ID ${id} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;