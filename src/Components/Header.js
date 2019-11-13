import React from 'react';
import '../CSS/App.css';
import headerdark from '../img/coding_background.jpg';
import headerlight from '../img/coding_background_inverted.jpg';


class Header extends React.Component {
  
  state = {
    theme: 'theme--dark',
    selectedTab: 'about'
  };

  componentDidMount() {
    window.addEventListener('load', this.showTheme);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.showTheme);
  }

  showTheme = () => {
    let theme = localStorage.getItem('theme');
    if (theme === null) {
      theme = 'theme--dark';
    }
    //alert('localStorage:'+theme);
    this.setState({
      theme: theme
    }, this.renderThemedUI);
  }
  
  toggleTheme = () => {
    let nextTheme;
    if (this.state.theme === 'theme--dark') {
      nextTheme = 'theme--light';
    } else {
      nextTheme = 'theme--dark';
    }

    this.setState({
      theme: nextTheme
    }, this.renderThemedUI);
  }
  
  renderThemedUI = () => {
    let header = document.getElementById("header");
    let themeChanger = document.getElementById("theme_changer");
  
    let headerImage = headerdark;
    let themeChangerIcon = '☀️';

    if (this.state.theme === 'theme--light') {
      themeChangerIcon = '🌛';
      headerImage = headerlight;
    }
    header.style.backgroundImage = "url('" + headerImage + "')";
    themeChanger.innerHTML = themeChangerIcon;
    //alert('render:' + this.state.theme);
    localStorage.setItem('theme', this.state.theme);
    this.props.handleBodyTheme(this.state.theme);
  }

  getAlert = (parentTab) => {
    this.setState({
      selectedTab: parentTab
    })
  }

  showAlert = (a) => {
    alert(a);
  } 

  render() {
    const selectedTab = this.state.selectedTab;
    let tabs;
    if (selectedTab === 'resume') {
      tabs = <ul className="nav">
              <li><a href="/" >About Me</a></li>
              <li><a href="/resume" className="selected">My Resume</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
    } else if (selectedTab === 'portfolio') {
      tabs = <ul className="nav">
              <li><a href="/" >About Me</a></li>
              <li><a href="/resume">My Resume</a></li>
              <li><a href="/portfolio" className="selected">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
    } else if (selectedTab === 'contact') {
      tabs = <ul className="nav">
              <li><a href="/" >About Me</a></li>
              <li><a href="/resume">My Resume</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact" className="selected">Contact</a></li>
            </ul>
    } else {
      tabs = <ul className="nav">
                <li><a href="/" className="selected">About Me</a></li>
                <li><a href="/resume">My Resume</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
    }

    return(

      <div>
        <header className="header" id="header">
          <div className="header__title">
            <h1>Tajin Joya</h1>
            <h2>Full-Stack JavaScript Developer</h2>
          </div>
        </header>

        <button type="button" id="theme_changer" title="Toggle dark/light mode" onClick={this.toggleTheme}>
          <span role="img" aria-label="theme">🌛</span>
        </button>

        <nav>
          {tabs}
        </nav>
      </div>
    );
  }
}


export default Header;
