const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const User = require("./models/user")

require("dotenv").config()

const username = process.env.USERNAME
const password = process.env.PASSWORD

const app = express()

app.use(cors())
app.use(express.json())

const url = "mongodb+srv://"+username+":"+password+"@cluster0.mreev.mongodb.net/list?retryWrites=true&w=majority"
mongoose.connect(url)
    .then((res) =>
        app.listen(5000, () => {

            console.log("App listening to port 5000 after establishing a connection with database")
        }))
    .catch((err) => console.log(err))

app.get('/login', (req, res) => {

    res.send("Hello login")
})

app.post('/login', (req, res) => {

    const { user, pwd } = req.body

    console.log(user, pwd)
    res.json({

        user,
        pwd
    })
})
