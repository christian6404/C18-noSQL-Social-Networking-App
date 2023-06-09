const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter a Valid Email Address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
              },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'friends',
              }
        ]
    }
)
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('user', userSchema)

module.exports = User