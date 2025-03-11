import { data } from '../data.js';

class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.createElement('nav');
    const style = document.createElement('style');
    style.textContent = `
      #custom-navbar {
        background-color: rgb(51 51 51 / 67%);
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
      .navbar-ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
      }
      #title.navbar-li {
      }
      #home-link.navbar-li {
        position: absolute;
        left: 0;
      }
      .navbar-a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      .navbar-svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
    `;

    nav.id = 'custom-navbar';
    nav.innerHTML = `
      <ul class="navbar-ul">
      <li class="navbar-li" id="home-link">
        <a class="navbar-a" href="${data.homeurl}">
        <svg class="navbar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
        </a>
      </li>
      <li class="navbar-li" id="title">
        <a class="navbar-a" href="${data.homeurl}">
        Aapti - Digital Regulations
        </a>
      </li>
      </ul>
    `;

    shadow.appendChild(style);

    shadow.appendChild(nav);
  }
}

customElements.define('custom-navbar', CustomNavbar);