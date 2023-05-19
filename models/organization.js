const {Schema,model} = require('mongoose')

const OrganizationSchema = Schema({
    location: {
        type: String,
        required: true,
    },
    employees: {
        type: Schema.Types.ObjectId,
        ref: 'employee',
        required:true,
    },
    players:{
        type: Schema.Types.ObjectId,
        ref: 'player',
        required:true,
    }
})

module.exports = model('Organization',OrganizationSchema)