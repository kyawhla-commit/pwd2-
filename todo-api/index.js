const express = require("express");
const app = express();

const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient()

app.post('/tasks', async (req, res) => {
   const name = req.body?.name;

   if (!name) {
      return res.status(400).json({ msg: "name required" })
   }

   const item = await prisma.todo.create({
      data: { name }
   })
   res.json(item)
})

app.get('/tasks', async (req, res) => {
   const items = await prisma.todo.findMany();
   res.json(items)
})
app.get('/tasks/:id', async (req, res) => {
   const id = req.params.id
   const item = await prisma.todo.findFirst({
      where: { id: Number(id) }
   })
   res.json(item)
})

app.listen(8800, () => {
   console.log("Todo API is running at 8800....")
})