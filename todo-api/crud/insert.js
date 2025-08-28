const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

// async function main() {
//     const item = await prisma.todo.createMany({
//         data: [
//             { name: 'Something To Do', done: false },
//             { name: 'Another Thing To Do', done: false },
//             { name: 'Morething To Do', done: false },
//             { name: 'Complete To Do', done: true },
//         ]
//     })
//     console.log(item)
// }

async function main() {
    const role = await prisma.role.create({
        data: {
            name: "Admin",
            users: {
                create: [
                    { name: "Alice", email: "alice@gmail.ocm" },
                    { name: "Bob", email: "bob@gmail.ocm" },
                ]
            }
        }
    })
    console.log(role)
}

main();