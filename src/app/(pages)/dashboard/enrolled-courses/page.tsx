import EnrolledCourseCard from '@/components/EnrolledCourseCard/EnrolledCourseCard';
import React from 'react';

const EnrolledCourses = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-5'>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
        </div>
    );
};

export default EnrolledCourses;