const mongoose = require('mongoose');
const url ='mongodb+srv://users:users@cluster0.hrhamxz.mongodb.net/folks?retryWrites=true&w=majority';

mongoose.connect(url,{
    useNewUrlParser: true, // Use the new parser
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('connected with the database!');
})
.catch(err=> console.error(err));

const Schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email:mongoose.Schema.Types.Mixed,
    password:mongoose.Schema.Types.Mixed,
    skills:mongoose.Schema.Types.Mixed,

});

module.exports = Schema;
