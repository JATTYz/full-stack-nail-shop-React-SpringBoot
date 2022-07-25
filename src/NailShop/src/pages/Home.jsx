import React from 'react'
import Annoucement from './components/Annoucement'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ProductHead from './components/ProductHead'


const Home = () => {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <ProductHead />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
