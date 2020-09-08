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
            <h3>Kjirgen 30V</h3>
            <p>Discription:</p>
            <p>The best of the best medical thing. Just only here. Just do it.</p>
            <p>Cost:</p>
            <p>$30</p>
        </div>`
        )
        return;
    }
}

header.addEventListener('click', koszykOpening)