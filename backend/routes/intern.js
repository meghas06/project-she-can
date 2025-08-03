const express = require('express');
const router = express.Router();
const Intern = require('../models/Intern');

// Get intern data
router.get('/dashboard/:referralCode', async (req, res) => {
  try {
    const intern = await Intern.findOne({ referralCode: req.params.referralCode });
    if (!intern) return res.status(404).json({ message: 'Intern not found' });
    res.json(intern);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const interns = await Intern.find().sort({ donationsRaised: -1 }).limit(10);
    res.json(interns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;