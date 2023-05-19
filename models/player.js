const {Schema,model} = require('mongoose')

const PlayerSchema = Schema({
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
    eliminated: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
    },
    executor: {
        type: Schema.Types.ObjectId,
        ref: 'employee'
    }
})

module.exports = model('Player',PlayerSchema)