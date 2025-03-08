import { data } from '../data.js';
class SideModal extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'document-id'];
  }

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
          z-index: 1001;
          padding: 1em;
        }
        :host(.open) {
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
        #close-modal-container {
          width: 100%;
          text-align: right;
        }
        #close-modal {
          background: none;
          border: none;
          color: #aaa;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        #modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1em;
        }
        #modal-link {
          background: none;
          border: none;
          color: #333;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        #modal-title {
          margin-top: 0;
        }
        .box-types-container {
          display: flex;
          flex-direction: row;
        }

.box-type {
  font-weight: normal;
  width: fit-content;
  color: white;
  border-radius: 0.2em;
  padding: 0.3em;
}

.box-type-framework {
  background-color: rgba(250,199,13,255);
}

.box-type-legislation {
  background-color: rgba(87,95,186,255);
}

.box-type-policy {
  background-color: rgba(149,212,88,255);
}

.box-type-rules {
  background-color: rgba(241,77,46,255);
}

.box-type-direction {
  background-color: rgba(30,172,144,255);
}

.box-type-guideline {
  background-color: rgba(255,0,0,255);
}

.box-type-infrastructure {
  background-color: rgba(23,205,212,255);
}

.box-type-order {
  background-color: rgba(0,0,0,255);
}

.box-type-standards {
  background-color: rgba(169,63,188,255);
}

.box-type-circular {
  background-color: rgba(105,220,224,255);
}
      </style>
      <div id="side-modal" class="side-modal">
        <div class="side-modal-content">
            <div id="close-modal-container">
            <button id="close-modal" aria-label="Close modal">&times;</button>
            </div>
            <div class="box-types-container" id="modal-document-types">
            </div>
            <div id="modal-header">
              <h2 id="modal-title"></h2>
              <a id="modal-link" target="_blank">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                  <path d="M15 5h6v6" />
                  <path d="M12 12 21 5" />
                  <path d="M21 14v7h-16v-16h7" />
              </a>
            </div>
            <p id="modal-content"></p>
            <span>Inital Date of Publication: </span><span id="modal-date">2006</span>
        </div>
    </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'document-id') {
      const document_id = this.getAttribute('document-id');
      const doc_data = data.documents.find(d => d.id === document_id);
      this.shadowRoot.querySelector('#modal-title').textContent = doc_data.title;
      this.shadowRoot.querySelector('#modal-link').href = doc_data.link;
      this.shadowRoot.querySelector('#modal-content').textContent = doc_data.description;
      this.shadowRoot.querySelector('#modal-date').textContent = doc_data.initial_year_of_publication;
      this.shadowRoot.querySelector('#modal-document-types').innerHTML = '';
      doc_data.type.split(", ").forEach(element => {
        let div = document.createElement("div");
        div.classList.add(`box-type-${element.toLowerCase()}`, "box-type");
        div.textContent = element;
        this.shadowRoot.querySelector('#modal-document-types').append(div);
      });
    }

  }

  connectedCallback() {
    this.shadowRoot.querySelector('#close-modal').addEventListener('click', () => document.querySelector("#side-modal-container").classList.remove('open'));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#close-modal').removeEventListener('click', () => {});
  }
}

customElements.define('side-modal', SideModal);