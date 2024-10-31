document.addEventListener('DOMContentLoaded',function(){
    //We will declare the array of int 
    const arrayOfInt = [2,4,55,6,77,8]; //Array->this 
    //we will create Protype function to give square of the int val
    Array.prototype.mySquare = function(){
        const len = this.length;
        const res = new Array(len);

        for(let i = 0; i < len; i++){
            res[i] = this[i] * this[i];
        }

        return res;


    }
    // we will access the prototype function 

    const squareOFmyArrayEle = arrayOfInt.mySquare();
    //we will see the output in console

    console.log(squareOFmyArrayEle);


    //lets optimize it our mySquare 
    // map 

    Array.prototype.myOptimizeSquare = function(){
        //Array ->this-> ele  (we are passing like exmaple arrayOfInt.mySquare();)
        return this.map((el)=> el * el);
    }

    const squareOFmyArrayElePassItToOptimizePrototypeFunction = arrayOfInt.myOptimizeSquare();

    console.log(squareOFmyArrayElePassItToOptimizePrototypeFunction);


})