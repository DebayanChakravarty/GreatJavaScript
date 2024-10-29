document.addEventListener('DOMContentLoaded',function(){
    const userInputs = document.querySelector('input');
    const userDefaultText = document.getElementById('default');
    const userDebounceText = document.getElementById('debounce');

    userInputs.addEventListener('input',function(){
        userDefaultText.textContent = userInputs.value;
        implementDebounce(userInputs.value)
    })

    const implementDebounce = deBounce(letTakeTheinputForDebounce,1000);


    function letTakeTheinputForDebounce(val){
        userDebounceText.textContent = val
    }

    function deBounce(fn,wait=500){
        let timer = null;

        return function(...args){
            clearTimeout(timer);

            timer = setInterval(()=>{
                fn.apply(this, args)
            },wait);



        }
    }


})