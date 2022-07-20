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
      <div class="page-content">        
        <h1>My Cart</h1>
        <p> For cupcake purchases on the go!
        <br> Coming soon...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CartView()