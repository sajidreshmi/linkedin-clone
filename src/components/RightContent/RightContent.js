import React from 'react'
import classes from './RightContent.module.css'
const RightContent = () => {
    return (
        <div className={classes['right-content']}>
            <div className={classes['follow-card']}>
                <div className={classes['title']}>
                    <h2>Add to your feed</h2>
                    <img src='/images/feed-icon.svg' alt='' />
                </div>
                <ul className={classes['feed-list']}>
                    <li>
                        <a>
                            <div className={classes['avatar']}></div>
                        </a>
                        <div>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <div className={classes['avatar']}></div>
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </ul>
                <div className={classes['recommendations']}>
                    View all recommendations
                    <img src='/images/right-icon.svg' alt='' />
                </div>
            </div>
            <div
                className={
                    classes['follow-card'] + ' ' + classes['banner-card']
                }
            >
                <img
                    src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
                    alt=''
                />
            </div>
        </div>
    )
}

export default RightContent
