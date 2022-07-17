import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class HomeView {
  init(){
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <cb-app-header title="Home" user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="page-content-feature feature-box">
        <img class="feature-img" src="/images/feature-img.png"> 
        <div class="feature-txt-box">
        <img class="feature-txt" src="/images/feature-txt.png"> 
        <sl-button class="shop-now-btn" @click=${() => gotoRoute("/products")}>SHOP NOW!</sl-button>
        </div>   
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new HomeView()