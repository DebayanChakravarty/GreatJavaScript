document.addEventListener('DOMContentLoaded',function(){
    const defaultConterText = document.getElementById("defaultCounter");
    const throttleCounterText = document.getElementById("throttleCounter");



    document.addEventListener('mousemove',function(){
        myCounter(defaultConterText);
        implementThrottle();
    })

    const implementThrottle = myThrottle(()=>{
        myCounter(throttleCounterText);
    },1000)


    function myThrottle(fn,wait=500){
        shouldWait = false;

        return function(...args){

            if(shouldWait) return;

            fn.call(this, ...args);

            shouldWait = true;

            setTimeout(()=>{ shouldWait = false; },wait)

        }

    }


    function myCounter(element){
        element.textContent = (parseInt(element.innerText) || 0) + 1;
    }


})