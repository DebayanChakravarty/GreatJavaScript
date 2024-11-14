//Example 1 (filter)
//we will use to filter an array which is > 5

const arr = [1,2,3,4,5,6,7,8,9,10];
const fn = (i) => i > 5;

//Method 1 
function arrayFilterTraditionalWay(ar,condition){
    return ar.filter(condition);
}
console.log(arrayFilterTraditionalWay(arr,fn));
console.log(arrayFilterTraditionalWay(arr,(i) => i == 4 ))
//Method 2
const arrayFilter = (ar,condition)=>{
    return ar.filter(condition);
}
console.log(arrayFilter(arr, (i) => i < 5))
//Method 3 
Array.prototype.MyCustomefilter = function(condition){
    return this.filter(condition)
}
console.log(arr.MyCustomefilter((i) => i != 4))


//Example 2 (map)
//We will transform an array * 2 , array ** 2
const fnMap = (i) => i * 2;
const transformIt = (ar,condition)=>{
    return ar.map(condition);
}

console.log(transformIt(arr,fnMap))
console.log(transformIt(arr,(i) => i ** 2))


//Example 3 (Reduce)
//We will accumulate from the given array . Sum ,Product

const accumulateIt = (ar, callback, initialValue)=>{
    return ar.reduce(callback, initialValue);
}
console.log(accumulateIt(arr, (acc, i) => acc + i, 0)); //acc = 1 , next -> 2 now 1 + 2 (cont..)


//Example 4 (forEach)
//Greetings message like Hello ${name}
const names = ['Alice', 'Bob', 'Charlie'];
function greeTings(nm, callback){
    nm.forEach(callback);   //just as a Note: ======= array.forEach(element => { console.log(`Hello, ${name}!`) });
   
}
greeTings(names, (name) => console.log(`Hello, ${name}!`))


//Example 5 
//use callback functions to filter arrays of objects based on specific properties or condition
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
  ];

  function filterByAge(user,condition){
    return user.filter(condition);
}

console.log(filterByAge(users, (user) => user.age >= 30));

//Method 2

Object.prototype.filterByAgeProto = function(condition){
    return this.filter(condition);

}
console.log(users.filterByAgeProto((users) => users.name === 'Alice'));

//Example 6 (sort)
//Custom Sorting - accesding order and descending order
const scores = [10, 5, 8, 1, 7];

function customShortIt(ar,condition){
    return ar.sort(condition);
}

console.log(customShortIt(scores, (a, b) => a - b))
console.log(customShortIt(scores, (a, b) => b - a))
