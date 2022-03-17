const mongoose = require('mongoose')
const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://useradmin:admin123456@fiaptecnico.zg8lq.mongodb.net/test')
}

module.exports = conexao