import React from 'react';
import styles from './About.module.css';
import talkofthetown from './talkoftown.jpg';
import hype from './hype.png';
import takeback from './takeback.png'
import Greencounter from '../GreenCounter/Greencounter';

const About = () => {
  return (
    <>
      <div id="about">
        <section id={styles['about']} className="ftco-section">
          <div className={styles['container']}>
            <div
              className={`${styles.row}
                    ${styles.justify_content_center}
                    ${styles.align_items_center}
                    ${styles.mb - 5}
                    ${styles.pb - 3}`}
            >
              <div
                className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
              >
                <h3
                  className={`${styles.subheading_mt - 5} ${styles.pt - 5}`}
                  style={{
                    color: '#6db549',
                    fontFamily: 'League Spartan',
                    marginTop: '75px',
                    fontWeight: '800',
                    letterSpacing: '2px',
                  }}
                >
                  &nbsp;WHAT ARE WE
                </h3>
                <h2
                  className={styles['mb-1']}
                  style={{
                    color: 'white',
                    // fontSize: '3.5em',
                    fontfamily: 'League spartan',
                    fontWeight: '900',
                    marginBottom: '1em',
                    letterSpacing: '2px',
                  }}
                >
                  ABOUT US
                </h2>
              </div>
            </div>

            <div className={styles['row']}>
              <div className={styles['col-md-12']}>
                <div className={styles['block-7'] } id={styles['borderline']}>
                  <div className={styles['text-justify']}>
                    <p
                      style={{
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        fontWeight: '500',
                        color: 'white',
                      }}
                    >
                      Spardha is the annual sports festival of IIT (BHU),
                      Varanasi. In its glorious history of over 37 years,
                      Spardha has grown to become the largest and one of the
                      most awaited sports festival of northern India where
                      athletic competition is drawn from throughout the country.
                      Each year, over a thousand participants compete in an
                      array of sports like hockey, basketball, cricket, boxing,
                      tennis and many more, creating a stunning spectacle of
                      exceptional fervidness in athletic talent. The event,
                      embraced by one of the best gatherings of celebrated
                      sports personalities and spirited audience, has always
                      enthused a zest for continuously scaling new zeniths in
                      the pursuit of excellence and vibrancy among one and all.
                      At present, Spardha has a team of over 500 and is also
                      associated with numerous renowned firms and sports
                      organizations. These exhilarating days have many
                      resounding experiences for participants and supporters
                      alike, creating a lifetime of memories. Gear up yourself
                      to witness the thrilling and frolicsome SPARDHA.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles['col-md-4']}>
                <div className={styles['block-7']}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={hype}
                      alt="/"
                      style={{
                        width: '22%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <h3
                      className={styles['text-wrap']}
                      style={{
                        fontSize: '22px',
                        color: 'white',
                        lineHeight: '1.4',
                        fontWeight: 'bold',
                      }}
                    >
                      Hype&nbsp;Around Spardha
                    </h3>
                    <p className={`${styles.para1}`}>
                      For starters, 2023 will witness the 38th edition of
                      Spardha, a festival which has grown from strength to
                      strength ever since its inception. After all these
                      successful editions, Spardha, today stands as the largest
                      inter-collegiate sporting event of India.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles['col-md-4']}>
                <div className={styles['block-7']}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={talkofthetown}
                      alt="/"
                      style={{
                        width: '21%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <h3
                      className={styles['text-wrap']}
                      style={{
                        fontSize: '22px',
                        color: 'white',
                        lineHeight: '1.4',
                        fontWeight: 'bold',
                      }}
                    >
                      The&nbsp;Talk&nbsp;Of The&nbsp;Town
                    </h3>
                    <p className={`${styles.para2}`}>
                      Each&nbsp;year&nbsp;thousands of participants at Spardha
                      put their hard work to test in a vast array of sports. If
                      this doesn't catch your attention, the bustle of 45,000
                      people on the campus streets surely will. Its them who
                      make Spardha the festival it is, a celebration of four
                      long days.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles['col-md-4']}>
                <div className={styles['block-7']}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={takeback}
                      alt="/"
                      style={{
                        width: '20%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <h3
                      className={styles['text-wrap']}
                      style={{
                        fontSize: '22px',
                        color: 'white',
                        lineHeight: '1.4',
                        fontWeight: 'bold',
                      }}
                    >
                      What&nbsp;You Take Back
                    </h3>
                    <p className={`${styles.para3}`}>
                      It's about making memories, and living them. Every time
                      you win a race, or lose your voice cheering for your team,
                      it adds up to your moments. We at Spardha make sure that
                      you get an experience worth cherishing and some beautiful
                      memories to treasure forever!
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Greencounter />
    </>
  );
};

export default About;
