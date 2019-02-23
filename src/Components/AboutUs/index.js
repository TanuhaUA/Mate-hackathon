import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <div className="about-us__main-cont">
          <div className="about-us__image" />
          <div className="about-us__about-cont">
            <p className="about-us__about">Aliquam metus neque, bibendum sit amet porta at, consequat et
              enim. In ut turpis non ipsum rhoncus porttitor vel ac nunc.
              Maecenas interdum dignissim lorem quis auctor. Donec sit amet
              nulla nisl, aliquam pretium ipsum. Pellentesque sodales ipsum et
              enim rutrum adipiscing. Quisque tincidunt mattis sapien,
              vel posuere.</p>
            <a className="about-us__learn-more" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;