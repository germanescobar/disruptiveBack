"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var client_1 = require("@prisma/client");
function topicseed() {
    var topics = ['sport', 'word', 'music', 'games', 'travel', 'movie'];
    var category = Object.keys(client_1.Category);
    var applicationsSeed = [];
    for (var _i = 0, topics_1 = topics; _i < topics_1.length; _i++) {
        var index = topics_1[_i];
        applicationsSeed.push({
            name: index,
            urlImage: faker_1.faker.image.imageUrl(),
            updatedAt: faker_1.faker.date.between('2023-02-01T00:00:00.000Z', '2023-04-01T00:00:00.000Z'),
            categories: [category[Math.floor(Math.random() * 2)]]
        });
    }
    return applicationsSeed;
}
exports.default = topicseed;
//# sourceMappingURL=topic.js.map