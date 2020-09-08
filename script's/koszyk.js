"use strict"

let koszykElem = header.querySelector('.header__bar__container-koszyk')

function koszykOpening(event){
    if(koszykElem.classList.contains('koszyk-is-open') && !event.target.classList.contains('header__bar__container-koszyk')){
        console.log('step 1')
        koszykElem.classList.remove('koszyk-is-open');
        console.log('step 2')
        koszykPanel.remove();
        console.log('step 3')
    }
    if(!event.target.classList.contains('header__bar__container-koszyk')) return;
    if(!koszykElem.classList.contains('koszyk-is-open')){
        koszykElem.classList.add('koszyk-is-open');
        koszykElem.insertAdjacentHTML('beforeend', 
        `<div id='koszykPanel'>
            <img src='' />
            <h3>seven</h3>
            <p>one two</h3>
            <p>$30</h3>
        </div>`
        )
        return;
    }
}

header.addEventListener('click', koszykOpening)