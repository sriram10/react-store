import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from '../components/PageTitle';
class AboutPage extends React.Component  {
    render() {
      return (
        <div>
          <h2>About US</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
  }
   
  export default AboutPage;