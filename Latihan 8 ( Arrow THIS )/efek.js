const box = document.querySelector('.box');
box.addEventListener('click', function(){

    let satu = 'size';
    let dua = 'box';

    if(this.classList.contains(satu)){

        [satu,dua] = [dua,satu];
    }

    this.classList.toggle(satu);
    setTimeout( () =>{
        this.classList.toggle(dua);
    }, 500);
});
