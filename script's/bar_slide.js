"use strict"

let header = document.body.querySelector('header')
let headerNavbar = document.body.querySelector('.header__navbar')
let searchField = document.body.querySelector('.header__bar__form--search-field')
let menuIconElem = document.body.querySelector(".--menu-icon")

function barSlider(event){
    if(event.target.className != '--menu-icon') return;
    headerNavbar.style.display = 'flex';
    searchField.style.display = 'flex';
    menuIconElem.style.display = 'none';
}

header.addEventListener('click', barSlider)