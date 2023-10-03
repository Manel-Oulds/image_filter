const buttons = document.querySelectorAll(".btn");
const items = document.querySelectorAll('.item');

buttons.forEach(function(btn){
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        c = e.target.className.split(' ')[1];
        for(let i  = 0; i < items.length ; i++){
            if(c === 'All'){
                items[i].style.display = ''; 
            }
            else{
                if(items[i].classList.contains(c)){
                    items[i].style.display = '';  
                }else{
                     items[i].style.display = 'none';
                }
            }
        }
    });
});


/*
function filter(e){
    e.preventDefault();
    const f= e.target.dataset.filter;
    items.forEach(function(item){
        if(f === "all" ){
            item.style.display = '';
        }else{
            if(item.classList.contains(f)){
                item.style.display = '';  
            }else{
                item.style.display = 'none';
            }
        }
    });
}
})
*/