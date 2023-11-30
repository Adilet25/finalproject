import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import "../style/MainLayout.sass"

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
        <Navbar/>
        <main className="mainBlock">{children}</main>
        <Footer/>
    </div>
  )
}

export default MainLayout