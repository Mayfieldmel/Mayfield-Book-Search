const faker = require('faker');

const db = require('../config/connection');
const { Book, User } = require('../models');

db.once('open', async () => {
  await Book.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // add Books
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let bookId = userId;

    while (bookId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      bookId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { books: bookId } });
  }

  console.log('all done!');
  process.exit(0);
});
