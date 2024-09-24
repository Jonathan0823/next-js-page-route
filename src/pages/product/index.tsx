/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const { push } = useRouter();
  const {IsLogin, setIsLogin} = useState(true);
  useEffect(() => {
    if(!IsLogin){
      push('/auth/login')
    }
  }, []);
  return (
    <div>product page</div>
  )
}

export default Index