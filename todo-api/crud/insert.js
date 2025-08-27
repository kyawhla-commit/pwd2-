const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

async function main() {
    const item = await prisma.todo.createMany({
        data: [
            { name: 'Something To Do', done: false },
            { name: 'Another Thing To Do', done: false },
            { name: 'Morething To Do', done: false },
            { name: 'Complete To Do', done: true },
        ]
    })
    console.log(item)
}

main();