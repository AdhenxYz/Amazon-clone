import React from 'react'
import Product from '../../Components/Product/Index';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <img className='home_banner' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt='banner' />
      <div className="home_row">
        <Product
          id="12341234"
          title="Reminders of Him: A Novel Kindle Edition"
          price={5.09}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg" />
        <Product
          id="3456664353"
          title="Reminders ofIntroducing Blink Video Doorbell + 1 Outdoor camera system with Sync Module 2 | Two-way audio, HD video, motion and chime app alerts and Alexa enabled— wired or wire-free (Black) Him: A Novel Kindle Edition"
          price={144.09}
          rating={5}
          image="https://m.media-amazon.com/images/I/51RDDu4O1VL._SL1000_.jpg" />
      </div>
      <div className='home_row'>
        <Product
          id="79096996679"
          title="Reminders of Poriff Men's Casual Slim Fit Basic Tops Knitted Thermal Turtleneck Pullover Sweater"
          price={9.09}
          rating={5}
          image="https://m.media-amazon.com/images/I/311ezoXJZSL.jpg" />
        <Product
          id="1237891737"
          title=" TOZO NC2 Hybrid Active Noise Cancelling Wireless Earbuds,"
          price={20.09}
          rating={5}
          image="https://m.media-amazon.com/images/I/41z82w9TXQL.jpg" />
        <Product
          id="a85575782740"
          title="Kindle monthly deals, up to 80% off on more than 700 titles"
          price={10.09}
          rating={5}
          image="https://m.media-amazon.com/images/I/61QDzSAMa3L.jpg" />
      </div>
      <div className='home_row'>
        <Product
          id="89hi34u9hi"
          title="VIZIO 55-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming, V555-J01, 2021"
          price={1000}
          rating={5}
          image="https://m.media-amazon.com/images/I/81gi1C0GM7L._AC_UY218_.jpg" />
      </div>
    </div>
  )
}

export default Home