const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const pSchema = {
    name:{type:String,required:true},
age:Number,
favoriteFoods:[string],
}
const Person = mongoose.model("Person",pSchema);
module.exports = Person;