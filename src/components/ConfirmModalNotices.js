import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import { confirmNotice } from '../store/actions/notice';

function ConfirmModalNotices({
  noticeJobTo,
  id,
  friendId,
  setShowModal,
  jobName,
  friendLastName,
  friendName,
  method,
}) {
  console.log(method);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageText, setMessageText] = useState('');
  const userName = useSelector((state) => state.users.profile.firstName);
  useEffect(() => {
    if (method === 'job') {
      setMessageText(`Hello ${friendName} ${friendLastName}, Thank you for applying for the position I posted. I would like to share some information about this role and the hiring process with you. If you have any questions or if you're interested in additional information, please don't hesitate to ask. Best regards,${userName}`);
    } else {
      setMessageText(`Hello ${friendName} ${friendLastName}, Thank you for choosing me. I would like to share some information about me and the hiring process with you. If you have any questions or if you're interested in additional information, please don't hesitate to ask. Best regards, ${userName}`);
    }
  }, [friendId, userName, id, noticeJobTo, friendLastName, friendName]);
  const handleSendAccept = useCallback(async () => {
    document.body.style.overflowY = 'auto';
    const { payload } = await dispatch(confirmNotice({
      id,
      noticeJobTo,
      friendId,
      messageText,
    }));
    if (payload.status === 'ok') {
      navigate(`/messages/${friendId}`);
    }
  }, [id, noticeJobTo, friendId, messageText]);
  return (
    <div id="confirm-modal-notice">
      <div className="modal">
        <article className="modal-container">
          <header className="modal-container-header">
            <h1 className="modal-container-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#031054"
                  d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                />
              </svg>
              Terms and Services
            </h1>
            <button
              onClick={() => {
                document.body.style.overflowY = 'auto';
                setShowModal(false);
              }}
              type="button"
              className="icon-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
            </button>
          </header>
          <section className="modal-container-body rtf">
            <h2>Details and Information</h2>
            <br />
            {method === 'job' ? (
              <p style={{ fontSize: 16 }}>
                &quot;A freelancer
                {' '}
                <strong>{`${friendName || ''} ${friendLastName || ''}`}</strong>
                {' '}
                responded to the job
                {' '}
                <strong>{jobName ? `${jobName.toUpperCase()}` : ''}</strong>
                {' '}
                you posted. Please note
                that we,
                {' '}
                <strong style={{
                  color: '#031054',
                  fontSize: 18,
                }}
                >
                  Cash-Time
                </strong>
                , provide a platform for freelance professionals and clients, but we
                do not assume responsibility for the quality of work performed by the freelancer or
                their professional skills.

                For any complaints, questions, or issues related to the completed work
                or interactions
                with the freelancer, we are always ready to provide you with support. Our customer
                support service is available to assist you in resolving any concerns that may arise.
                <br />
                <br />
                Best regards,
                Your
                {' '}
                <strong style={{
                  color: '#031054',
                  fontSize: 18,
                }}
                >
                  Cash-Time
                </strong>
                {' '}
                Team&quot;
                <br />
                <br />
              </p>
            ) : (
              <p style={{ fontSize: 16 }}>
                &quot;
                <strong>{`${friendName || ''} ${friendLastName || ''}`}</strong>
                {' '}
                responded to you for work.
                {' '}
                Please note
                that we,
                {' '}
                <strong style={{
                  color: '#031054',
                  fontSize: 18,
                }}
                >
                  Cash-Time
                </strong>
                , provide a platform for freelance professionals and clients, but we
                do not assume responsibility for the quality of work performed by the freelancer or
                their professional skills.

                For any complaints, questions, or issues related to the completed
                work or interactions
                with the freelancer, we are always ready to provide you with support. Our customer
                support service is available to assist you in resolving any concerns that may arise.
                <br />
                <br />
                Best regards,
                Your
                {' '}
                <strong style={{
                  color: '#031054',
                  fontSize: 18,
                }}
                >
                  Cash-Time
                </strong>
                {' '}
                Team&quot;
                <br />
                <br />
              </p>
            )}

            <h2>Application Acknowledgment</h2>
            <br />
            {method === 'job' ? (
              <p>
                Dear
                {' '}
                <strong>{userName}</strong>
                , we warn you that a message will
                be sent from your name to the freelancer
                {' '}
                <strong>{`${friendName || ''} ${friendLastName || ''}`}</strong>
                {' '}
                with the text
              </p>
            ) : (
              <p>
                Dear
                {' '}
                <strong>{userName}</strong>
                , we warn you that a message will
                be sent from your name to me
                {' '}
                with the text
              </p>
            )}
            <br />
            <p>
              <i>
                &quot;Hello
                {' '}
                <strong>{`${friendName || ''} ${friendLastName || ''}`}</strong>
                ,

                Thank you for choosing me. I would like to share some
                information about me and the hiring process with you.
                If you have any questions or if
                you&apos;re interested in additional information, please
                don&apos;t hesitate to ask
                Best regards,
                <strong>{userName || ''}</strong>
                &quot;
              </i>
            </p>
            <br />
            <h2>Are you sure you want to continue?</h2>
          </section>
          <footer className="modal-container-footer">
            <button
              onClick={() => {
                document.body.style.overflowY = 'auto';
                setShowModal(false);
              }}
              type="button"
              className="button is-ghost"
            >
              Cancel
            </button>
            <button type="button" onClick={handleSendAccept} className="button is-primary">
              Send
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}

export default ConfirmModalNotices;
