let mongoose = require('mongoose')

const server = 'localhost:27017'
const database = 'my_db'
const user = 'admin'
const password = 'root'

// mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
// mongodb://localhost:27017/myproject
// mongoose.connect(`mongodb://localhost:27017/my_db`)
//mongoose.connect('mongodb://pritam:pritam@cluster0-qhmqk.mongodb.net:27017/my_db');
mongoose.connect('mongodb://pritam:pritam@cluster0-shard-00-00-qhmqk.mongodb.net:27017,cluster0-shard-00-01-qhmqk.mongodb.net:27017,cluster0-shard-00-02-qhmqk.mongodb.net:27017/my_db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number
})

module.exports = mongoose.model('Customer', CustomerSchema)
