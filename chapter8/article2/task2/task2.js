function User(name) {
    this.name = name;
}

const user = new User('John');
const user2 = new user.constructor('Pete');

console.log(user2.name);