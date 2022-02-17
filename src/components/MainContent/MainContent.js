import React from 'react'
import classes from './MainContent.module.css'

const MainContent = () => {
    return (
        <div className={classes['main-content']}>
            <div
                className={classes['share-box'] + ' ' + classes['common-card']}
            >
                <div>
                    <img src='/images/user.svg' alt='' />
                    <button>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src='/images/photo-icon.svg' alt='' />
                        <span>Photo</span>
                    </button>

                    <button>
                        <img src='/images/video-icon.svg' alt='' />
                        <span>Video</span>
                    </button>

                    <button>
                        <img src='/images/event-icon.svg' alt='' />
                        <span>Event</span>
                    </button>

                    <button>
                        <img src='/images/article-icon.svg' alt='' />
                        <span>Write</span>
                    </button>
                </div>
            </div>
            <div>
                <div
                    className={
                        classes['article'] + ' ' + classes['common-card']
                    }
                >
                    <div className={classes['shared-actor']}>
                        <a>
                            <img src='/images/user.svg' alt='' />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src='/images/ellipse-icon.svg' />
                        </button>
                    </div>

                    <div className={classes['description']}>Description</div>

                    <div className={classes['shared-img']}>
                        <a>
                            <img src='/images/shared-image.png' alt='' />
                        </a>
                    </div>

                    <ul className={classes['social-count']}>
                        <li>
                            <button>
                                <img
                                    src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
                                    alt=''
                                />
                                <img
                                    src='https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8'
                                    alt=''
                                />
                                <span></span>
                            </button>
                        </li>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </ul>

                    <div className={classes['social-actions']}>
                        <button>
                            <img src='/images/like-icon.svg' alt='' />
                            <span>Like</span>
                        </button>
                        <button>
                            <img src='/images/comments-icon.svg' alt='' />
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src='/images/share-icon.svg' alt='' />
                            <span>Share</span>
                        </button>
                        <button>
                            <img src='/images/send-icon.svg' alt='' />
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
