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

    moreInfoHandler() {
      const dialogEl = document.createElement("sl-dialog");
      dialogEl.className = "shop-dialog";
      const dialogContent = html`
        <style>
          .wrap {
            display: flex;
          }
          .image {
            width: 50%;
          }
          .image img {
            width: 100%;
          }
          .content {
            padding-left: 1em;
          }
          .glutenFree span,
          .nutFree span,
          .dairyFree span,
          .vegan span {
            text-transform: uppercase;
            font-weight: bold;
          }

          .price {
            font-size: 1.5em;
            color: var(--brand-color);
          }
        </style>
        <div class="wrap">
          <div class="image">
            <img src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
          </div>
          <div class="content">
            <h1>${this.name}</h1>
            <p>${this.description}</p>
            <p>${this.ingredients}</p>
            <p class="price">$${this.price}</p>
            <!--<p class="glutenFree">Gluten Free: <span>${this.glutenFree}</span></p>
            <p class="nutFree">Nut Free <span>${this.nutFree}</span></p>
            <p class="dairyFree">Dairy Free <span>${this.dairyFree}</span></p>
            <p class="vegan">Vegan <span>${this.vegan}</span></p>-->

            <sl-button @click=${this.addFavHandler.bind(this)}>
              <sl-icon slot="prefix" name="heart-fill"></sl-icon>
              Add to Favourites
            </sl-button>
          </div>
        </div>
      `;
      render(dialogContent, dialogEl);

      document.body.append(dialogEl);

      dialogEl.show();

      dialogEl.addEventListener("sl-after-hide", () => {
        dialogEl.remove();
      });
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
        <sl-card>
          <img slot="image" src="${App.apiBase}/images/${this.image}" />
          <h2>${this.name}</h2>
          <h3>$${this.price}</h3>
          <p>${this.description}</p>
          <p>${this.ingredients}</p>
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
