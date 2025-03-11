import { data } from '../data.js';

class NavbarDropdown extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    const style = document.createElement('style');
    style.textContent = `
      .navbar-dropdown.show {
        display: block;
      }
      .navbar-dropdown {
        display: none;
        position: absolute;
        background-color: rgb(51 51 51 / 67%);
        min-width: 160px;
        z-index: 10000;
      }
      .navbar-dropdown a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }
      .navbar-dropdown a:hover {
        background-color: rgb(51 51 51 / 100%);
      }
      .dropdown-button {
        all: unset;
        cursor: pointer;
      }
      .dropdown-button::after {
        content: " ▼"; /* Unicode down arrow (add a space before for spacing) */
        font-size: 0.9em;
      }
    `;

    const dropdownButton = document.createElement('button');
    dropdownButton.classList.add('dropdown-button');
    dropdownButton.textContent = 'Categories';
    dropdownButton.onclick = (e) => {
      const dropdown = this.shadowRoot.querySelector('.navbar-dropdown');
      dropdown.classList.toggle("show");
      e.stopPropagation();
    }
    
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(dropdownButton);
  }

  connectedCallback() {
    const dropdown = document.createElement('div');
    dropdown.classList.add('navbar-dropdown');
    dropdown.innerHTML = ``;

    let ids = this.getAttribute('links').split(', ');
    ids.sort().forEach(id => {
      let a = document.createElement('a');
      let thisData = data.containers.find(category => category.id === id);
      a.href = data.links[thisData.id];
      a.textContent = data.containers.find(category => category.id === id).title;
      dropdown.appendChild(a);
    });

    this.shadowRoot.appendChild(dropdown);

    document.addEventListener('click', (event) => {
      if (!event.target.matches('.dropdown-button')) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    });
  };
}

customElements.define('custom-navbar-dropdown', NavbarDropdown);

class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.createElement('nav');
    const style = document.createElement('style');
    style.textContent = `
      #custom-navbar {
        font-family: 'DM Sans', sans-serif;
        background-color: rgb(51 51 51 / 67%);
        overflow: visible;
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
        align-items: center;
      }
      #title.navbar-li {
      }
      #home-link.navbar-li {
        position: absolute;
        left: 0;
      }
      #navbar-dropdown.navbar-li {
        position: absolute;
        right: 10em;
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
      <li class="navbar-li" id="navbar-dropdown">
        <custom-navbar-dropdown
          links="it, agriculture, medicine, data, geospatial, education, ai, broadcast, finance, transport, cyber, labour, gig, ecommerce"
          style="color: white;"
        >
        </custom-navbar-dropdown>
      </li>
      </ul>
    `;

    shadow.appendChild(style);

    shadow.appendChild(nav);
  }
}

customElements.define('custom-navbar', CustomNavbar);