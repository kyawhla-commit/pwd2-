const { PrismaClient } = require("../generated/prisma");
const Prisma = new PrismaClient();

const bcrpyt = require("bcrypt");
const { faker } = require("@faker-js/faker");

async function main() {
  console.log("clearing existing data...");

  await Prisma.comment.deleteMany();
  await Prisma.$executeRawUnsafe(
    'DELETE FROM sqlite_sequence WHERE name="Comment"'
)

  await Prisma.post.deleteMany();
  await Prisma.$executeRawUnsafe(
    'DELETE FROM sqlite_sequence WHERE name="Post"'
)

  await Prisma.user.deleteMany();
  await Prisma.$executeRawUnsafe(
    'DELETE FROM sqlite_sequence WHERE name="User"'
)

  console.log("clearing existing data complete...");

  console.log("data seeding start.....");

  const hash = await bcrpyt.hash("password", 10);

  await Prisma.user.createMany({
    data: [
      { name: "Alice", username: "alice", password: hash },
      { name: "Bob", username: "bob", password: hash },
    ],
  });

  for (let i = 0; i < 20; i++) {
    const random_user = Math.floor(Math.random() * 2) + 1;

    await Prisma.post.create({
      data: { body: faker.lorem.lines(3), userId: random_user },
    });
  }

  for (let i = 0; i < 40; i++) {
    const random_user = Math.floor(Math.random() * 2) + 1;
    const random_post = Math.floor(Math.random() * 20) + 1;

    await Prisma.comment.create({
      data: {
        content: faker.lorem.lines(3),
        userId: random_user,
        postId: random_post,
      },
    });
  }

  console.log("data seeding is done...");
}

main();

