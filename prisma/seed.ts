import { prisma } from '~/server/db';
import { faker } from '@faker-js/faker';
import { type Prisma } from '@prisma/client';
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin1@gmail.com' },
    update: {},
    create: {
      email: 'admin1@gmail.com',
      name: 'Admin',
      password: 'password',
      role: 'ADMIN',
      image: faker.internet.avatar(),
    },
  });

  const numOfUser = 10;
  for (let i = 0; i <= numOfUser; i++) {
    const createUserInput: Prisma.UserCreateInput = {
      name: faker.internet.displayName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      image: faker.internet.avatar(),
      role: faker.helpers.arrayElement(['ADMIN', 'MANAGER', 'MEMBER']),
    };

    const user = await prisma.user.upsert({
      where: { email: createUserInput.email },
      update: {},
      create: createUserInput,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
