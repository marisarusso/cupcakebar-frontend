import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class CartView {
  init(){
    document.title = 'Cart'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
    <cb-app-header user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
    <div class="cart">
      <div class="page-content">        
        <h1>My Cart</h1>
        <br>
        <br>
        <br>
        <br>
        <p> For cupcake purchases on the go!
        <br><b>Coming soon...</b></p>
        
      </div> 
      </div>     
    `
    render(template, App.rootEl)
  }
}


export default new CartView()