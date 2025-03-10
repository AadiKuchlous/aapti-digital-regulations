import { data } from '../data.js';
import { showSideModal } from "./side-modal.js";

class ListOfDocumentsCategory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const category = this.getAttribute('category');
    const title = this.getAttribute('title');
    this.render(category, title);
  }

  render(category, title) {
    const style = document.createElement('style');
    style.textContent = `
      #category-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1em;
      }

      #category-icon {
        height: 4em;
        filter: grayscale(1);
      }

      #category-title {
        font-size: 4em;
      }
      
      #documents-list {
        list-style-type: none;
        padding: 0;
      }
    `;
    this.shadowRoot.appendChild(style);

    const header = document.createElement('div');
    header.id = "category-header";

    const header_icon = document.createElement('img');
    header_icon.id = "category-icon";
    header_icon.src = data.icons[category];
    header_icon.alt = category;
    header.appendChild(header_icon);

    const header_text = document.createElement('span');
    header_text.id = "category-title";
    header_text.textContent = title;
    header.appendChild(header_text);

    this.shadowRoot.appendChild(header);

    const documents = this.getDocumentsByCategory(category);
    const list = document.createElement('ul');
    list.id = "documents-list";

    documents.forEach(curDocument => {
      const listItem = document.createElement('li');
      listItem.textContent = curDocument.title;
      list.appendChild(listItem);
    });

    this.shadowRoot.appendChild(list);
  }

  getDocumentsByCategory(category) {
    const documents = data.documents.filter(document => document.id.includes(category));
    return documents || [];
  }
}

customElements.define('list-of-documents-category', ListOfDocumentsCategory);