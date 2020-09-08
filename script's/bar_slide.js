"use strict"

let header = document.body.querySelector('header')
let headerNavbar = document.body.querySelector('.header__navbar')
let searchField = document.body.querySelector('.header__bar__form--search-field')
let searchButton = document.body.querySelector('.header__bar__form--sumbit')
let menuIconElem = document.body.querySelector(".--menu-icon")

function barSlider(event){
    if(!event.target.classList.contains('--menu-icon')) return;
    if(!menuIconElem.classList.contains('--bar-open')){
        menuIconElem.classList.add('--bar-open')
        headerNavbar.style.display = 'flex';
        searchField.style.display = 'flex';
        menuIconElem.innerHTML = 'x';
        return;
    }
    if(menuIconElem.classList.contains('--bar-open')){
        menuIconElem.classList.remove('--bar-open')
        headerNavbar.style.display = 'none';
        searchField.style.display = 'none';
        searchButton.style.display = 'none';
        menuIconElem.innerHTML = '-';
    }
}

header.addEventListener('click', barSlider)