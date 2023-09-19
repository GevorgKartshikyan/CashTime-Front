import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import xIcon from '../assets/images/x-symbol-svgrepo-com.svg';
import dangerIcon from '../assets/images/attention-svgrepo-com.svg';
import { addSkillForAdmin, deleteSkillForAdmin } from '../store/actions/app';

function DeleteSkillModal({
  purpose, skillId, closeModal, addSkillValue,
  setAddSkillValue, setPurpose, setSkillId, selectedSkill, setSelectedSkill,
}) {
  const dispatch = useDispatch();
  const addedSkill = useSelector((state) => state.app.addedSkill);
  console.log(addedSkill);
  const handleAddOrDelete = useCallback(async () => {
    if (purpose === 'add') {
      dispatch(addSkillForAdmin({ addSkillValue }));
      closeModal(false);
    } else if (purpose === 'delete') {
      dispatch(deleteSkillForAdmin({ skillId }));
      closeModal(false);
    }
  }, [purpose, addSkillValue, skillId]);
  console.log(purpose, skillId, addSkillValue);
  return (
    <div id="myModal" className="fade">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header flex-column">
            <div className="icon-box">
              <img src={purpose === 'delete' ? xIcon : dangerIcon} className="material-icons" alt="x-icon" />
            </div>
            <h4 className="modal-title">Are you sure?</h4>
            <button
              onClick={() => {
                closeModal(false);
                setSkillId(0);
                setPurpose('');
                setAddSkillValue('');
                setSelectedSkill('');
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            {purpose === 'add' ? (
              <p>
                Do you really want to add these records
                <br />
                (
                {addSkillValue}
                )?
                <br />
                This process cannot be undone.
              </p>
            ) : (
              <p>
                Do you really want to delete these records
                <br />
                (
                {selectedSkill}
                )?
                <br />
                This process cannot be undone.
              </p>
            )}
          </div>
          <div className="modal-footer justify-content-center">
            <button
              onClick={() => {
                closeModal(false);
                setSkillId(0);
                setPurpose('');
                setAddSkillValue('');
                setSelectedSkill('');
              }}
              type="button"
              className="btn-skill-add btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button onClick={handleAddOrDelete} type="button" className="btn-skill-add btn-danger">{purpose === 'delete' ? 'Delete' : 'Add'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteSkillModal;
