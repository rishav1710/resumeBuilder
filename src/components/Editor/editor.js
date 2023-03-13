import React from 'react';
import styles from './styles.module.css';
import InputControl from '../InputControl/InputControl';
import { X } from 'react-feather';

function Editor(props) {
  const {
    sections,
    values,
    setValues,
    sectionTitle,
    setSectionTitle,
    activeColor,
  } = props;
  const [activeSection, setActiveSection] = React.useState(sections.basicInfo);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setActiveIndex(0);
    if (localStorage.getItem(`${activeSection}Title`)) {
      setSectionTitle({
        ...sectionTitle,
        [activeSection]: localStorage.getItem(`${activeSection}Title`),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const toDisplay = (activeSection) => {
    switch (activeSection) {
      case sections.basicInfo:
        return (
          <div className={styles.detail}>
            <div className={styles.row}>
              <InputControl
                label="Name"
                value={values[sections.basicInfo].name}
                placeholder="Enter your full name eg. Aashu"
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                      ...prev[sections.basicInfo],
                      name: e.target.value,
                    },
                  }));
                }}
              />
              <InputControl
                label="Title"
                value={values[sections.basicInfo].title}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                      ...prev[sections.basicInfo],
                      title: e.target.value,
                    },
                  }));
                }}
                placeholder="Enter your title eg. Frontend developer"
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="Linkedin Link"
                placeholder="Enter your linkedin profile link"
                value={values[sections.basicInfo].linkedin}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                      ...prev[sections.basicInfo],
                      linkedin: e.target.value,
                    },
                  }));
                }}
              />
              <InputControl
                label="Github Link"
                placeholder="Enter your github profile link"
                value={values[sections.basicInfo].github}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                      ...prev[sections.basicInfo],
                      github: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="Email"
                placeholder="Enter your email"
                value={values[sections.basicInfo].email}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                      ...prev[sections.basicInfo],
                      email: e.target.value,
                    },
                  }));
                }}
              />
              <InputControl
                label="Enter phone"
                placeholder="Enter your phone number"
                value={values[sections.basicInfo].phone}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                      ...prev[sections.basicInfo],
                      phone: e.target.value,
                    },
                  }));
                }}
              />
            </div>
          </div>
        );
      case sections.workExp:
        return (
          <div className={styles.detail}>
            <div className={styles.row}>
              <InputControl
                label="Title"
                placeholder="Enter title eg. Frontend developer"
                value={values[sections.workExp][activeIndex]?.title}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].title = e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
                value={values[sections.workExp][activeIndex]?.companyName}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].companyName =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="Certificate Link"
                placeholder="Enter certificate link"
                value={values[sections.workExp][activeIndex]?.certificateLink}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].certificateLink =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                value={values[sections.workExp][activeIndex]?.location}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].location =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of work"
                value={values[sections.workExp][activeIndex]?.startDate}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].startDate =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of work"
                value={values[sections.workExp][activeIndex]?.endDate}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].endDate =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>

            <div className={styles.column}>
              <label>Enter work description</label>
              <InputControl
                placeholder="Line 1"
                value={values[sections.workExp][activeIndex]?.line[0]}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].line[0] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 2"
                value={values[sections.workExp][activeIndex]?.line[1]}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].line[1] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 3"
                value={values[sections.workExp][activeIndex]?.line[2]}
                onChange={(e) => {
                  values[sections.workExp][activeIndex].line[2] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
          </div>
        );
      case sections.project:
        return (
          <div className={styles.detail}>
            <div className={styles.row}>
              <InputControl
                label="Title"
                placeholder="Enter title eg. Chat app"
                value={values[sections.project][activeIndex]?.title}
                onChange={(e) => {
                  values[sections.project][activeIndex].title = e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
            <InputControl
              label="Overview"
              placeholder="Enter basic overview of project"
              value={values[sections.project][activeIndex]?.overview}
              onChange={(e) => {
                values[sections.project][activeIndex].overview = e.target.value;
                setValues({ ...values });
              }}
            />
            <div className={styles.row}>
              <InputControl
                label="Deployed Link"
                placeholder="Enter deployed link of project"
                value={values[sections.project][activeIndex]?.deployedLink}
                onChange={(e) => {
                  values[sections.project][activeIndex].deployedLink =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                label="Github Link"
                placeholder="Enter github link of project"
                value={values[sections.project][activeIndex]?.githubLink}
                onChange={(e) => {
                  values[sections.project][activeIndex].githubLink =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
            <div className={styles.column}>
              <label>Enter project description</label>
              <InputControl
                placeholder="Line 1"
                value={values[sections.project][activeIndex]?.line[0]}
                onChange={(e) => {
                  values[sections.project][activeIndex].line[0] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 2"
                value={values[sections.project][activeIndex]?.line[1]}
                onChange={(e) => {
                  values[sections.project][activeIndex].line[1] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 3"
                value={values[sections.project][activeIndex]?.line[2]}
                onChange={(e) => {
                  values[sections.project][activeIndex].line[2] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 4"
                value={values[sections.project][activeIndex]?.line[3]}
                onChange={(e) => {
                  values[sections.project][activeIndex].line[3] =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
          </div>
        );
      case sections.education:
        return (
          <div className={styles.detail}>
            <div className={styles.row}>
              <InputControl
                label="Title"
                placeholder="Enter title eg. B-tech"
                value={values[sections.education][activeIndex]?.title}
                onChange={(e) => {
                  values[sections.education][activeIndex].title =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
            <InputControl
              label="College/School Name"
              placeholder="Enter name of your college/school"
              value={values[sections.education][activeIndex]?.collegeName}
              onChange={(e) => {
                values[sections.education][activeIndex].collegeName =
                  e.target.value;
                setValues({ ...values });
              }}
            />
            <div className={styles.row}>
              <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of this education"
                value={values[sections.education][activeIndex]?.startDate}
                onChange={(e) => {
                  values[sections.education][activeIndex].startDate =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of this education"
                value={values[sections.education][activeIndex]?.endDate}
                onChange={(e) => {
                  values[sections.education][activeIndex].endDate =
                    e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
          </div>
        );
      case sections.achievement:
        return (
          <div className={styles.detail}>
            <div className={styles.column}>
              <label>List your achievements</label>
              <InputControl
                placeholder="Line 1"
                value={values[sections.achievement][0]}
                onChange={(e) => {
                  values[sections.achievement][0] = e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 2"
                value={values[sections.achievement][1]}
                onChange={(e) => {
                  values[sections.achievement][1] = e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 3"
                value={values[sections.achievement][2]}
                onChange={(e) => {
                  values[sections.achievement][2] = e.target.value;
                  setValues({ ...values });
                }}
              />
              <InputControl
                placeholder="Line 4"
                value={values[sections.achievement][3]}
                onChange={(e) => {
                  values[sections.achievement][3] = e.target.value;
                  setValues({ ...values });
                }}
              />
            </div>
          </div>
        );
      case sections.summary:
        return (
          <div className={styles.detail}>
            <InputControl
              label="Summary"
              placeholder="Enter your objective/summary"
              value={values[sections.summary].text}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  [sections.summary]: {
                    text: e.target.value,
                  },
                }));
              }}
            />
          </div>
        );
      case sections.other:
        return (
          <div className={styles.detail}>
            <InputControl
              label="Other"
              placeholder="Enter something"
              value={values[sections.other].text}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  [sections.other]: {
                    text: e.target.value,
                  },
                }));
              }}
            />
          </div>
        );
      default:
        break;
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem(sections.basicInfo)) {
      values[sections.basicInfo] = JSON.parse(
        localStorage.getItem(sections.basicInfo)
      );
    }
    if (localStorage.getItem(sections.workExp)) {
      values[sections.workExp] = JSON.parse(
        localStorage.getItem(sections.workExp)
      );
    }
    if (localStorage.getItem(sections.project)) {
      values[sections.project] = JSON.parse(
        localStorage.getItem(sections.project)
      );
    }
    if (localStorage.getItem(sections.education)) {
      values[sections.education] = JSON.parse(
        localStorage.getItem(sections.education)
      );
    }
    if (localStorage.getItem(sections.achievement)) {
      values[sections.achievement] = JSON.parse(
        localStorage.getItem(sections.achievement)
      );
    }
    if (localStorage.getItem(sections.summary)) {
      values[sections.summary] = JSON.parse(
        localStorage.getItem(sections.summary)
      );
    }
    if (localStorage.getItem(sections.other)) {
      values[sections.other] = JSON.parse(localStorage.getItem(sections.other));
    }

    if (localStorage.getItem(`${activeSection}Title`))
      setSectionTitle({
        ...sectionTitle,
        [activeSection]: localStorage.getItem(`${activeSection}Title`),
      });

    setValues({ ...values });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    localStorage.setItem(`${activeSection}Title`, sectionTitle[activeSection]);
    localStorage.setItem(activeSection, JSON.stringify(values[activeSection]));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map((key) => {
          return (
            <div
              onClick={() => setActiveSection(sections[key])}
              className={`${styles.section}`}
              key={key}
              style={
                activeSection === sections[key]
                  ? {
                      color: activeColor,
                      borderBottom: `2px solid ${activeColor}`,
                    }
                  : {}
              }
            >
              {sections[key]}
            </div>
          );
        })}
      </div>
      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle[activeSection]}
          onChange={(e) =>
            setSectionTitle({
              ...sectionTitle,
              [activeSection]: e.target.value,
            })
          }
        />
        {(activeSection === sections.workExp ||
          activeSection === sections.project ||
          activeSection === sections.education) && (
          <div className={styles.chips}>
            {values[activeSection].map((item, index) => {
              return (
                <div
                  className={styles.chip}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={
                    activeIndex === index
                      ? { backgroundColor: activeColor }
                      : {}
                  }
                >
                  <p>
                    {activeSection} {index + 1}
                  </p>
                  {values[activeSection].length > 1 && (
                    <X
                      onClick={(e) => {
                        e.stopPropagation();
                        values[activeSection].splice(index, 1);
                        setValues({ ...values });
                        setActiveIndex(index - 1 < 0 ? 0 : index - 1);
                      }}
                    />
                  )}
                </div>
              );
            })}
            <div
              className={styles.new}
              style={{ color: activeColor }}
              onClick={() => {
                if (activeSection === sections.workExp) {
                  values[activeSection].push({
                    title: '',
                    companyName: '',
                    certificateLink: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    line: ['', '', ''],
                  });
                } else if (activeSection === sections.project) {
                  values[activeSection].push({
                    title: '',
                    overview: '',
                    deployedLink: '',
                    githubLink: '',
                    line: ['', '', '', ''],
                  });
                } else if (activeSection === sections.education) {
                  values[activeSection].push({
                    title: '',
                    collegeName: '',
                    startDate: '',
                    endDate: '',
                  });
                }
                setValues({ ...values });
              }}
            >
              +New
            </div>
          </div>
        )}
        {toDisplay(activeSection)}
        <div className={styles.saveWrapper}>
          <button
            style={{ backgroundColor: activeColor }}
            onClick={() => handleSubmit()}
            className={styles.save}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
