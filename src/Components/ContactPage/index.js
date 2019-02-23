import React, { Component } from 'react';
import App from './style.scss';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <form method="POST">
            <div className="contact-form--name">
              <input type="text" className="contact-form--control" name="text" placeholder="Your Name"/>
            </div>
            <div className="contact-form--email">
              <input type="email" className="contact-form--control" name="email" placeholder="Your Email"/>
            </div>
            <div className="contact-form--message">
              <textarea name="comment" cols="21" rows="10" className="contact-form--control"placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Email
            </button>
          </form>
        </div>
        <div className="contact-info">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
          <p>
            1600 Pennsylvania Ave NW, Washington, 
            DC 20500, United States of America.
          </p>
          <p>
            T: (202) 456-1111 
            M: (202) 456-1212
          </p>
          <div className="contact-info-social">
            <a href="#">f</a>
            <a href="#">t</a>
            <a href="#">g</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;