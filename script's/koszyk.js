"use strict"

let koszykElem = header.querySelector('.header__bar__container-koszyk')
let koszykElem1 = header.querySelector('.header__bar__container-koszyk--koszyk-image')
let koszykElem2 = header.querySelector('.header__bar__container-koszyk--koszyk-name')

function koszykOpening(event){
    if(koszykElem.classList.contains('koszyk-is-open') && !event.target.classList.contains('header__bar__container-koszyk')){
        koszykElem.classList.remove('koszyk-is-open');
        koszykPanel.remove();
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