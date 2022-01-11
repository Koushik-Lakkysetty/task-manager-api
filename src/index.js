const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})


// const multer = require('multer')

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         //!file.originalname.endsWith('.pdf')
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)

//         // cb(undefined,false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//         res.send()
//     }, (error, req, res, next) => {
//         res.status(400).send({ error: error.message })
//     })
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is under Maintainance !!')
// })



//
//without middleware :   new request ---> run route handler
//
//with middleware : new request ---> do something ----> run router handler



// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc1234' }, 'thisismynewcourse')
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() => {
//     // const task = await Task.findById('61c6b9ac8de1012928f72ad2')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('61c6b9888de1012928f72acd')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()