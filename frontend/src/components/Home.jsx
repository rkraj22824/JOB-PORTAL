import React, { useEffect } from 'react'
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJob';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
useGetAllJobs();
const {user} = useSelector(store =>store.auth);
useEffect(()=>{
  if(user?.route ==='recruiter '){
    navigate("/admin/companies");
  }
},[]);
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer/>
    </div>
  );
};

export default Home;
