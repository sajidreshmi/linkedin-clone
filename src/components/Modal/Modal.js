import React, { useState } from 'react'
import classes from './Modal.module.css'

const Modal = ({ showModal, handleClick }) => {
    const [editorText, setEditorText] = useState('')

    const reset = (e) => {
        setEditorText('')
        handleClick(e)
    }
    return (
        <>
            {showModal === 'open' && (
                <div className={classes['modal-container']}>
                    <div className={classes['modal-content']}>
                        <div className={classes['header']}>
                            <h2>Create a post</h2>
                            <button onClick={(e) => reset(e)}>
                                <img src='/images/close-icon.svg' alt='' />
                            </button>
                        </div>
                        <div className={classes['shared-content']}>
                            <div className={classes['user-info']}>
                                <img src='/images/user.svg' alt='' />
                                <span>Name</span>
                            </div>
                            <div className={classes['editor']}>
                                <textarea
                                    value={editorText}
                                    onChange={(e) =>
                                        setEditorText(e.target.value)
                                    }
                                    placeholder='What do you want to talk about?'
                                    autoFocus={true}
                                ></textarea>
                            </div>
                        </div>
                        <div className={classes['shared-creation']}>
                            <div className={classes['attach-assets']}>
                                <button className={classes['asset-button']}>
                                    <img src='/images/share-image.svg' alt='' />
                                </button>
                                <button className={classes['asset-button']}>
                                    <img src='/images/share-video.svg' alt='' />
                                </button>
                            </div>
                            <div className={classes['share-comment']}>
                                <button className={classes['asset-button']}>
                                    <img
                                        src='/images/share-comment.svg'
                                        alt=''
                                    />
                                    Anyone
                                </button>
                            </div>
                            <button className={classes['post-button']}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
