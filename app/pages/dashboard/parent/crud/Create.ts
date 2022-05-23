import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function create() {
  try {
    const data = [
      { content: 'ABDELAZIZ Bakir', title: 'Software web development', createdAt: 514, author: 'Bakir' },
      { content: 'ABDELAZIZ Bakir 2', title: 'Software web development 2', createdAt: 515, author: 'Bakir 2' },
      { content: 'ABDELAZIZ Bakir 3', title: 'Software web development 3', createdAt: 516, author: 'Bakir 3' },
      { content: 'ABDELAZIZ Bakir 4', title: 'Software web development 4', createdAt: 517, author: 'Bakir 4' },
    ];

    const channel = {  content: 'ABDELAZIZ Bakir', title: 'Software web development', createdAt: 514, author: 'Bakir' }
  
    const res = await prisma.post.create({
      data: channel,
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

main()