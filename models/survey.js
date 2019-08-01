const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
});

mongoose.model('surveys', surveySchema);