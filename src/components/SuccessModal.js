import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

function SuccessModal() {
  const { page } = useParams();
  return (
    <div className="success-modal-wrapper">
      <div id="success_tic" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="page-body">
              <div className="head">
                <h3 style={{ marginTop: 5, color: '#031054' }}>
                  Congratulations You Have
                  {' '}
                  {page === 'job' ? 'Posted' : 'Create' }
                  {' '}
                  {page?.toUpperCase()}
                </h3>
              </div>
              <h1 style={{ marginTop: 30, textAlign: 'center' }}>
                <div className="checkmark-circle">
                  <div className="background" />
                  <div className="checkmark draw" />
                </div>
              </h1>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <NavLink className="success-button-home" to="/">Back To Home</NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SuccessModal;
