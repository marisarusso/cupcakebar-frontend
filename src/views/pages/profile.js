import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ProfileView {
  init(){
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <cb-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></cb-app-header>
      <div class="page-content">        
        <h1>Page title</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()