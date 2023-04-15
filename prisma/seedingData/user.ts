import { faker } from '@faker-js/faker';
import { TypeUser } from '@prisma/client';

function userseed() {
  const types = Object.keys(TypeUser);

  const seed: any[] = [];
  for (let index = 0; index < 10; index += 1) {
    seed.push(
      {
        email: faker.internet.email(),
        type: types[Math.floor(Math.random() * 3)] as TypeUser,
        password: faker.word.noun(),
        updatedAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-04-01T00:00:00.000Z'),
      },
    );
  }
  return seed;
}
export default userseed;
