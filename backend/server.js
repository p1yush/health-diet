const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection estabilished successfully")
})


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
})

const User = new mongoose.model("User", userSchema)


app.post("/login", (req, res) => {
    const {name, password} = req.body
    User.findOne({name: name}, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({message: "Login Successful", user: user})
            } else {
                res.send({message: "Password did not match"})
            }
        } else {
            res.send("Not Registered")
        }
    })
})

app.post("/register", (req, res) => {
    const {name, password} = req.body
    User.findOne({name: name}, (err, user) => {
        if(user) {
            res.send({ message: "Already Registerd"})
        } else {
            const user = new User({
                name,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {message: "Registered!"})
                }
            })
        }
    })
 })

app.get("/", (req, res) => {
    res.send("MY API")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})