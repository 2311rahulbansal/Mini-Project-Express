import express from "express";

const server=express();


server.get("/",(req,res)=>{
    res.send("Hello World");
});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});

