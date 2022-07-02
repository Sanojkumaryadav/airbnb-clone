import React from 'react'
import {Navbar} from '../../Header/Navbar'
import {Header} from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import Cards from '../../Cards'

export const Home =()=>{
    return (
        <>
            <Header />
            <Navbar />
            <Cards />
            <Footer />
            
        </>
    )
}

