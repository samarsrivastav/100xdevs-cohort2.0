import express from 'express'
import route from './routes/route'
import connectDb from './config/db'

const app=express()
connectDb()
app.use(express.json())

app.use('/api',route)

app.listen(8000,()=>{
    console.log('listening on port 8000')
})