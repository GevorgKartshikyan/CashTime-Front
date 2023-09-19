import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PaginationNext from './PaginationNextLabel';
import PaginationPreviousLabel from './PaginationPreviousLabel';
import { getSkillsForAdmin } from '../store/actions/app';
import DeleteSkillModal from './DeleteSkillModal';
import formatString from '../utils/formatString';

function AddService() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});
  const page = searchParams.get('page') || 1;
  const q = searchParams.get('q') || '';
  const limit = searchParams.get('limit') || 40;
  const [show, setShow] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [skillId, setSkillId] = useState(0);
  const [addSkillValue, setAddSkillValue] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit });
  };
  const handleChangeSearch = (e) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('q', e.target.value);
    setSearchParams(newSearchParams);
  };
  useEffect(() => {
    dispatch(getSkillsForAdmin({ q, page, limit: 40 }));
  }, [q, page, limit]);
  const allSkills = useSelector((state) => state.app.skillsForAdmin);
  const totalPages = useSelector((state) => state.app.totalPagesSkills);
  const currentPage = useSelector((state) => state.app.currentPageSkills);
  const handleDeleteSkill = (id, skillForDelete) => {
    setShow(true);
    setSelectedSkill(skillForDelete);
    setPurpose('delete');
    setSkillId(id);
    setAddSkillValue('');
  };
  const handleAddSkill = () => {
    setShow(true);
    setPurpose('add');
    setSkillId(0);
  };
  return (
    <>
      <div className="add__service">
        <div className="add-skill-container">
          <h2 className="add__service__text">
            Skill Title
          </h2>
          <input onChange={(e) => setAddSkillValue(formatString(e.target.value))} value={addSkillValue} placeholder="Write Skill Title" type="text" maxLength="30" className="add__service__input" />
          <button onClick={handleAddSkill} type="button" className="add-skill-admin">+ ADD SKILL</button>
        </div>
        <div className="all-skills-container">
          <h2 className="add__service__text add__service__text__second">
            Skills
          </h2>
          <input onChange={handleChangeSearch} value={q} placeholder="Search Skill..." type="text" maxLength="30" className="add__service__input search-skills-input" />
          <div className="skill-titles-container">
            {allSkills.map((e) => (
              <div key={e.id}>
                <p>{e.skill}</p>
                <button onClick={() => handleDeleteSkill(e.id, e.skill)} type="button">X</button>
              </div>
            ))}
          </div>
          {totalPages && (
            <ReactPaginate
              activeClassName="admin-item admin-active-page"
              breakClassName="admin-item admin-break-me"
              pageClassName="admin-item admin-pagination-page add-skill-item"
              previousClassName="admin-item admin-previous"
              breakLabel=""
              containerClassName="pagination"
              disabledClassName="disabled-page"
              marginPagesDisplayed={0}
              nextClassName="admin-item admin-next"
              nextLabel={<PaginationNext />}
              onPageChange={handlePageChange}
              previousLabel={<PaginationPreviousLabel />}
              pageCount={totalPages}
              pageRangeDisplayed={3}
              forcePage={currentPage - 1}
            />
          )}
        </div>
      </div>
      {show && (
      <DeleteSkillModal
        addSkillValue={addSkillValue}
        purpose={purpose}
        skillId={skillId}
        closeModal={setShow}
        setPurpose={setPurpose}
        setAddSkillValue={setAddSkillValue}
        setSkillId={setSkillId}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      />
      )}
      {show && <div role="presentation" onClick={() => setShow(false)} className="add-service-overlay" />}
    </>

  );
}

export default AddService;
