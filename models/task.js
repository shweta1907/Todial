const mongoose=require('mongoose');
// to use only date and not the time
var DateOnly = require('mongoose-dateonly')(mongoose);
//creating schema for storing in database
const Taskschema= new mongoose.Schema(
    {
        task:{
            type:String,
            required:true
        },
        deadline:{
            type:DateOnly,
            required:true
        },
        importance:{
            type:String,
            required:true
        }
    }
);
const Task=mongoose.model('Task',Taskschema);
module.exports=Task;
