import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "../../lib/prisma.js"

const register = async (req, res) => {

    const { username, email, password } = req.body


    try {

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                username, email, password: hashPassword
            }
        })

        res.status(201).json({
            message: "User created successfully"
        })
    } catch (err) {
        console.log("err", err)
        res.status(500).json({
            message: "Failed request to create a user"
        })
    }
}

const login = async (req, res) => {

    const { email, password } = req.body

    try {

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return res.status(401).json({
            message: "Invalid credentials"
        })

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) return res.status(401).json({
            message: "Invalid credentials"
        })

        const age = 1000 * 60 * 60 * 24 * 7

        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET_KEY, { expiresIn: age })


        res.cookie("token", token, {
            httpOnly: true,
            // secure : true
            maxAge: age
        }).status(200).json({
            message: "Login successfully"
        })

    } catch (err) {
        console.log("err", err)
        res.status(500).json({
            message: "Login Failed"
        })
    }

}

const logout = (req, res) => {
    res.clearCookie("token").status(200).json({
        message: "User logout successfully"
    })
}

export default { register, login, logout }