import React from 'react';

const { REACT_APP_API_URL } = process.env;

function MessageFiles(props) {
  const { files } = props;
  if (!files || !files.length) {
    return null;
  }
  return (
    <div>
      {files.map((d) => (
        <div key={d.id}>
          <a href={REACT_APP_API_URL + d.path} target="_blank" rel="noreferrer">
            {d.type.startsWith('image/') ? (
              <img src={REACT_APP_API_URL + d.path} width={100} height={100} alt="" />
            ) : null}
            {d.type.startsWith('video/') ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video>
                <source src={REACT_APP_API_URL + d.path} width={100} height={100} />
              </video>
            ) : null}
            {!d.type.startsWith('image/') && !d.type.startsWith('video/') ? (
              <>
                <i className="fa fa-file fa-3x" aria-hidden="true" />
                <p>{d.name}</p>
              </>
            ) : null}
          </a>
        </div>
      ))}
    </div>
  );
}

export default MessageFiles;
