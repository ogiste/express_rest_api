import UserModel from './database/utils';

const express = require('express');
const userRestApi = express();
const port = process.env.PORT || 3000;
const User = new UserModel();

userRestApi.get('/', (req, res) => {
  res.json(
      {
        message: 'Hey, were running.'
      }
  );
});

userRestApi.get('/users', (req, res) => {
  return res.json(
      {
        message: 'Users loaded',
        users: User.list(),
      }
  );
});

userRestApi.get('/users/:username', (req, res) => {
  const foundUsers = User.get(req.params.username);
  if (foundUsers) {
    return res.json(
        {
          message: 'User(s) found',
          users: foundUsers
        }
    );
  } else {
    return res.json(
        {
          message: 'No users were found with that username :('
        }
    );
  }

});

userRestApi.listen(port, () => console.log(`Express API running on ${port}`));
