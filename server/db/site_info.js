const mongoose = require('mongoose');
 
// Schema of user collection in data base
const siteinfoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    rules: [
        {
            rule: {
                type: String,
                required: true
            }
    }],
    contacts: {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone_number:{
            type: String
        }
    }
});
 
var SiteInfo = mongoose.model('SiteInfo', siteinfoSchema);
 
module.exports = SiteInfo;