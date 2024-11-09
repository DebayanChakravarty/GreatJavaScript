/* JavaScript, a closure is a function that "remembers" the environment in which it was created, even after that environment no longer exists. 
This means that a closure has access to variables in its outer function scope, even after the outer function has finished executing.

How Closures Work
A closure is created when:
An inner function is defined within an outer function.
The inner function is returned or passed around in a way that allows it to be called later.*/

document.addEventListener('DOMContentLoaded',function(){

    // Basic Closure

    function myCounter(){
        let count =0; //first 0 -> 1 (maintaining the state 1), 2nd 1 -> 2 (updating the state 2)

        return function (){
            return count++;
        }
    }

    const counter = myCounter();

    console.log(counter());
    console.log(counter());
    console.log(counter());



    //Closure with Parameters

   // 1st input - name -> dev
   // 2nd input - message -> Hi 
   // output - Hi dev 

   function sayHi(name){
    return function (message){
        return `${message}, ${name}`
    }
   }

   const sayHitouser = sayHi('Dev');

   console.log(sayHitouser('Hi'));


   //Using Closures in Loops

   function myArrayLoop(){

    let arr = [];
    
    //loop

    for(let i = 0; i < 5; i++){

        arr[i] = function(){
            return i;
        }
       
    }

    return arr

   }

   const array = myArrayLoop();

   console.log(array[1]());
   console.log(array[2]());
   console.log(array[3]());
 




})






