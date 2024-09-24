import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Register.module.css"


const RegisterView = () => {
    const { push } = useRouter();
    const handlerRegister = () => {
        push('/shop/skibidi/toilet  ')
    }
  return <div className={styles.register}>
    <h1>Register</h1>
    <button onClick={handlerRegister}>klik untuk brainrot</button>
    <p>Sudah punya akun? <Link href="/auth/login">Login</Link></p>
  </div>;
}

export default RegisterView