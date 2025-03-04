const { error } = require("console")
const fs=require("fs")
const ldj=require("./lastdatajson");
let add=function(input){
    let dinput ={
        id:(ldj.getLastRecord()+1),
        description:input,
        status:"to-do",
        createAt:new Date().toISOString(),
        updateAt:new Date().toISOString()
    }
    
    fs.writeFile("tasks.json",dinput,"utf-8",(error)=>{
        if(error){
            console.error("Error writing this task")
        }
    })

}
module.exports=add