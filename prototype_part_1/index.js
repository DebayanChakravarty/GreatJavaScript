document.addEventListener('DOMContentLoaded',function(){

//We will define a constructor function
const display = document.getElementById('contentFromProtoType');

function perSon(name,age){
    this.name = name;
    this.age = age;
}
//add a prototype method

perSon.prototype.greet = function(){
   return `Hello, my name is ${this.name}`;
};

//create the instance of that function

const person1 = new perSon("Gaba", 30);

//we will access the out of that function

display.textContent = person1.greet()



})


