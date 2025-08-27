const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

async function main() {
    const item = await prisma.todo.findMany();

    console.log(item)
}

main()