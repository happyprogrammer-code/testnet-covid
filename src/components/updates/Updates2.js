import React, { Component } from 'react'
import Style from './Updates2.module.css'

export class Updates extends Component {
    render() {
        return (
            <div className={Style.mainu}>
            <div className={Style.mainheader}>
              <div className="container">

                  <div className={Style.overlay}>
                      <div className={Style.left}>
                             <h1>COVID-19<br/><span class={Style.span}>UPDATES</span></h1>
                      </div>
                     
                  </div>

              </div>
            </div>
            <div className={Style.maincontent}>

                    <div className='container'>

                            <div className={Style.contentoverlay}>
                                <div className={`${Style.news} ${Style.news1}`}>
                                    <div className={Style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla temporibus sunt, voluptatibus deleniti rerum libero magni facilis natus animi quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ea?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatibus corrupti nesciunt, ut culpa ullam similique quidem aperiam laudantium soluta, voluptatum obcaecati eius rem voluptatem unde maiores minima, laborum aliquam ad accusantium est temporibus fugit. Ratione, blanditiis at! Ipsam soluta aut placeat iure accusamus, modi odio! Reiciendis ut distinctio totam?</div>
                                    <div className={Style.imgn}><img src="/img/news1.jpg" alt="" srcset=""/></div>
                                </div>
                                <div className={`${Style.news} ${Style.news2}`}>
                                     <div className={Style.imgn}><img src="/img/news2.jpg" alt="" srcset=""/></div>
                                    <div className={Style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, repellendus? Quas non quasi minima saepe suscipit temporibus sunt, amet soluta illum sint eius aperiam ea impedit nam iste. Officia neque, placeat vero perspiciatis reiciendis ipsa sapiente! Quas eos illum quaerat molestias officiis, quo iste unde odit voluptatum pariatur mollitia quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, libero sequi dolore ullam hic esse doloribus perspiciatis architecto aliquam accusamus ducimus, nobis ab optio itaque placeat inventore distinctio quidem exercitationem! Facilis nam et ipsam iusto ipsum commodi tenetur explicabo soluta nulla fuga amet alias nostrum, quia eos numquam suscipit quae!</div>
                                   
                                </div>
                                <div className={`${Style.news} ${Style.news3}`}>
                                    <div className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt sunt delectus accusamus doloremque molestiae neque maxime. Aliquid, quod fugit aperiam id perspiciatis autem dolore, odio animi sapiente, nobis ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet optio odit odio dignissimos? Perferendis, sapiente totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto fuga maiores magnam minima voluptate, praesentium non a quia! Est illo, quis doloribus nesciunt voluptas dignissimos doloremque quae exercitationem alias!</div>
                                    <div className={Style.imgn}><img src="/img/news3.jpg" alt="" srcset=""/></div>
                                </div>
                            </div>
                            
                        
                    </div>

            </div>

            </div>
        )
    }
}

export default Updates
