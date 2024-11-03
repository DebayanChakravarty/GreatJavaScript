document.addEventListener('DOMContentLoaded',function(){

//for loop as control structure, also doesnot modify or create new array
const array = [1,2,3,4,5,6,7,8];

function basicForLoop(myArray){
    for(let i = 0 ; i < myArray.length; i++){
        myArray[i]
    }

    return myArray;
}

//console.log(basicForLoop(array))

//for loop modifying existing array

function modifyArrayforForLoop(myModifyArray){
    for(let i = 0; i < myModifyArray.length; i++){
        myModifyArray[i] = myModifyArray[i] * 2;
    }

    return myModifyArray;
}

//console.log(modifyArrayforForLoop(array));


/* for loop creating a New Array -> Manual Array Creation: We explicitly create array outside the loop. */

const createNewArray = [];
function createNewArrayWithForLoop(myNewArray){
    for(let i =0; i < myNewArray.length; i++){
        createNewArray.push(myNewArray[i] * 3);
    }
    return createNewArray;
}
//console.log(createNewArrayWithForLoop(array));


//more of for loop experiencing break and continue

const breakAndConti = [];

function breakAndContinue(myBreakandCont){

    for(let i =0; i < myBreakandCont.length;i++ ){

        if(i === 3){
            breakAndConti.push("skip index of 3");
            continue;
        }
        else if(i === 5){
            breakAndConti.push("breakIt");
            break;
        }
        else{
            breakAndConti.push(myBreakandCont[i]);
        }

    }
    return breakAndConti;

}

//console.log(breakAndContinue(createNewArray));

/*forEach is a method specifically designed for arrays in JavaScript. 
It executes a provided function once for each array element in order */ 

//array

function nowWithForEach(justArray){

    justArray.forEach(ele => {
      // console.log(ele)
       ele
   });

   return justArray;

}

console.log(nowWithForEach(array))





/* modifying existing array (in place)*/

function modifyArrayWithforEach(modifyArray){

    modifyArray.forEach((ele, index, arr)  => {
        arr[index] = ele * 2;
    });


    return modifyArray;

}

//console.log(modifyArrayWithforEach(array));




/* creating a New Array */

createNewArrayWithForeachLoop = [];

function letsCreateNewArrayWithForEach(newArrayWillbe){
    newArrayWillbe.forEach(ele => {
        createNewArrayWithForeachLoop.push(ele * 5);  
    });

    return createNewArrayWithForeachLoop;
}

console.log(letsCreateNewArrayWithForEach(array));

/* forEach doesn’t return a new array and always returns undefined */

function forEachUndefinedcase(arr){
    return arr.forEach(ele => {
        ele * 10;
    });
}

console.log(forEachUndefinedcase(createNewArrayWithForeachLoop));


/* cannot implement break or continue */

function breakAndContiWithForEach(arr){
    arr.forEach((ele,index) => {

        if(index === 3){
            //console.log(ele,index);

           // break; //->SyntaxError: 'break' is only valid inside a switch or loop statement.

            // continue; //->SyntaxError: 'continue' is only valid inside a loop statement.
        }
        
    });
}

//console.log(breakAndContiWithForEach(createNewArrayWithForeachLoop));

//map
/* 
Automatic Array Creation: 
map automatically creates a new array based on the transformation.
No Explicit Loop: 
The map method abstracts the loop, providing a cleaner and more concise way to transform data.
*/


/* foreach returns undefined  vs Map return new array with transformation */
// function forEachUndefinedcase(arr){
//     return arr.forEach(ele => {
//         ele * 10;
//     });
// }

//-----------------VS(map)------------------

function implementMap(arr){
    return arr.map((ele) => ele * ele);
}

console.log(implementMap(array));

const myMap = array.map((ele) => ele * 12);
console.log(myMap)





})












