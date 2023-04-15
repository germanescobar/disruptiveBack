"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var client_1 = require("@prisma/client");
function contentseed() {
    var types = Object.keys(client_1.TypeUser);
    var category = Object.keys(client_1.Category);
    var topics = ['sport', 'word', 'music', 'games', 'travel', 'movie'];
    var seed = [];
    for (var index = 0; index < 12; index += 1) {
        seed.push({
            name: faker_1.faker.lorem.words(2),
            description: faker_1.faker.lorem.lines(1),
            urlImage: faker_1.faker.image.imageUrl(),
            url: faker_1.faker.internet.domainName(),
            updatedAt: faker_1.faker.date.between('2023-01-01T00:00:00.000Z', '2023-04-04T00:00:00.000Z'),
            category: category[Math.floor(Math.random() * 2)],
            topicName: topics[Math.floor(index / 2)]
        });
    }
    return seed;
}
exports.default = contentseed;
//# sourceMappingURL=content.js.map