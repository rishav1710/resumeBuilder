import React from 'react';
import styles from './styles.module.css';
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from 'react-feather';

const Resume = React.forwardRef((props, ref) => {
  const { values, sections, sectionTitle, activeColor } = props;
  const [columns, setColumns] = React.useState([[], []]);
  const [source, setSource] = React.useState('');
  const [target, setTarget] = React.useState('');

  const getFormattedDate = (value) => {
    if (!value) return '';
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.summary]: (
      <div
        draggable
        key={'summary'}
        onDragOver={() => setTarget(sections.summary)}
        onDragEnd={() => setSource(sections.summary)}
        className={`${styles.section} ${
          values[sections.summary].text.length > 0 ? '' : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {sectionTitle[sections.summary]}
        </div>
        <div className={styles.content}>
          <p className={styles.overview}> {values[sections.summary].text}</p>
        </div>
      </div>
    ),
    [sections.workExp]: (
      <div
        key={'workexp'}
        draggable
        onDragOver={() => setTarget(sections.workExp)}
        onDragEnd={() => setSource(sections.workExp)}
        className={`${styles.section} ${
          values[sections.workExp][0].title.length > 0 ? '' : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {sectionTitle[sections.workExp]}
        </div>
        <div className={styles.content}>
          {values[sections.workExp].map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificateLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificateLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> {item.location}
                </p>
              ) : (
                <span />
              )}
              {item.line[0].length > 0 ? (
                <ul className={styles.points}>
                  {item.line.map(
                    (elem, index) =>
                      elem.length > 0 && (
                        <li className={styles.point} key={elem + index}>
                          {elem}
                        </li>
                      )
                  )}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={'project'}
        draggable
        onDragOver={() => setTarget(sections.project)}
        onDragEnd={() => setSource(sections.project)}
        className={`${styles.section} ${
          values[sections.project][0].title.length > 0 ? '' : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {sectionTitle[sections.project]}
        </div>
        <div className={styles.content}>
          {values[sections.project].map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.deployedLink ? (
                <a className={styles.link} href={item.deployedLink}>
                  <Paperclip />
                  {item.deployedLink}
                </a>
              ) : (
                <span />
              )}
              {item.githubLink ? (
                <a className={styles.link} href={item.githubLink}>
                  <GitHub />
                  {item.githubLink}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.line[0].length > 0 ? (
                <ul className={styles.points}>
                  {item.line.map(
                    (elem, index) =>
                      elem.length > 0 && (
                        <li className={styles.point} key={elem + index}>
                          {elem}
                        </li>
                      )
                  )}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={'education'}
        draggable
        onDragOver={() => setTarget(sections.education)}
        onDragEnd={() => setSource(sections.education)}
        className={`${styles.section} ${
          values[sections.education][0].title.length > 0 ? '' : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {sectionTitle[sections.education]}
        </div>
        <div className={styles.content}>
          {values[sections.education].map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.collegeName ? (
                <p className={styles.subTitle}>{item.collegeName}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={'achievement'}
        draggable
        onDragOver={() => setTarget(sections.achievement)}
        onDragEnd={() => setSource(sections.achievement)}
        className={`${styles.section} ${
          values[sections.achievement][0].length > 0 ? '' : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {sectionTitle[sections.achievement]}
        </div>
        <div className={styles.content}>
          {values[sections.achievement].length > 0 ? (
            <ul className={styles.numbered}>
              {values[sections.achievement].map(
                (elem, index) =>
                  elem.length > 0 && (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  )
              )}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={'other'}
        draggable
        onDragOver={() => setTarget(sections.other)}
        onDragEnd={() => setSource(sections.other)}
        className={`${styles.section} ${
          values[sections.other].text.length > 0 ? '' : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {sectionTitle[sections.other]}
        </div>
        <div className={styles.content}>
          <p className={styles.overview}>{values[sections.other].text}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  React.useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    swapSourceTarget(source, target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  React.useEffect(() => {
    const container = ref.current;
    if (!activeColor || !container) return;

    container.style.setProperty('--color', activeColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColor]);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>{values[sections.basicInfo].name}</p>
        <p className={styles.subHeading}>{values[sections.basicInfo].title}</p>

        <div className={styles.links}>
          {values[sections.basicInfo].email.length > 0 ? (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className={styles.link} type="email">
              <AtSign /> {values[sections.basicInfo].email}
            </a>
          ) : (
            <span />
          )}
          {values[sections.basicInfo].phone.length > 0 ? (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className={styles.link}>
              <Phone /> {values[sections.basicInfo].phone}
            </a>
          ) : (
            <span />
          )}
          {values[sections.basicInfo].linkedin.length > 0 ? (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className={styles.link} target="_blank">
              <Linkedin /> {values[sections.basicInfo].linkedin}
            </a>
          ) : (
            <span />
          )}
          {values[sections.basicInfo].github.length > 0 ? (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className={styles.link} target="_blank">
              <GitHub /> {values[sections.basicInfo].github}
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.col1}>
          {columns[0].map((item) => sectionDiv[item])}
        </div>
        <div className={styles.col2}>
          {columns[1].map((item) => sectionDiv[item])}
        </div>
      </div>
    </div>
  );
});

export default Resume;
