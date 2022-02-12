import React, { useRef } from 'react'

import classes from './Header.module.css'

const Header = () => {
    const signOutRef = useRef(null)

    const handleSignOutMouseEnter = () => {
        signOutRef.current.style.display = 'block'
    }

    const handleSignOutMouseLeave = () => {
        signOutRef.current.style.display = 'none'
    }

    return (
        <div className={classes['header-container']}>
            <div className={classes['header-content']}>
                <span className={classes['logo']}>
                    <a href='/home'>
                        <img src='/images/home-logo.svg' />
                    </a>
                </span>
                <div className={classes['search']}>
                    <div>
                        <input type='text' placeholder='Search' />
                    </div>
                    <div className={classes['search-icon']}>
                        <img src='/images/search-icon.svg' alt='' />
                    </div>
                </div>
                <nav>
                    <ul className={classes['nav-wrapper']}>
                        <li
                            className={
                                classes['nav-list'] + ' ' + classes['active']
                            }
                        >
                            <a>
                                <img src='/images/nav-home.svg' alt='' />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className={classes['nav-list']}>
                            <a>
                                <img src='/images/nav-network.svg' alt='' />
                                <span>Network</span>
                            </a>
                        </li>
                        <li className={classes['nav-list']}>
                            <a>
                                <img src='/images/nav-jobs.svg' alt='' />
                                <span>Jobs</span>
                            </a>
                        </li>
                        <li className={classes['nav-list']}>
                            <a>
                                <img src='/images/nav-messaging.svg' alt='' />
                                <span>Messaging</span>
                            </a>
                        </li>

                        <li className={classes['nav-list']}>
                            <a>
                                <img
                                    src='/images/nav-notifications.svg'
                                    alt=''
                                />
                                <span>Notification</span>
                            </a>
                        </li>

                        <li
                            className={classes['nav-list']}
                            onMouseEnter={() => handleSignOutMouseEnter()}
                            onMouseLeave={() => handleSignOutMouseLeave()}
                        >
                            <a className={classes['user']}>
                                <img src='/images/user.svg' />
                                <span>Me</span>
                                <img src='/images/down-icon.svg' />
                            </a>
                            <div
                                className={classes['sign-out']}
                                ref={signOutRef}
                            >
                                <a>Sign Out</a>
                            </div>
                        </li>

                        <li
                            className={
                                classes['nav-list'] +
                                ' ' +
                                classes['work-list-item']
                            }
                        >
                            <a>
                                <img src='/images/nav-work.svg' />
                                <span>
                                    Work
                                    <img src='/images/down-icon.svg' />
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header