import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const crud = { content: 'ABDELAZIZ Bakir', title: 'Software web development', createdAt: 514, author: 'Bakir' };

    const res = await prisma.post.update({
      where: {
        id: 9
      },
      data: {
        name: 'New post name',
        author: ABZ
      },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
main();