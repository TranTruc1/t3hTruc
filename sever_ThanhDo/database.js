const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Database connect success");
  })
  .catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://localhost:27017/ThanhDo')
}

const userSchema = new mongoose.Schema({
  name: String,
  account: String,
  password: String,
  sex: String,
  role: String,
  status: String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User: User,
}   