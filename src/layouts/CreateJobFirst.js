import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function CreateJobFirst(props) {
  const { t } = useTranslation();
  const firstFormTitle = useSelector((state) => state.createJobForm.dataFromChild1) ?? '';
  const { onData } = props;
  const exampleTitles = [t('create_job_page_one_four'), t('create_job_page_one_five'), t('create_job_page_one_six')];
  const [jobTitle, setJobTitle] = useState(firstFormTitle ?? '');
  useEffect(() => {
    onData({ dataFromChild1: jobTitle || null });
  }, [jobTitle]);
  return (
    <div className="job__form__container">
      <div className="create__first">
        <h4 className="create__job__title">{t('create_job_page_one_one')}</h4>
        <input
          type="text"
          className="examples__input"
          value={jobTitle}
          onChange={(e) => {
            setJobTitle(e.target.value);
          }}
          placeholder={t('create_job_page_one_three')}
        />
      </div>
      <div className="examples">
        <p className="examples__desc">{t('create_job_page_one_two')}</p>
        <ul className="examples__block">
          {exampleTitles.map((title) => (
            <li key={title} className="examples__list">{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
CreateJobFirst.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateJobFirst;
