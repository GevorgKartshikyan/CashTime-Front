import React, { useEffect, useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useParams } from 'react-router-dom';

function MapInputAutocomplete({
  isLoaded, classInput, changeCity, setCoordinates, setCity, searchParams,
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
  console.log(page);
  const handleSelect = (suggestion) => () => {
    setValue(suggestion.description, false);
    clearSuggestions();
    console.log(suggestion);
    getGeocode({ address: suggestion.description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      console.log('📍 Coordinates: ', { lat, lng });
      if (page === 'map' || !page) {
        setCoordinates({ lat, lng });
      }
      const addressComponents = results[0].address_components;
      let city = '';

      const localityComponent = addressComponents.find((component) => component.types.includes('locality'));

      if (localityComponent) {
        city = localityComponent.long_name;
      }
      if (page === 'list') {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('city', 'Yerevan');
        setCity(newSearchParams);
      }

      if (page === 'map' || !page) {
        changeCity({ city });
      }
      console.log('🏙 City: ', city);
    });
  };
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const renderSuggestions = () => data.map((suggestion, index) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    return (
      <li
        role="presentation"
        key={place_id}
        onClick={handleSelect(suggestion)}
        className={index === selectedItemIndex ? 'selected-dress' : ''}
      >
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
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setSelectedItemIndex((prevIndex) => (prevIndex < renderSuggestions().length
        - 1 ? prevIndex + 1 : 0));
    } else if (event.key === 'ArrowUp') {
      setSelectedItemIndex((prevIndex) => (prevIndex > 0 ? prevIndex
          - 1 : renderSuggestions().length - 1));
    } else if (event.key === 'Enter') {
      if (selectedItemIndex >= 0) {
        event.preventDefault();
        handleSelect(data[selectedItemIndex]);
      }
    }
  };
  return (
    <div ref={ref} className="autocomplete-container">
      <input
        className={classInput}
        width="300px"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        onKeyDown={handleKeyDown}
        placeholder="Gyumri , Armenia"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="map-address-list">{renderSuggestions()}</ul>}
    </div>
  );
}

export default MapInputAutocomplete;
