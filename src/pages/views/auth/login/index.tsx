import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Login.module.css'

const LoginView = () => {
    const { push } = useRouter();
    const handlerLogin = () => {
        push('/product')
    }
  return (
    <div className={styles.login}>
        <h1>Login</h1>
        <button onClick={handlerLogin}>Login</button>
        <p>Belum punya akun? <Link href="/auth/register">Register</Link></p>
    </div>
  )
}

export default LoginView