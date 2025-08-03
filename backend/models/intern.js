const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  name: { type: String, required: true },
  referralCode: { type: String, required: true, unique: true },
  donationsRaised: { type: Number, default: 0 },
  rewards: [{ type: String }]
});

module.exports = mongoose.model('Intern', internSchema);