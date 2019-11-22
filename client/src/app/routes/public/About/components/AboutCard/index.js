import React from 'react';
import CardLayout from 'components/CardLayout';
import Logo from './../../../../../../assets/images/logo-transparent2.png';

const GalleryCard = () => {
  return (
    <CardLayout styleName="col-lg-6">
      <img className="card-img-top" src={Logo} alt=""/>

      <div className="card-body">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="card-title">H&B Fencing</h2>
            <p className="text-muted">15608 S Brentwood St, Channelview, TX 77530</p>
          </div>
          <div className="col-sm-4">
            <div className="text-muted text-sm-center">
              <i className="zmdi zmdi-favorite-outline zmdi-hc-fw zmdi-hc-lg mt-3 mb-1"/>
              <span className="mx-auto d-block">24 Reviews</span>
            </div>
          </div>
        </div>

        <a  className="reviewsButton" href="https://www.google.com/search?sxsrf=ACYBGNTMrUWzvuwnj94bWDUZoQyO3QulSg%3A1573974046610&source=hp&ei=HvDQXfayIuSMtgWNwoCoBQ&q=h+%26+b+fencing+and+landscaping&oq=h&gs_l=psy-ab.1.0.35i39l2j0l2j0i131j0l2j0i131j0j0i131.1280.1280..2704...0.0..0.97.97.1......0....1..gws-wiz.9iorBrBIais"><span className="jr-link card-link"><i className="zmdi zmdi-favorite-outline zmdi-hc-fw zmdi-hc-lg mt-3 mb-1"/>Read Reviews</span></a>
        <span className="jr-link card-link"><i className="zmdi zmdi-phone zmdi-hc-fw"/>Call Now</span>
       </div>
    </CardLayout>
  );
};

export default GalleryCard;