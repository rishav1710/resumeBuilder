import React from 'react';
import styles from './styles.module.css';
import { ArrowDown } from 'react-feather';
import Editor from '../Editor/editor';
import Resume from '../Resume';
import { SketchPicker } from 'react-color';
import { Edit } from 'react-feather';
import useOnClickOutside from 'use-onclickoutside';
import ReactToPrint from 'react-to-print';

function Body() {
  const [activeColor, setActiveColor] = React.useState('#000');
  const [picker, showPicker] = React.useState(false);
  const ref = React.useRef(null);
  const componentRef = React.useRef(null);
  useOnClickOutside(ref, () => showPicker(false));
  const sections = {
    basicInfo: 'Basic Info',
    summary: 'Summary',
    workExp: 'Work Experience',
    project: 'Projects',
    education: 'Education',
    achievement: 'Achievements',
    other: 'Other',
  };
  const [sectionTitle, setSectionTitle] = React.useState({
    [sections.basicInfo]: `${sections.basicInfo}`,
    [sections.summary]: `${sections.summary}`,
    [sections.workExp]: `${sections.workExp}`,
    [sections.project]: `${sections.project}`,
    [sections.education]: `${sections.education}`,
    [sections.achievement]: `${sections.achievement}`,
    [sections.other]: `${sections.other}`,
  });

  const [values, setValues] = React.useState({
    [sections.basicInfo]: {
      name: '',
      title: '',
      linkedin: '',
      github: '',
      email: '',
      phone: '',
    },
    [sections.workExp]: [
      {
        title: '',
        companyName: '',
        certificateLink: '',
        location: '',
        startDate: '',
        endDate: '',
        line: ['', '', ''],
      },
    ],
    [sections.project]: [
      {
        title: '',
        overview: '',
        deployedLink: '',
        githubLink: '',
        line: ['', '', '', ''],
      },
    ],
    [sections.education]: [
      {
        title: '',
        collegeName: '',
        startDate: '',
        endDate: '',
      },
    ],
    [sections.achievement]: ['', '', '', ''],
    [sections.summary]: {
      text: '',
    },
    [sections.other]: {
      text: '',
    },
  });

  const handlePicker = () => {
    if (!picker) return;

    return (
      <div className={styles.picker} ref={ref}>
        <SketchPicker
          color={activeColor}
          onChangeComplete={(e) => setActiveColor(e.hex)}
        />
      </div>
    );
  };

  return (
    <div className={styles.body}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          <div className={styles.colorPicker}>
            <p className={styles.heading}>
              Change Secondary Color in Resume<span></span>
            </p>
            <Edit onClick={() => showPicker(!picker)} />
          </div>
          {handlePicker()}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button style={{ backgroundColor: activeColor }}>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => componentRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
          sectionTitle={sectionTitle}
          setSectionTitle={setSectionTitle}
          values={values}
          sections={sections}
          setValues={setValues}
          activeColor={activeColor}
        />
        <Resume
          sectionTitle={sectionTitle}
          values={values}
          sections={sections}
          activeColor={activeColor}
          ref={componentRef}
        />
      </div>
    </div>
  );
}

export default Body;
