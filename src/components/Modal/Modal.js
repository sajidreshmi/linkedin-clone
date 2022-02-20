import React, { useState } from 'react'
import classes from './Modal.module.css'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
// import * as firebase from 'firebase'
import { getArticlesAPI, postArticleAPI } from '../../actions'

const Modal = ({ showModal, handleClick }) => {
    const [editorText, setEditorText] = useState('')
    const [shareImage, setShareImage] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [assetArea, setAssetArea] = useState('')

    const user = useSelector((state) => state.userState.user)

    const dispatch = useDispatch()

    const reset = (e) => {
        setEditorText('')
        setShareImage('')
        setVideoLink('')
        setAssetArea('')
        handleClick(e)
    }

    const handleChange = (e) => {
        const image = e.target.files[0]

        if (image === '' || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`)
            return
        }
        setShareImage(image)
    }

    const swithAssetArea = (area) => {
        setShareImage('')
        setVideoLink('')
        setAssetArea(area)
    }

    const postArticle = (e) => {
        e.preventDefault()

        if (e.target !== e.currentTarget) {
            return
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: user,
            description: editorText,
            timestamp: new Date().getTime(),
        }

        dispatch(postArticleAPI(payload))
        dispatch(getArticlesAPI())
        reset(e)
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
                                <img
                                    src={
                                        user && user.photoURL
                                            ? user.photoURL
                                            : '/images/user.svg'
                                    }
                                    alt=''
                                />
                                <span>{user ? user.displayName : ''}</span>
                            </div>
                            <div className={classes['editor']}>
                                <textarea
                                    value={editorText}
                                    onChange={(e) =>
                                        setEditorText(e.target.value)
                                    }
                                    placeholder='What do you want to talk about?'
                                    autoFocus={true}
                                />
                                {assetArea === 'image' ? (
                                    <div className={classes['upload-image']}>
                                        <input
                                            type='file'
                                            accept='image/gif, image/jpeg, image/png'
                                            name='image'
                                            id='file'
                                            style={{ display: 'none' }}
                                            onChange={handleChange}
                                        />
                                        <p>
                                            <label htmlFor='file'>
                                                Select an image to share
                                            </label>
                                        </p>

                                        {shareImage && (
                                            <img
                                                src={URL.createObjectURL(
                                                    shareImage
                                                )}
                                            />
                                        )}
                                    </div>
                                ) : (
                                    assetArea === 'media' && (
                                        <>
                                            <input
                                                type='text'
                                                placeholder='Please input a video link'
                                                value={videoLink}
                                                onChange={(e) =>
                                                    setVideoLink(e.target.value)
                                                }
                                            />
                                            {videoLink && (
                                                <ReactPlayer
                                                    width={'100%'}
                                                    url={videoLink}
                                                />
                                            )}
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                        <div className={classes['shared-creation']}>
                            <div className={classes['attach-assets']}>
                                <button
                                    className={classes['asset-button']}
                                    onClick={() => swithAssetArea('image')}
                                >
                                    <img src='/images/share-image.svg' alt='' />
                                </button>
                                <button
                                    className={classes['asset-button']}
                                    onClick={() => swithAssetArea('media')}
                                >
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
                            <button
                                disabled={!editorText ? true : false}
                                className={classes['post-button']}
                                onClick={(e) => postArticle(e)}
                            >
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
