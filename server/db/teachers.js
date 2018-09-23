const mongoose = require('mongoose');
 
// Schema of user collection in data base
const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        last: {
            type: String,
            required: true
        },
        first:{
            type: String,
            required: true
        },
        additional:{
            type: String
        },
    },
    descriprion:{
        type: String
    },
    rate: [
        {
            critery: { 
                type: String, 
                required: true
            }, 
            score: { 
                type: Number, 
                required: true,
                validate: {
                    validator: function(score) {
                        return score<10;
                    },
                    message: 'You\'ve provided wrong score'
                }
            }
        }
    ]
    ,
    comments:  [
        {
            _id: mongoose.Schema.Types.ObjectId,
            user_id: { 
                type: String, 
                required: true
            }, 
            sbjct_id: { 
                type: String, 
                required: true
            },
            publication_time:
            {
                type: Date,
                default: new Date()
            },
            text: { 
                type: String, 
                required: true
            },
            likes: {
                type: Number
            }
        }
    ]
});
 
var Teacher = mongoose.model('Teacher', teacherSchema);
 
module.exports = Teacher;