const express = require("express")
const morgan =require("morgan")

const app = new express();
app.use(morgan('dev'));
app.use(express.json());

//is memory
let tasks= [];

//route to get all task
app.get('/',(req,res)=>{
    res.json(tasks);
})

//route to create a new task 
app.post('/tasks',(req,res)=>{
    const task =req.body 
    tasks.push(task);
    res.send({message:"task added",tasks} )
})
//rote to get a 
app.get('/tasks/:id',(req,res)=>{
    const id =req.params.id;
    console.log(id)
    const task =tasks.find(task=>task.id===id)
    if(!task){
    res.send("task not found")
}else{
    res.json(task)
}

})

app.put('/tasks/:id',(req,res)=>{
    const id =req.params.id;
    const updatedTask =req.body;
    const index =tasks.findIndex((task)=>task.id===id);
    if(index===-1){
    res.send("task not found")
}else{
    tasks.splice(index,1,updatedTask);
// task index = updated
    res.json(tasks)
}

})

//
app.delete('/tasks/:id',(req,res)=>{
    const id =req.params.id;
    const index =tasks.findIndex((task)=>task.id===id);
    if(index===-1){
    res.send("task not found")
}else{
    tasks.splice(index,1);
// task index = updated
    res.json(tasks)
}
    
})




//
app.listen(3005,(req,res)=>{
    console.log("port  is up");
})
