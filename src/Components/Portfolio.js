import React from 'react';
import '../CSS/App.css';
import Header from './Header';
import linkedinLogo from '../img/linkedin.png';
import portfolioGallery from '../img/fullPageZoomed.png';
import portTodo from '../img/todo.png';
import portassembly from '../img/newsassembly.png';
import portJungle from '../img/tikimetalbar.png';

class Portfolio extends React.Component {

  componentDidMount() {
    this.refs.header.getAlert('portfolio');
  }

  handleBodyTheme = (theme) => {
    let body = document.getElementById("body");
    body.className = theme;
  }

  render() {
    return (
      <div id="body" className="theme--dark">
        <Header ref="header" handleBodyTheme = {this.handleBodyTheme} />
        <div className="container">
        <div className="gallery">
          <div className="gallery__entry card">
            <a href="img/fullPageZoomed.png">
              <img src={portfolioGallery} alt="HTML and CSS with a mobile first approach" className="gallery__image"/>
              <p>HTML and CSS with a mobile first approach</p>
            </a>
          </div>
          <div className="gallery__entry card">
            <a href="img/todo.png">
              <img src={portTodo} alt="ToDo App Project" className="gallery__image"/>
              <p>ToDo App Project</p>
            </a>
          </div>
          <div class="gallery__entry card">
            <a href="img/newsassembly.png">
              <img src={portassembly} alt="" class="gallery__image"/>
              <p>CSS lab: New Assembly</p>
            </a>
          </div>
          <div class="gallery__entry card">
            <a href="img/tikimetalbar.png">
              <img src={portJungle} alt="" class="gallery__image"/>
              <p>CSS lab:The Jungle</p>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <a href="https://www.linkedin.com/in/tajin-joya-3a347027/"><img src={linkedinLogo} alt=""
            className="social__icon"></img></a>
        <p>&copy; 2019 Tajin Joya.</p>
      </footer>     
      </div>
    );

  }} 

export default Portfolio;