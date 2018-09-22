const mongoose = require('mongoose');
 
// Schema of user collection in data base
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        validate: {
            validator: function(date) {
                return date>=new Date(1900,2,2);
            },
            message: 'You\'ve provided wrong bitrh date'
        }
    },
    course: {
        type: String,
        required: true
    },
    start_date:  {
        type: Date,
        validate: {
            validator: function(date) {
                return date>this.birth_date;
            },
            message: 'You\'ve provided wrong start of the university date'
        }
    },
    end_date: {
        type: Date,
        validate: {
            validator: function(date) {
                return date>this.start_date;
            },
            message: 'You\'ve provided wrong end of the university date'
        }
    }
});
 
var User = mongoose.model('User', userSchema);
 
module.exports = User;