import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      login: 'username',
      passwordHash: 'passwordhash',
      rating: 1000,
    }
  })
  const user2 = await prisma.user.create({
    data: {
      login: 'username2',
      passwordHash: 'passwordhash2',
      rating: 1000,
    }
  })
  // await prisma.game.create({
  //   data: {
  //     status: 'idle',
  //     players: { connect: { id: user.id } },
  //     field: Array(9).fill(null)
  //   }
  // })
  // await prisma.game.create({
  //   data: {
  //     status: 'idle',
  //     players: { connect: { id: user2.id } },
  //     field: Array(9).fill(null)
  //   }
  // })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
