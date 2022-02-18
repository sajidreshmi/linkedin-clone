import React from 'react'
import { useSelector } from 'react-redux'
import classes from './LeftContent.module.css'

const LeftContent = () => {
    const user = useSelector((state) => state.userState.user)
    return (
        <div className={classes['left-content']}>
            <div className={classes['card']}>
                <div className={classes['user-info']}>
                    <div className={classes['card-background']}></div>
                    <a>
                        <div className={classes['photo']}></div>
                        <div className={classes['link']}>
                            Welcome, {user ? user.displayName : 'there'}
                        </div>
                    </a>
                    <a>
                        <div className={classes['add-photo']}>Add A photo</div>
                    </a>
                </div>
                <div className={classes['widget']}>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src='/images/widget-icon.svg' alt='' />
                    </a>
                </div>
                <div className={classes['item']}>
                    <span>
                        <img src='/images/item-icon.svg' alt='' />
                        My Items
                    </span>
                </div>
            </div>
            <div className={classes['community-card'] + ' ' + classes['card']}>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src='/images/plus-icon.svg' alt='' />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </div>
        </div>
    )
}

export default LeftContent
