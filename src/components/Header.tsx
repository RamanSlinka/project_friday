import React from 'react'
import s from './HW5.module.css'
import {NavLink} from 'react-router-dom'



function Header() {
    return (
        <div className={s.header}>
            <NavLink to='/testPage' className={s.link} activeClassName={s.active}>Test Page </NavLink>
            <NavLink to='/registration' className={s.link} activeClassName={s.active}>Registration </NavLink>
            <NavLink to='/passwordRecovery' className={s.link} activeClassName={s.active}>Password Recovery </NavLink>
            <NavLink to='/newPassword' className={s.link} activeClassName={s.active}>New Password</NavLink>
            <NavLink to='/profile' className={s.link} activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/login' className={s.link} activeClassName={s.active}>LOGIN </NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
