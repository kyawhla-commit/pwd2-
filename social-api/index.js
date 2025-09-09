const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const { usersRouter } = require("./routes/users");
app.use("/users", usersRouter);

const { auth } = require("./middlewares/auth");

app.get("/posts", auth, async (req, res) => {
  const posts = await prisma.post.findMany({ take: 10})
  res.json(posts)
});

app.listen(8800, () => {
  console.log("social api is running at 8800....");
});
