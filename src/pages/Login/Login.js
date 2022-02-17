import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Nav from '../../components/Nav/Nav'
import Section from '../../components/Section/Section'
import classes from './Login.module.css'
import { signInAPI } from '../../actions'

const Login = () => {
    const dispatch = useDispatch()

    const signIn = () => {
        dispatch(signInAPI())
    }
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/login-logo.svg' alt='' />
                </a>
                <div>
                    <Button name='Btn-JoinNow'>Join Now</Button>
                    <Button name='Btn-SignIn'>Sign In</Button>
                </div>
            </Nav>
            <Section>
                <div className={classes['sub-header']}>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg' />
                </div>
                <div className={classes['form']}>
                    <Button name='Btn-Google-SignIn' onClick={() => signIn()}>
                        <img src='/images/google.svg' alt='' />
                        Sign in with Google
                    </Button>
                </div>
            </Section>
        </Container>
    )
}

export default Login
