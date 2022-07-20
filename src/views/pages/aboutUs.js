import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class AboutUsView {
  init(){
    document.title = 'About Us'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <cb-app-header user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="page-content">        
        <h1>About Us</h1>
        <p>Looking to learn more about Cupcake Bar?
        <br> More details coming soon!! </p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new AboutUsView()