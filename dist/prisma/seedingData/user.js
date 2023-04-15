"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var client_1 = require("@prisma/client");
function userseed() {
    var types = Object.keys(client_1.TypeUser);
    var seed = [];
    for (var index = 0; index < 10; index += 1) {
        seed.push({
            email: faker_1.faker.internet.email(),
            type: types[Math.floor(Math.random() * 3)],
            password: faker_1.faker.word.noun(),
            updatedAt: faker_1.faker.date.between('2023-01-01T00:00:00.000Z', '2023-04-01T00:00:00.000Z'),
        });
    }
    return seed;
}
exports.default = userseed;
//# sourceMappingURL=user.js.map