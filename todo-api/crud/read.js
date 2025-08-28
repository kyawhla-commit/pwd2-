const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

async function main() {
    const item = await prisma.role.findMany({
        include: {users: true}
    });

    console.log(item)
}

main()