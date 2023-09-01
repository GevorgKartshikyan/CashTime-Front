import React, { useEffect } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

function TestInput({ isLoaded, classInput }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    initOnMount: false,
    requestOptions: {
      language: 'en',
      componentRestrictions: { country: 'AM' },
    },
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      console.log('📍 Coordinates: ', { lat, lng });
    });
  };

  const renderSuggestions = () => data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <li className="testli" key={place_id} onClick={handleSelect(suggestion)}>
        <strong>{main_text}</strong>
        {' '}
        <small>{secondary_text}</small>
      </li>
    );
  });
  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);
  return (
    <div ref={ref} className="autocomplete-container">
      <input
        className={classInput}
        width="300px"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Gyumri , Armenia"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="map-address-list">{renderSuggestions()}</ul>}
    </div>
  );
}

export default TestInput;
