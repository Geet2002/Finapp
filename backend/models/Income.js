const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    icon: { type: String },
    source: { type: String, required: true }, // Income source name
    amount: { type: Number, required: true }, // Income amount
    date: { type: Date, default: Date.now },
}, { timestamps: true });


module.exports = mongoose.model('Income', IncomeSchema);