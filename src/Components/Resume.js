import React from 'react';
import '../CSS/App.css';
import Header from './Header';
import linkedinLogo from '../img/linkedin.png';

class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  componentDidMount() {
    this.refs.header.getAlert('resume');
  }

  handleBodyTheme = (theme) => {
    //alert('body:'+theme);
    let body = document.getElementById("body");
    body.className = theme;
  }

      
  render() {
    return(
      <body id="body" className="theme--dark">
      <Header ref="header" handleBodyTheme = {this.handleBodyTheme} />

      <div class="skills card">
      <h2> Technical skills</h2>
      <ul class="skills__technical">
        <li>JavaScript</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Git</li>
        <li>HTML</li>
        <li>Handlebars</li>
        <li>CSS</li>
        <li>TDD</li>
        <li>REST</li>
        <li>NPM</li>
        <li>Mocha</li>
        <li>jQuery</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
    <div class="container">
      <div class="education card">
        <h2>Education</h2>
        <ul>
          <li class="resume__item"><span class="bold">Full Stack JavaScript</span>
            {"\n"}School of Applied Technology, Stockholm, Sweden
            {"\n"}(April 2019 - July 2019)
            {"\n"}Highly paced and very intense training program for full stack developers.
          </li>
          <li className="resume__item">
            <span className="bold">Master of Business Administration (Executive Program)</span>
            {"\n"}East West University, Dhaka, Bangladesh
            {"\n"}(April, 2013)
            {"\n"}Major in Marketing
          </li>
          <li class="resume__item">
            <span class="bold">Bachelor of Business Administration (BBA)</span>
            {"\n"}North South University, Dhaka, Bangladesh
            {"\n"}(August, 2007)
            {"\n"}Major in Financial Accounting & Marketing
          </li>
          <li class="resume__item">
            <span class="bold">SFEJ-Intensive Swedish for economists and lawyers and other social scientists</span>
            {"\n"}SIFA-Stockholms intensivsvenska för akademiker, Stockholm, Sweden
            {"\n"}(August 2013 – July 2015)
            {"\n"}Completed level: Svenska som andraspråk 3 (equivalent to Svenska C)
          </li>
        </ul>
      </div>
      <div class="employment card">
        <h2>Employment</h2>
        <ul>
          <li class="resume__item">
            <span class="bold">Social Media Evaluator</span>
            {"\n"}Appen, Stockholm, Sweden
            {"\n"}Duration: Aug 2018 – Nov 2018
            {"\n"}- Evaluated web content according to detailed criteria.
          </li>
          <li class="resume__item">
            <span class="bold">Native language teacher in Bengali</span>
            {"\n"}Elma School AB & Västerholms Friskola AB
            {"\n"}Duration: August, 2015 – July, 2016
            {"\n"}- Taught Bengali as a native language from grade 1 to grade 9.
          </li>
          <li class="resume__item">
            <span class="bold">Part-time translator</span>
            {"\n"}Truecaller, Stockholm, Sweden
            {"\n"}Duration: November, 2013 – November, 2017
            {"\n"}- Translated application text from English to Bengali according to specifications.
          </li>
          <li class="resume__item">
            <span class="bold">Coordinator & Account Manager</span>
            {"\n"}Grameenphone Limited, Dhaka, Bangladesh
            {"\n"}Duration: May, 2007 – March, 2013
            {"\n"}- Coordinated management team and provided logistics support.
            {"\n"}- Met assigned targets for profitable sales volume in assigned accounts.
          </li>
        </ul>
      </div>

    </div>

    <footer className="footer">
            <a href="https://www.linkedin.com/in/tajin-joya-3a347027/"><img src={linkedinLogo} alt=""
                className="social__icon"></img></a>
            <p>&copy; 2019 Tajin Joya.</p>
          </footer>

      </body>
  );

}}


export default Resume;
