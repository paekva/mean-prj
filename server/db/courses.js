const mongoose = require('mongoose');

// Schema of courses collection in data base
const coursesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    courses_number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subjects: [
        {
            id: {
                type: String,
                required: true
            }
        }
    ]
});

var Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;