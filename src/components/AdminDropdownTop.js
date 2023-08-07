import React, { useState } from 'react';
import Vector1 from '../assets/images/dropdown_top_icon.svg';
import Vector2 from '../assets/images/dropdown_bottom_icon.svg';

function AdminDropdownTop() {
  const [flag, setFlag] = useState(false);
  return (
    <div role="presentation" onClick={() => setFlag(!flag)}>
      {flag ? <img src={Vector1} alt="svg" /> : <img src={Vector2} alt="svg" />}
    </div>
  );
}

export default AdminDropdownTop;
