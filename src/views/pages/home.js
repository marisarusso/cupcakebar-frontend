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

  render() {
    const template = html`
      <cb-app-header title="Home" user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="page-content">
      <div class="feature-box">
        <img class="feature-img" src="/images/feature-img.png">
        <div class="feature-txt-box">
        <img class="feature-txt" src="/images/feature-txt.png">
        <sl-button class="shop-now-btn" @click=${() => gotoRoute("/products")}>SHOP NOW!</sl-button>
        </div>   
    </div>
      <div class="image-box calign">
        <img class="home-img1" src="/images/purple.jpeg" />
        <img class="home-img2" src="/images/mint.jpeg" />
        <img class="home-img3" src="/images/coral.jpeg" />
        <img class="home-img4" src="/images/yellow.jpeg" />
    </div> 
    </div>     
    `
    render(template, App.rootEl)
  }
}


export default new HomeView()