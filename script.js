const panels=document.querySelectorAll('.panel');

    panels.forEach(panel=> panel.addEventListener('click',toggleOpen));
    panels.forEach(panel=> panel.addEventListener('transitionend',toggleOpenActive));

    function toggleOpen(){
        this.classList.toggle('open');
    }

    function toggleOpenActive(e){
        // console.log(e.propertyName);
        if(e.propertyName.includes('flex-grow')){
          this.classList.toggle('open-active');
        }
    }