const x:number=1 // js-> XXXX const x=1 XXXXXX

function sum(a:number,b:number):number{
    return a+b
}

//void function callback
function run(fn:()=>void){
    // something(fn)
}
run(function(){
    console.log("sonethgbn")
})
//giving object as parameter
interface User{
    firstName:string,
    lastName:string,
    age:number,
    email?:string //optional...user can choose not to provide
}
function isLegal(user:User){
    //how we call
}

//type--> it can be used to union two different data types

type Greet=number | string // greet can be either number or string
// we can use type in cases where we want to use child of two or more class
type User2={
    firstName:string,
    lastName:string,
    age:number
}

//enums --> when we want only a fixed set of input 
enum Direction{
    Up, // or Up="something" to all
    Down,
    Left,
    Right
}
function callEnum(key:Direction){
    if(key==Direction.Down){
        console.log(key)
    }
}
callEnum(Direction.Up)

// import and export 
// import express from "express" --> older--> const express=require("express")
//export const fn -->older--> module.export=fn