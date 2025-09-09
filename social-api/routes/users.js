const express = require("express");
const router = express.Router();

const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const {auth} = require("../middlewares/auth")


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { da } = require("@faker-js/faker");

router.get('/verify', auth, async (res, req) => {
    return res.json({
        msg: 'user verification success'
    })
})

router.post("/login", async (req, res) => {
  const username = req.body?.username;
  const password = req.body?.password;

  if (!username || !password) {
    return res.status(400).json({ msg: "username and password required..." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRECT);

        return res.json({ token });
      }
    }

    res.status(401).json("incorrect username or password..");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post('/register', async (req, res) => {
    const name = req.body?.name;
    const username = req.body?.username;
    const bio = req.body?.bio;
    const password = req.body?.password;

    if(!name || !username || !password ) {
        return res.status(400).json({
            msg: "name , username and password required..."
        })
    }

    try {
        const hash = await bcrypt.hash(password, 10)


        const user = await prisma.user.create({
            data: {
                name, username, bio, password: hash, 
            }
        })

        return res.json(user);

    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
        
    }
})

module.exports = { usersRouter: router };
