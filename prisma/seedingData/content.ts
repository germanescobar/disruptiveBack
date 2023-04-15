import { faker } from '@faker-js/faker';
import { TypeUser, Category } from '@prisma/client';

function contentseed() {
  const types = Object.keys(TypeUser);
  const category = Object.keys(Category);
  const topics = ['sport','word','music','games','travel','movie'];
  const seed = [];

  for (let index = 0; index < 12; index += 1) {
    seed.push(
      {
        name: faker.lorem.words(2),
        description: faker.lorem.lines(1),
        urlImage: faker.image.imageUrl(),
        url: faker.internet.domainName(),
        updatedAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-04-04T00:00:00.000Z'),
        category: category[Math.floor(Math.random() * 2)] as Category,
        topicName: topics[Math.floor(index/2)]
      },
    );
  }
  return seed;
}
export default contentseed;
