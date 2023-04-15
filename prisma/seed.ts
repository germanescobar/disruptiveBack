/* eslint-disable no-await-in-loop */
import { PrismaClient } from '@prisma/client';

import contentseed from './seedingData/content';
import topicseed from './seedingData/topic';
import userseed from './seedingData/user';

const prisma = new PrismaClient();

async function main() {
  const users = userseed();
  for (let i = 0; i < users.length; i += 1) {
    const contents = contentseed();

    await prisma.user.create({
      data: {
        ...users[i],
        contents: {
          create: [
            ...contents,
          ],
        },
      },
    });
  }
  const topics = topicseed()
  for (let i = 0; i < 6; i += 1) {
    await prisma.topic.create({
      data: {
        ...topics[i],
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    
    process.exit();
  }).finally(() => {
    prisma.$disconnect();
  });


