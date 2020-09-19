const express=require('express');
const db=require('./config/mongoose');
const Task=require('./models/task')
const app=express();
const port=3000;
var path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));
app.use(express.urlencoded());


app.get('/',(req,res)=>{

    Task.find({},(err,tasks)=>{
        if(err){
            console.log('error in fetching tasks');
            return ;
        }

        return res.render('home',{
            task_list:tasks,
            
        });
    })
   
});
app.post('/remove-task',(req,res)=>{
    //console.log(req.body);
    if(req.body.check==undefined){
    return res.redirect('back');
    }
    else{
    for(let i=0;i<req.body.check.length;i++){
        Task.findByIdAndDelete(req.body.check,(err)=>{
            if(err){
                console.log('error in deleteing an object from db');
                return ;
            }
            console.log('deleted');
           
        })
    }
    }
    return res.redirect('back');
})
app.post('/create-task',(req,res)=>{
    Task.create({
        task:req.body.task,
        importance:req.body.importance,
        deadline:req.body.deadline
    },(err,newTask)=>{
        if(err){
            console.log('error on creating a contact');
            return ;
        }
        //console.log('**********',newTask);
        return res.redirect('back');
    })
    
});
app.listen(port,(err)=>{
    if(err){
    console.log('error',err);
    return ;
    }
    console.log('up on port 3000');
})