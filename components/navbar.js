class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.createElement('nav');
    const style = document.createElement('style');
    style.textContent = `
      #custom-navbar {
        background-color: #333;
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
      }
      .navbar-li {
        float: left;
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
      <li class="navbar-li">
        <a class="navbar-a" href="/index.html">
        <svg class="navbar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
        </a>
      </li>
      <li class="navbar-li">
        <a class="navbar-a" href="#">
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