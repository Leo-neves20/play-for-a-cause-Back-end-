import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function seed() {
  if (await prisma.chat.findFirst()) {
    console.info('Database already seeded');
    return;
  }

  const result = await prisma.$transaction(async (tx) => {
    const chat = await tx.chat.create({
      data: {},
    });

    return chat;
  });

  console.info(result);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
