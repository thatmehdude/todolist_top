import "./style.css";
import { loadHome} from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

function clearContent(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
}

function switchTab(loadTabContent){
    clearContent();
    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(loadTabContent());
}

// Add event listeners for each Tab button
document.querySelector('#homeTab').addEventListener('click', () => switchTab(loadHome));
document.querySelector('#menuTab').addEventListener('click', () => switchTab(loadMenu));
document.querySelector('#aboutTab').addEventListener('click', () => switchTab(loadAbout));

//load homepage by default
document.addEventListener('DOMContentLoaded', () => switchTab(loadHome));
