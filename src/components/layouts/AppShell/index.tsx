import React from 'react'
import NavBar from '../NavBar'

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const {children} = props;
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default AppShell