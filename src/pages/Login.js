import React, { useState } from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import services from '../Utils/services'

import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`

const Button = styled.a`
  color: white;
  background-color: lightgreen;
  border-radius: 5px;
  padding: 16px 32px;
  font-weight: 700;
  margin-right: 16px;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width: 100%;

  h5 {
    color: red;
    margin: 4px;
  }
  
  .form-group{
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    width: 280px;
    label {
      margin-bottom: 8px;
    }
    input {
      padding: 8px;
    }
  }

  .button {
    width: 280px;
    color: white;
    outline: none;
    border: none;
    background-color: lightgreen;
    padding: 16px 32px;
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: green;
    }
  }
`


export default () => {
  const [loggedin, setLoggedin] = useState(false)
  const [loginFail, setLoginFail] = useState({ message: '', status: false })

  const login = async (values, { setSubmitting }) => {
    setSubmitting(true)
    try {
      const { data } = await services.post(`/api/auth/`, values)
      localStorage.setItem('token', data.token)
      localStorage.setItem('logedin', true)
      setSubmitting(false)
      setLoggedin(true)
    } catch (e) {
      setLoginFail({ ...loginFail, message: e, status: true })
      setSubmitting(false)
    }
  }

  return (
    <LoginPage>
      <div className="container">
        {loggedin
          ?
          <>
            <LoginForm>
              <Button as={Link} to="/new_post">Criar um post</Button>
              <Button as={Link} to="/">Home</Button>
            </LoginForm>
          </>
          :
          <>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              onSubmit={login}
              validationSchema={
                Yup.object().shape({
                  username: Yup.string().required("Digite um usuário"),
                  password: Yup.string().required("Digite uma senha")
                })}>
              {
                ({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, setValues, setFieldValue }) => {
                  return (
                    <LoginForm>
                      <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          name="username"
                          id="username">
                        </input>
                        {errors.username && touched.username && <h5>{errors.username}</h5>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                          type='password'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                          id="password">
                        </input>
                        {errors.password && touched.password && <h5>{errors.password}</h5>}
                      </div>
                      {loginFail.status && <h5>{loginFail.message.message}</h5>}
                      <input className="button" type="submit" onClick={handleSubmit} disabled={isSubmitting} value="Login" />
                    </LoginForm>
                  )
                }
              }
            </Formik>
          </>
        }
      </div>
    </LoginPage>
  )
}
