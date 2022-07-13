var User = function(firtName, lastName, avatar){
    this.firtName = firtName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firtName} ${this.lastName}`;
    }
}

var author = new User('Trần', 'Trúc', 'Avatar');
var user = new User('Thị', 'Nguyện', 'Avatar');

author.tile = 'Đây là admin';
user.comment = 'Đây là user';

console.log(author.getName());
console.log(user.getName());
