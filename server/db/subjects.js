const mongoose = require('mongoose');
 
// Schema of user collection in data base
const subjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    teachers: [
        {
            id: { 
                type: String, 
                required: true 
            }
        }
    ],
    courses:[
        {
            id: { 
                type: String, 
                required: true 
            }
        }
    ],
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
                defalut: this._id
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
 
var Subject = mongoose.model('Subject', subjectSchema);
 
module.exports = Subject;