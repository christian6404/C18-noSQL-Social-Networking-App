const { Schema, model } = require('mongoose');
const Reactions = require('./reactions')

const thoughtsSchema = new Schema({
    thoughtsText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        require: true,
    },
    reactions: {
        type: Array,
    }
})

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thoughts = model('thoughts', thoughtsSchema)

module.exports = Thoughts;