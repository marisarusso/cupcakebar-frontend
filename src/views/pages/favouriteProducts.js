import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class FavouriteProductsView {
  init(){
    document.title = 'Favourite Cupcakes'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <cb-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="page-content">        
        <h1>My Favourites</h1>
        <p>Save your favourite tasty cupcakes for later!
        <br> Coming soon... </p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new FavouriteProductsView()