import React, { useEffect } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useParams } from 'react-router-dom';

function TestInput({
  isLoaded, classInput, changeCity, setCoordinates, setCity,
}) {
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
      // types: ['cities'],
    },
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const { page } = useParams();

  const handleSelect = (suggestion) => () => {
    setValue(suggestion.description, false);
    clearSuggestions();

    getGeocode({ address: suggestion.description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      console.log('📍 Coordinates: ', { lat, lng });
      if (page === 'map') {
        setCoordinates({ lat, lng });
      }
      const addressComponents = results[0].address_components;
      let city = '';

      const localityComponent = addressComponents.find((component) => component.types.includes('locality'));

      if (localityComponent) {
        city = localityComponent.long_name;
      }
      if (page === 'list') {
        setCity(city);
      }
      if (page === 'map') {
        changeCity({ city });
      }
      console.log('🏙 City: ', city);
    });
  };

  const renderSuggestions = () => data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    return (
      <li role="presentation" className="testli" key={place_id} onClick={handleSelect(suggestion)}>
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
