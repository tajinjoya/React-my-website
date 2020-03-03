import React from 'react';
import '../CSS/App.css';
import Header from './Header';
import linkedinLogo from '../img/linkedin.png';


class Contact extends React.Component {

  componentDidMount() {
    this.refs.header.getAlert('contact');
  }

  handleBodyTheme = (theme) => {
    let body = document.getElementById("body");
    body.className = theme;
  }

  render() {
    return(

      <div id="body" className="theme--dark">
        <Header ref="header" handleBodyTheme = {this.handleBodyTheme} />

        <div className="container">
          <div className="contact__details card">
            <h3>Contact Details</h3>
            <ul className="contact__info">
              <li className="phone"><a href="tel:555-6425">(+46) 73 726 7277 </a></li>
              <li className="mail"><a href="mailto:tajin_joya@outlook.com">tajin_joya@outlook.com</a></li>
            </ul>
          </div>
        </div>

        <footer className="footer">
          <a href="https://www.linkedin.com/in/tajin-joya-3a347027/"><img src={linkedinLogo} alt=""
              className="social__icon"></img></a>
          <p>&copy; 2019 Tajin Joya.</p>
        </footer>

      </div>
    );
  }
}


export default Contact;
