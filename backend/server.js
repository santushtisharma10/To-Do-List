require("dotenv").config()

const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const User = require("./models/user")

const app = express()

app.use(cors())
app.use(express.json())

const url = "mongodb+srv://"+process.env.USER_NAME+":"+process.env.USER_PWD+"@cluster0.mreev.mongodb.net/list?retryWrites=true&w=majority"
mongoose.connect(url)
    .then((res) =>
        app.listen(5000, () => {

            console.log("App listening to port 5000 after establishing a connection with database")
        }))
    .catch((err) => console.log(err))

app.get('/login', (req, res) => {

    res.send("Hello login")
})

app.post('/login', async(req, res) => {

    const { user, pwd } = req.body

    console.log(user, pwd)

    const checkUser = await User.findOne({username: user})

    console.log(checkUser)

    if(checkUser) {
        console.log("sorry user exist")
        res.status(500)
        res.json({
            message: "User already exist"
        })
        return ;
    }
    const login = new User({

        username:user, 
        password:pwd
    })
    login.save()
    res.json({

        message:"success"
    })
})
