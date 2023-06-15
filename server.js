const express = require("express")
const mongoose =require("mongoose")
const Config = require("./Config/config.js")
const Router=require("./Router/FamilyRouter")
const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose
.connect("mongodb://127.0.0.1/FamilyAssignment")
.then(()=>{
    console.log("connected to database")
}).then(()=>{
    app.listen(( 5666),()=>{
        console.log("server is running on port")
    })
})
.catch((error)=>{
    console.log(error.message)

})