import React, { Component } from 'react'
import style from './footer.module.css'
import FontAwesome from 'react-fontawesome'




export class Footer extends Component {
    render() {
    
        
        
        
        return (
            <div className={style.mainfooter}>
                    <div className={`${style.left} ${style.component}`}>
                        <img src="/img/actualLogo@1x.svg" alt="" srcset=""/>
                        <div className={style.footertext}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste, tenetur, omnis labore corporis odio sit nulla soluta aut sapiente exercitationem ullam vel beatae hic aliquam ducimus, quae facere unde?</p>
                        </div>
                       {/* <ul className={style.footerul}>
                           <li><a href="#"><FontAwesome className={`fab fa-facebook ${style.icon}`}/></a></li>
                           <li><a href="#"><FontAwesome className={`fab fa-linkedin ${style.icon}`}/></a></li>
                           <li><a href="#"><FontAwesome className={`fab fa-twitter ${style.icon}`}/></a></li>
                           <li><a href="#"><FontAwesome className={`fab fa-instagram ${style.icon}`}/></a></li>
                       </ul> */}
                       <div className={style.soscmedlist}>
                           <a href="#" className={style.links}><FontAwesome className={`fa fa-facebook ${style.icon}`}/></a>
                           <a href="#" className={style.links}><FontAwesome className={`fa fa-linkedin ${style.icon}`}/></a>
                           <a href="#" className={style.links}><FontAwesome className={`fa fa-instagram ${style.icon}`}/></a>
                           <a href="#" className={style.links}><FontAwesome className={`fa fa-twitter ${style.icon}`}/></a>
                   
                       </div>
                     
                      <div className={style.vr}><div className={style.line}></div></div>
                    </div>               
                    
                    <div className={`${style.center} ${style.component}`}>
                        <div className={style.insidecenter}>
                            <h1>News</h1>
                            <ul className={style.footerlist}>
                                <li><p>Lorem ipsum dolor sit amet.</p></li>
                                <li><p>Lorem ipsum dolor sit amet.</p></li>
                                <li><p>Lorem ipsum dolor sit amet.</p></li>
                                <li><p>Lorem ipsum dolor sit amet.</p></li>
                            </ul>
                        </div>
                    <div className={style.vr2}><div className={style.line2}></div></div>
                    </div>
                    <div className={`${style.right} ${style.component}`}>
                        <div className={style.ordertitle}>
                    <h1>Place your orders</h1>
                    </div>
                    <div className={style.inputs}>
                    <input type="text" name="name" placeholder="insert your Name" id=""/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='place your orders'></textarea>
                    </div>
                    
                    </div>
                    <div className={style.copy}>
                        <p>all Copyright reserved &copy; Web page Melly</p>
                    </div>
            </div>
        )
    }
}

export default Footer
