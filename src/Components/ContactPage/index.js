import React, { Component } from 'react';
import App from './style.scss';

class ContactPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      formErrors: {email: ''},
      emaildValid: false,
      formValid: true
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value)});
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    
  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i);
    break;
  }

    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  render() {
    return (
      <div className="contact">
        <div className="wrapper">
          <div className="contact-form">
            <form method="POST" action="#">
              <div className="contact-form__name">
                <input type="text" className="contact-form__control" name="text" placeholder="Your Name" required/>
              </div>
              <div className="contact-form__email">
                <input type="email" className="contact-form__control" name="email" placeholder="Your Email" required value={this.state.email} onChange={this.handleUserInput}/>
                {!this.state.formValid && (
                  <p className="contact-form__error">Email is not valid</p>
                )}
              </div>
              <div className="contact-form__message">
                <textarea name="comment" cols="23" rows="10" className="contact-form__control"placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="contact-form__btn" onClick={function(e){e.preventDefault()}}>
                Send Email
              </button>
            </form>
          </div>
          <div className="contact-info">
            <p className="contact-info__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </p>
            <p className="contact-info__details">
              1600 Pennsylvania Ave NW, Washington, <br/>
              DC 20500, United States of America.
            </p>
            <p className="contact-info__details">
              T: (202) 456-1111 <br/>
              M: (202) 456-1212
            </p>
            <div className="contact-info">
              <a href="#" className="contact-info__social">f</a>
              <a href="#" className="contact-info__social">t</a>
              <a href="#" className="contact-info__social">g</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;