import React from 'react'
import MainBaner from '../components/MainBaner';
import Categories from '../components/Categories';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBaner />
      <Categories />
      <BestSeller />
      <BottomBanner />
    </div>
  )
}

export default Home
