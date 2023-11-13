import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Card1 from '../components/Card1'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header/>
      <Slider/>
      <div className="effect"></div>
      <div className="container-fluid px-4 card-container">
        <div className="row">
          <div className="col-3">
            <Card1/>
          </div>
          <div className="col-3">
           <Card1/>
          </div>
          <div className="col-3">
          <Card1/>
          </div>
          <div className="col-3">
          <Card1/>
          </div>
          <div className="col-3">
            <Card1/>
          </div>
          <div className="col-3">
           <Card1/>
          </div>
          <div className="col-3">
          <Card1/>
          </div>
          <div className="col-3">
          <Card1/>
          </div>
          <div className="col-3">
            <Card1/>
          </div>
          <div className="col-3">
           <Card1/>
          </div>
          <div className="col-3">
          <Card1/>
          </div>
          <div className="col-3">
          <Card1/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home