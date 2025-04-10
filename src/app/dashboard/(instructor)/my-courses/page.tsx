import MyCoursesCard from '@/components/instructor/MyCourses/MyCoursesCard';
import React from 'react';

const MyCourses = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-5'>
        <MyCoursesCard 
            title="React for Beginners" 
            students={250} 
            hours={10} 
            price="29.99" 
            bannerUrl="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" 
            createDate="2024-01-12T15:00:00" // ISO date format
        />
        <MyCoursesCard 
            title="React for Beginners" 
            students={250} 
            hours={10} 
            price="29.99" 
            bannerUrl="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" 
            createDate="2024-01-12T15:00:00" // ISO date format
        />
        <MyCoursesCard 
            title="React for Beginners" 
            students={250} 
            hours={10} 
            price="29.99" 
            bannerUrl="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" 
            createDate="2024-01-12T15:00:00" // ISO date format
        />
        <MyCoursesCard 
            title="React for Beginners" 
            students={250} 
            hours={10} 
            price="29.99" 
            bannerUrl="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" 
            createDate="2024-01-12T15:00:00" // ISO date format
        />
        <MyCoursesCard 
            title="React for Beginners" 
            students={250} 
            hours={10} 
            price="$29.99" 
            bannerUrl="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" 
            createDate="2024-01-12T15:00:00" // ISO date format
        />
        <MyCoursesCard 
            title="React for Beginners" 
            students={250} 
            hours={10} 
            price="$29.99" 
            bannerUrl="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" 
            createDate="2024-01-12T15:00:00" // ISO date format
        />
        </div>
    );
};

export default MyCourses;