import { LitElement, html, css } from "@polymer/lit-element";
import { render } from "lit-html";
import { anchorRoute, gotoRoute } from "../Router";
import Auth from "../Auth";
import App from "../App";
import UserAPI from "../UserAPI";
import Toast from "../Toast";

customElements.define(
  "cb-shop",
  class Shop extends LitElement {
    constructor() {
      super();
    }

    static get properties() {
      return {
        id: {
          type: String,
        },
        name: {
          type: String,
        },
        image: {
          type: String,
        },
        description: {
          type: String,
        },
        ingredients: {
          type: String,
        },
        price: {
          type: String,
        },
        glutenFree: {
          type: Boolean,
        },
        nutFree: {
          type: Boolean,
        },
        dairyFree: {
          type: Boolean,
        },
        vegan: {
          type: Boolean,
        },
      };
    }

    firstUpdated() {
      super.firstUpdated();
    }

    async addFavHandler() {
      try {
        await UserAPI.addFavProduct(this.id);
        Toast.show("Product added to favourites");
      } catch (err) {
        Toast.show(err, "error");
      }
    }

    render() {
      return html`
        <sl-card class="product-card">
          <img slot="image" src="${App.apiBase}./images/${this.image}" />
          <h2>${this.name}</h2>
          <h3>$${this.price}</h3>
          <p>${this.description}</p>
          <sl-button href="/product" @click="${anchorRoute}" class="fav-btn">More Info</sl-button>
          <sl-icon-button
            name="heart-fill"
            label="Add to Favourites"
            @click=${this.addFavHandler.bind(this)}
          ></sl-icon-button>
        </sl-card>
      `;
    }
  }
);
