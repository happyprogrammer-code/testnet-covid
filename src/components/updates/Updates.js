import React, { Component } from 'react';
import style from './Updates.module.css';

export class Updates extends Component {
  render() {
    return (
      <div className={style.mainu}>
        <div className={style.header}>
          <div className="container">
            <h1>
              <span className={style.covidspan}>COVID-19</span>
              <br /> UPDATES
            </h1>
          </div>
        </div>
        <div className="container">
          <div className={style.newssect}>
            <div className={`${style.news1} ${style.news}`}>
              <div className={style.newstext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci corrupti voluptates ad qui, molestias ducimus sed
                placeat exercitationem officiis sint eaque libero, harum nam
                autem, blanditiis omnis? Officia, minus. Laudantium veritatis
                dolorum dolor ipsam doloremque et officia numquam, dolore odio
                at vel aliquid ab tenetur accusantium, recusandae eligendi
                commodi dicta! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci corrupti voluptates ad qui, molestias
                ducimus sed placeat exercitationem officiis sint eaque libero,
                harum nam autem, blanditiis omnis? Officia, minus. Laudantium
                veritatis dolorum dolor ipsam doloremque et officia numquam,
                dolore odio at vel aliquid ab tenetur accusantium, recusandae
                eligendi commodi dicta! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias inventore quaerat aliquam, dolores
                ullam obcaecati facere. Adipisci, natus totam perspiciatis
                obcaecati debitis exercitationem modi consequuntur eius eum, quo
                cupiditate laboriosam excepturi odio fugit. Voluptatum officiis
                odio nisi vitae! Deserunt odit aspernatur doloremque, cupiditate
                veritatis tempora iure consequatur in impedit minima?
              </div>
              <div className={style.image}>
                <img src="/img/news1.jpg" alt="" srcset="" />
              </div>
            </div>
            <div className={`${style.news2} ${style.news}`}>
              <div className={style.newstext}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci corrupti voluptates ad qui, molestias ducimus sed
                  placeat exercitationem officiis sint eaque libero, harum nam
                  autem, blanditiis omnis? Officia, minus. Laudantium veritatis
                  dolorum dolor ipsam doloremque et officia numquam, dolore odio
                  at vel aliquid ab tenetur accusantium, recusandae eligendi
                  commodi dicta! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Molestias inventore quaerat aliquam, dolores
                  ullam obcaecati facere. Adipisci, natus totam perspiciatis
                  obcaecati debitis exercitationem modi consequuntur eius eum,
                  quo cupiditate laboriosam excepturi odio fugit. Voluptatum
                  officiis odio nisi vitae! Deserunt odit aspernatur doloremque,
                  cupiditate veritatis tempora iure consequatur in impedit
                  minima?
                </p>
              </div>
              <div className={style.image}>
                <img src="/img/news2.jpg" alt="" srcset="" />
              </div>
            </div>
            <div className={`${style.news3} ${style.news}`}>
              <div className={style.newstext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci corrupti voluptates ad qui, molestias ducimus sed
                placeat exercitationem officiis sint eaque libero, harum nam
                autem, blanditiis omnis? Officia, minus. Laudantium veritatis
                dolorum dolor ipsam doloremque et officia numquam, dolore odio
                at vel aliquid ab tenetur accusantium, recusandae eligendi
                commodi dicta! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci corrupti voluptates ad qui, molestias
                ducimus sed placeat exercitationem officiis sint eaque libero,
                harum nam autem, blanditiis omnis? Officia, minus. Laudantium
                veritatis dolorum dolor ipsam doloremque et officia numquam,
                dolore odio at vel aliquid ab tenetur accusantium, recusandae
                eligendi commodi dicta! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias inventore quaerat aliquam, dolores
                ullam obcaecati facere. Adipisci, natus totam perspiciatis
                obcaecati debitis exercitationem modi consequuntur eius eum, quo
                cupiditate laboriosam excepturi odio fugit. Voluptatum officiis
                odio nisi vitae! Deserunt odit aspernatur doloremque, cupiditate
                veritatis tempora iure consequatur in impedit minima?
              </div>
              <div className={style.image}>
                <img src="/img/news3.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updates;
