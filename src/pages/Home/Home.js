import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import LeftContent from '../../components/LeftContent/LeftContent'
import MainContent from '../../components/MainContent/MainContent'
import RightContent from '../../components/RightContent/RightContent'
import Section from '../../components/Section/Section'
import classes from './Home.module.css'

const Home = () => {
    const user = useSelector((state) => state.userState.user)

    return (
        <>
            {!user && <Redirect to='/' />}
            <Header />
            <Container>
                <section className={classes['section-hurry']}>
                    <h5>
                        <a>Hiring in a hurry? - </a>
                    </h5>
                    <p>
                        Find talended pros in record time with Upwork and keep
                        the business moving.
                    </p>
                </section>
                <section className={classes['section-layout']}>
                    <LeftContent></LeftContent>
                    <MainContent></MainContent>
                    <RightContent></RightContent>
                </section>
            </Container>
        </>
    )
}

export default Home
