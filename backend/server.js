require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const internRoutes = require('./routes/intern');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/intern', internRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Seed database with dummy data
    seedDatabase();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));

// Seed dummy data
async function seedDatabase() {
  const count = await Intern.countDocuments();
  if (count === 0) {
    await Intern.create({
      name: "Alex Johnson",
      referralCode: "alex2025",
      donationsRaised: 1250,
      rewards: ["T-Shirt", "Water Bottle"]
    });
    await Intern.create({
      name: "Sam Chen",
      referralCode: "sam2025",
      donationsRaised: 980,
      rewards: ["Notebook"]
    });
  }
}