import React from 'react';
import '../CSS/App.css';
import Header from './Header';
import profile from '../img/tajin1.png';
import linkedinLogo from '../img/linkedin.png';


class About extends React.Component {

  componentDidMount() {
    this.refs.header.getAlert('about');
  }

  handleBodyTheme = (theme) => {
    let body = document.getElementById("body");
    body.className = theme;
  }

  render() {
    return(
      <body id="body" className="theme--dark">
        <Header ref="header" handleBodyTheme = {this.handleBodyTheme} />

        <div className="container">
          <div className="profile">
            <div className="profile__photo">
              <img src={profile} alt="" className="profile--photo__styling"></img>
            </div>
            <div className="profile__bio card">
              <h2>A bit about me</h2>

              <p>Hi, I'm Tajin. I enjoy learning new things and solving problems. Right now I'm doing a career program focused
                on JavaScript at salt. It is highly
                paced and very intense training program. I think this program will give me a very good foundation
                for becoming a professional developer.</p>
              <p>Throughout my career, I won most of the challenges with dedication, commitment and strong work ethic. I am
                highly motivated to give my best on this new challenge on mastering programming as well. I believe that
                my learning attitude, self-motivation and hard work would make me a positive addition in your team.
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <a href="https://www.linkedin.com/in/tajin-joya-3a347027/"><img src={linkedinLogo} alt=""
              className="social__icon"></img></a>
          <p>&copy; 2019 Tajin Joya.</p>
        </footer>

      </body>
    );
  }
}


export default About;
