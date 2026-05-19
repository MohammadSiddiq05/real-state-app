import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    // CHECK EMAIL
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // CHECK USERNAME
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // HASH PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    res.status(201).json({
      message: "User created successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Failed request to create user",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // EMAIL NOT FOUND
    if (!user) {
      return res.status(401).json({
        message: "Email not found",
      });
    }

    // CHECK PASSWORD
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    // TOKEN AGE
    const age = 1000 * 60 * 60 * 24 * 7;

    // JWT TOKEN
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    // REMOVE PASSWORD
    const { password: userPassword, ...userInfo } = user;

    // SEND COOKIE
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Login Failed",
    });
  }
};

const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({
      message: "User logout successfully",
    });
};

export default {
  register,
  login,
  logout,
};