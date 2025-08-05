import React from 'react'
import MainBaner from '../components/MainBaner';
import Categories from '../components/Categories';
import BestSeller from '../components/BestSeller';

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBaner />
      <Categories />
      <BestSeller />
    </div>
  )
}

export default Home
