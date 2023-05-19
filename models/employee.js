const {Schema,model} = require('mongoose')

const EmployeeSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    topRef: {
        type: Schema.Types.ObjectId,
        ref: 'employee',
        required:true,
        default: ''
    },
    bottomRef:{
        type: Schema.Types.ObjectId,
        ref: 'employee',
        required:true,
        default: ''
    }
})

module.exports = model('Employee',EmployeeSchema)