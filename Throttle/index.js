document.addEventListener('DOMContentLoaded',function(){

    const defaultCount = document.getElementById('defaultCount');
    const throttleCount = document.getElementById('throttleCount');



    document.addEventListener('mousemove',function(){
        MyCounter(defaultCount);
        implementThrottle();

    })


    const implementThrottle = throttLe(()=>{
         MyCounter(throttleCount);
    },1000)

    function throttLe(fn,wait){
        let shouldWait = false;

        return function(...args){
            if(shouldWait) return;

            fn.call(this, ...args);
            shouldWait = true;


            setTimeout(()=>{
                shouldWait = false;
            },wait)


        }
    }


    function MyCounter(elements){
        elements.textContent = (parseInt(elements.innerText) || 0) + 1; 
    }

  


})