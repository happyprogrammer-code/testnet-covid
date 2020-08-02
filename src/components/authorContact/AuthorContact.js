import React, { Component } from 'react';
import styles from './AuthorContact.module.css';
import Fontawesome from 'react-fontawesome';

export class AuthorContact extends Component {
  render() {
    return (
      <div className={styles.mainaut}>
        <div className={styles.header}>
          <div className={styles.headerinside}>
            <img src="/img/autimg.jpg" alt="" />
            <h2>Muhamad Farahim</h2>
            <h3>Web Developer | Graphic Designer</h3>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.aboutme}>
            <h3>
              Im a second grade student from SMKN 1 Cibinong im building random
              websites because im bored
            </h3>
          </div>
          <div className={styles.skillsets}>
            <div className={styles.skilset}>
              <div className={styles.images}>
                <img src="img/logo_html.png" alt="" srcset="" />
              </div>
              <h2>HTML</h2>
              <p>Lorem, ipsum dolor.</p>
            </div>

            <div className={styles.skilset}>
              <div className={styles.images}>
                <img src="img/logo_css.png" alt="" srcset="" />
              </div>
              <h2>CSS</h2>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.skilset}>
              <div className={styles.images}>
                <img src="img/javascript%20logo.png" alt="" srcset="" />
              </div>
              <h2>Javascript</h2>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className={styles.portfolio}>
          <h1>My portfolio</h1>
          <div className={styles.ports}>
            <div className={styles.port}>
              <p>Area 51</p>
            </div>
            <div className={styles.port}>
              <p>DU YU KNO DA WEI</p>
            </div>
            <div className={styles.port}>
              <p>Spongebob</p>
            </div>
            <div className={styles.port}>
              <p>First Guy</p>
            </div>
            <div className={styles.port}>
              <p>Tom</p>
            </div>
            <div className={styles.port}>
              <p>Pooh</p>
            </div>
          </div>
        </div>
        <div className={styles.contactform}>
          <form action="">
            <h1>Contact Form</h1>
            <div className={styles.insideform}>
              <div className={styles.input}>
                <label htmlFor="name">
                  <span style={{ paddingRight: '3px' }}>
                    <Fontawesome className="fas fa-user" />
                  </span>
                  Name
                </label>
                <input type="text" name="" id="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">
                  <span style={{ paddingRight: '3px' }}>
                    <Fontawesome className="fas fa-envelope" />
                  </span>
                  Email
                </label>
                <input type="text" name="" id="email" />
              </div>
              <div className={styles.input}>
                <label htmlFor="order">
                  <Fontawesome />
                  Order
                </label>
                <textarea
                  name="order"
                  id="order"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className={styles.input}>
                  <button type="submit">
                    <span className={styles.spans}>
                      <Fontawesome className="far fa-envelope" />
                    </span>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthorContact;
