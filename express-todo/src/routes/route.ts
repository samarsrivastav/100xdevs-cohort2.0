import express from 'express'
import { addTodo, getTodo } from '../controller/controller'
const route=express.Router()

route.get('/',getTodo)
route.post('/',addTodo)

export default route