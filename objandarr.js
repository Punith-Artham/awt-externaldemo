const arr = [1, 2, 3, 4, 5];

// ✅ Basic destructuring
const [a, b] = arr; 
console.log(a, b); // 1 2

// ✅ Skipping elements
const [ , , c] = arr;
console.log(c); // 3

// ✅ Default values
const [x, y, z, p = 10] = [7, 8];
console.log(p); // 10

// ✅ Rest operator
const [first, ...rest] = arr;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]


const user={
    namee:"punith",
    age:20,
    location:"nlg",
    contact:{
        email:"apunithnlg19@gmail.com"
    }
}
const {namee,age}=user

console.log(age)

console.log(namee)

console.log(user.contact.email)

const {location:country}=user
console.log(namee,country)

const { gender = "Not specified" } = user;
console.log(gender); 

