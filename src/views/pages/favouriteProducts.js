import App from '../../App'
import { html, render } from 'lit-html'
import { gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class FavouriteProductsView {
  init() {
    document.title = 'Favourite Cupcakes'
    this.render()
    Utils.pageIntroAnim()
  }

  render() {
    const template = html`
      <cb-app-header user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="favourites">
      <div class="page-content">        
        <h1>Your favourite cupcakes!</h1>
        <br>
        <br>
        <br>
        <br>
        <p>Save your favourite tasty cupcakes for later!
        <br><b>New feature coming soon... </b></p>
        
      </div>     
      </div>
      <cb-app-footer></cb-app-footer> 
    `
    render(template, App.rootEl)
  }
}


export default new FavouriteProductsView()