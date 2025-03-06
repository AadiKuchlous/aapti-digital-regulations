import { data } from '../data.js';
class SideModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100%;
          background: white;
          box-shadow: -2px 0 5px rgba(0,0,0,0.5);
          transition: transform 0.3s ease;
          transform: translateX(100%);
        }
        :host([open]) {
          display: block;
          transform: translateX(0);
        }
        .header {
          padding: 1em;
          background: #f1f1f1;
          border-bottom: 1px solid #ccc;
        }
        .content {
          padding: 1em;
        }
        .close {
          cursor: pointer;
          float: right;
        }
      </style>
      <div id="side-modal" class="side-modal">
        <div class="side-modal-content">
            <button id="close-modal" class="close" aria-label="Close modal">&times;</button>
            <h2 id="modal-title"></h2>
            <h3>
              <a id="modal-link" href="" target="_blank">Read More</a>
            </h3>
            <p id="modal-content"></p>
            <span>Inital Date of Publication: </span><span id="modal-date">2006</span>
        </div>
    </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.close').addEventListener('click', () => this.removeAttribute('open'));

    const document_id = this.getAttribute('document-id');
    const document = data.documents.find(d => d.id === document_id);
    this.shadowRoot.querySelector('#modal-title').textContent = document.title;
    this.shadowRoot.querySelector('#modal-link').href = document.link;
    this.shadowRoot.querySelector('#modal-content').textContent = document.description;
    this.shadowRoot.querySelector('#modal-date').textContent = document.initial_year_of_publication;

    const modal_is_open = this.getAttribute('open');
    if (modal_is_open === 'true') {
      this.addAttribute('open');
    }
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.close').removeEventListener('click', () => this.removeAttribute('open'));
  }
}

customElements.define('side-modal', SideModal);