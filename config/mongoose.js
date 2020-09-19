const mongoose = require('mongoose');
//connecting to database
mongoose.connect('mongodb://localhost/task-list_db');
//now we need to check if it has been connected to the db
//acquiring the connection
const db=mongoose.connection;//connection gives us access to db,so this 'db' is connection
//if error in connecting to db
db.on('error',console.error.bind(console,'error connecting to db'));
// if successfully connected
db.once('open',function(){
    console.log('successfully connected to the database');
})