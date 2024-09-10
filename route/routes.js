import express from 'express';
import Member from '../models/member.js'; 

const router = express.Router();

router.post('/add-member', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newMember = await Member.create({ name, email });
    res.status(201).json({ message: 'Member added successfully', member: newMember });
  } catch (err) {
    res.status(400).json({ message: 'Error adding member', error: err.message });
  }
});

router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching members', error: err.message });
  }
});

export default router;
