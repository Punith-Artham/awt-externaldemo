//array destucturing
const arr=[1,2,3,4,5]

const [a,b]=arr
console.log(a,b)

const [, ,c]=arr;

console.log(c)

const [x,y,z=10,l,m]=arr

console.log(x+" "+z)

const [first,...rest]=arr

console.log(first)

console.log(rest)

