import { User } from './models/User';

const user = new User({id: 2, name: 'newer name', age: 10});

user.on('save', () => {
  console.log(user);
});

user.save();
