
import Companies from '@/components/Home/Companies';
import Courses from '@/components/Home/Courses';
import Hero from '@/components/Home/Hero';
import Mentor from '@/components/Home/Mentor';
import Newsletter from '@/components/Home/Newsletter';
import Testimonial from '@/components/Home/Testimonials';
import React from 'react';

const Home = () => {
    return (
        <>
            <Hero />
            <Companies />
            <Courses />
            <Mentor />
            <Testimonial />
            <Newsletter />
        </>
    );
};

export default Home;