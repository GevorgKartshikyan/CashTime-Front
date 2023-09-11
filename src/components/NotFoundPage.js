import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page_404">
      <div className="row-not-found">
        <div>
          <div>
            <div className="four_zero_four_bg" />
            <div className="contant_box_404">
              <h3 className="title-not-found">
                Look like you&apos;re lost
              </h3>
              <p className="desc-not-found">the page you are looking for not avaible!</p>
              <NavLink to="/home" className="btn job__card__btn">Go to Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
