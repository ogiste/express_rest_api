// file system module to perform file operations
const fs = require('fs');
const faker = require('faker');

class UserModel {
  constructor() {
    this.allUsers = [];
    // Set the total number of sample users 2 - 20 users
    this.totalNumberOfUsers = Math.floor((Math.random() * 18) + 2);
    // On creation we generate a random list of users and setup our json file
    this.generateSampleUsers();
  }

  // A method that creates the sample users and the json file that will store them
  async generateSampleUsers() {
    // Create an arbitrary number of user details and add them to an array
    for (let newUsersNumber = 0; newUsersNumber < this.totalNumberOfUsers; newUsersNumber++) {
      this.allUsers.push(
          {
            username: faker.name.firstName(),
            company: faker.company.companyName(),
            phone: faker.phone.phoneNumber(),
            email: faker.internet.email(),
          }
      );
    }
    const usersListContent = JSON.stringify(this.allUsers);
    await fs.writeFile(`${__dirname}/users.json`, usersListContent, 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing users to File.');
        return console.log(err);
      }
    });

  }

  // A method that lists all available users based on the json file
  list() {
    const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf8');
    return JSON.parse(usersData);
  }

  // A method that fetches a specific user based on their username
  get(username = '') {
    const usersList = this.list();
    return usersList.find((user) => user.username === username);
  }

}

export default UserModel;

