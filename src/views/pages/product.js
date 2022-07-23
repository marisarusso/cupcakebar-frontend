import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ProductView {
  init(){
    document.title = 'Product'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <cb-app-header user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="page-content">        
        <h1>Page title</h1>
        <p>Page content ...</p>
        
      </div>
      <cb-app-footer></cb-app-footer>      
    `
    render(template, App.rootEl)
  }
}


export default new ProductView()