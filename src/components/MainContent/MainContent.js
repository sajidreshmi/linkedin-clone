import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlesAPI } from '../../actions'
import Modal from '../Modal/Modal'
import classes from './MainContent.module.css'

const MainContent = () => {
    const [showModal, setShowModal] = useState('close')
    const user = useSelector((state) => state.userState.user)
    const { loading, articles } = useSelector((state) => state.articleState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getArticlesAPI())

        //   return () => {
        //     second
        //   }
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target !== e.currentTarget) {
            return
        }

        switch (showModal) {
            case 'open':
                setShowModal('close')
                break
            case 'close':
                setShowModal('open')
                break
            default:
                setShowModal('close')
                break
        }
    }
    return (
        <>
            <div className={classes['main-content']}>
                <div
                    className={
                        classes['share-box'] + ' ' + classes['common-card']
                    }
                >
                    <div>
                        {user && user.photoURL ? (
                            <img src={user.photoURL} />
                        ) : (
                            <img src='/images/user.svg' alt='' />
                        )}

                        <button
                            onClick={(e) => handleClick(e)}
                            disabled={loading ? true : false}
                        >
                            Start a post
                        </button>
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
                {articles.length === 0 ? (
                    <p>
                        There are no articles. Click Start a post to add a new
                        article.!
                    </p>
                ) : (
                    <div className={classes['post-content']}>
                        {loading && <img src='/images/spinner.gif' alt='' />}

                        {articles.length > 0 &&
                            articles.map((article, key) => {
                                return (
                                    <div
                                        className={
                                            classes['article'] +
                                            ' ' +
                                            classes['common-card']
                                        }
                                        key={key}
                                    >
                                        <div
                                            className={classes['shared-actor']}
                                        >
                                            <a>
                                                <img
                                                    src={article.actor.image}
                                                    alt=''
                                                />
                                                <div>
                                                    <span>
                                                        {article.actor.title}
                                                    </span>
                                                    <span>
                                                        {
                                                            article.actor
                                                                .description
                                                        }
                                                    </span>
                                                    <span>
                                                        {new Date(
                                                            article.actor.date
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </a>
                                            <button>
                                                <img src='/images/ellipse-icon.svg' />
                                            </button>
                                        </div>

                                        <div className={classes['description']}>
                                            {article.description}
                                        </div>

                                        <div className={classes['shared-img']}>
                                            <a>
                                                {!article.sharedImg &&
                                                article.video ? (
                                                    <ReactPlayer
                                                        width={'100%'}
                                                        url={article.video}
                                                    />
                                                ) : (
                                                    article.sharedImg && (
                                                        <img
                                                            src={
                                                                article.sharedImg
                                                            }
                                                            alt=''
                                                        />
                                                    )
                                                )}
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
                                                <a>
                                                    {article.comments} comments
                                                </a>
                                            </li>
                                        </ul>

                                        <div
                                            className={
                                                classes['social-actions']
                                            }
                                        >
                                            <button>
                                                <img
                                                    src='/images/like-icon.svg'
                                                    alt=''
                                                />
                                                <span>Like</span>
                                            </button>
                                            <button>
                                                <img
                                                    src='/images/comments-icon.svg'
                                                    alt=''
                                                />
                                                <span>Comments</span>
                                            </button>
                                            <button>
                                                <img
                                                    src='/images/share-icon.svg'
                                                    alt=''
                                                />
                                                <span>Share</span>
                                            </button>
                                            <button>
                                                <img
                                                    src='/images/send-icon.svg'
                                                    alt=''
                                                />
                                                <span>Send</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                )}
                <Modal showModal={showModal} handleClick={handleClick} />
            </div>
        </>
    )
}

export default MainContent
