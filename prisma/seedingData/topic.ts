import { faker } from '@faker-js/faker';
import { Category } from '@prisma/client';

function topicseed() {
  const topics = ['sport','word','music','games','travel','movie'];
  const category = Object.keys(Category);
  const applicationsSeed = [];
  for (let index of topics) {
    applicationsSeed.push(
      {
        name: index,
        urlImage: faker.image.imageUrl(),
        updatedAt: faker.date.between('2023-02-01T00:00:00.000Z', '2023-04-01T00:00:00.000Z'),
        categories: [category[Math.floor(Math.random() * 2)] as Category]
      },
    );
  }
  return applicationsSeed;
}
export default topicseed;
