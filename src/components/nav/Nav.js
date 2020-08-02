import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import style from './Nav.module.css'

export class Nav extends Component {
    render() {
        return (
            <div>
                 <div className={style.nav}>
                <div className='container'>
                    <div className={style.navgrid}>
                            <img className={style.image} src="/img/actualLogo@1x.svg" alt="?"/>
                            <ul className={style.ultest}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/updates">Updates</Link></li>
                                <li><Link to="/author">Author</Link></li>
                            </ul>
                        </div> 
                        </div>
                </div>
               
            </div>
        )
    }
}

export default Nav
