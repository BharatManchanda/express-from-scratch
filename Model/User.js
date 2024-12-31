const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const TokenSchema = mongoose.Schema({
    token: String,
    issueAt: Date,
})

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email regex
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    phone: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: {
        type: [TokenSchema],
    }
},
    {
        timestamps: true
    }
)

// Hash password before saving the user
UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;