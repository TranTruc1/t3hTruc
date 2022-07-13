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
  acount: String,
  name: String,
  role: String,
  status: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User: User,
}   