import React from 'react';
import ManuModalLine from './ManuModalLine';
import Settings from '../assets/images/settings.svg';
import SignOut from '../assets/images/signOut.svg';
import Profile from '../assets/images/icons.svg';
// import Delete from '../assets/images/delete.svg';
import History from '../assets/images/history.svg';
import Switch from '../assets/images/switch.svg';

function ManuModal() {
  return (
    <div className="manu-modal">
      <ManuModalLine text="Profile" image={Profile} />
      {/* <ManuModalLine text="Delte Profile" image={Delete} /> */}
      <ManuModalLine text="History" image={History} />
      <ManuModalLine text="Switch Account" image={Switch} />
      <ManuModalLine text="Setting" image={Settings} />
      <ManuModalLine text="Sign out" image={SignOut} />
    </div>
  );
}

export default ManuModal;
