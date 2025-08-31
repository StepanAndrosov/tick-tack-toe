import { PrismaClient } from "@/generated/prisma";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.game.create({
    data: { name: "game-1" },
  });
  await prisma.game.create({
    data: { name: "game-2" },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
