const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

async function main() {
    const item = await prisma.todo.update({
        data: {name: "Update Item"},
        where: {id: 1}
    });

    console.log(item)
}

main()