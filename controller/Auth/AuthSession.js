const User = require("../../Model/User")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class Auth{
    static async login (request, response) {
        try {
            const {email, password} = request.body;
            const user = await User.findOne({email});
            if (!user) throw new Error("Invalid credentials.");
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) throw new Error("Invalid credentials.");
            
            const token = jwt.sign({ id: user._id, email: user.email }, 'privateKey', { expiresIn: 60 * 60 });
            user.tokens.push({token, issueAt: new Date()});
            await user.save();
            return response.status(200).json({
                status: true,
                message: "User login successfully.",
                data: user,
                token,
            });
        } catch (error) {
            return response.status(422).json({
                "status": false,
                "message": error.message || "User register successfully."
            });
        }
    }

    static async logout (request, response) {
        try {
            const token = request.headers.authorization;
            if (!token) {
                return request.status(401).json({ message: "Token not provided." });
            }
            const decoded = jwt.verify(token, 'privateKey');
            // Find the user by ID
            const user = await User.findOne({_id: decoded.id})
            user.tokens = user.tokens.filter(t => t.token != token)
            await user.save();
            return response.status(200).json({
                status: true,
                message: "User logout successfully.",
            });
        } catch (error) {
            return response.status(422).json({
                "status": false,
                "message": error
            });
        }
    }

    static async register (request, response) {
        try {
            const {first_name, last_name, email, password } = request.body;
            const user = new User({
                first_name,
                last_name,
                email,
                password
            });
            user.save();
            
            return response.json({
                "status": true,
                "message": "User register successfully.",
                "data": user,
            })
        } catch (error) {
            return response.status(422).json({
                "status": false,
                "message": "User register successfully."
            })
        }
        
    }

    static async forgetPassword (request, response) {
        try {
            const { password, confirmed_password } = request.body;
            
            return response.json({
                "status": true,
                "message": "User register successfully.",
                "data": user,
            })
        } catch (error) {
            return response.status(422).json({
                "status": false,
                "message": "User register successfully."
            })
        }
    }
    
    static async getMe (request, response) {
        const decoded = jwt.verify(request.headers.authorization, 'privateKey');
        const user = User.findOne({_id:decoded.id});
        return response.status(422).json({
            "status": false,
            "message": "User detail fetched successfully.",
            "data": user
        });
    }
}

module.exports = Auth