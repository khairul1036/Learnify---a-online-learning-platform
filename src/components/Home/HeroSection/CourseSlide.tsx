import React from "react";
import { IoIosTimer } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

type Instructor = {
    name: string;
    bio: string;
    profileImage: string;
};

type Course = {
    id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    instructor: Instructor;
    price: number;
    discountPrice?: number;
    duration: string;
    level: string;
    language: string;
    category: string;
    rating: number;
    totalRatings: number;
    totalEnrollments: number;
    whatYouWillLearn: string[];
    requirements: string[];
    curriculum: string[]; // You can refine this if you define a curriculum structure
    isFeatured: boolean;
    tags: string[];
    createdAt: string;
    updatedAt: string;
};

interface CourseSlideProps {
    course: Course;
}

const CourseSlide: React.FC<CourseSlideProps> = ({ course }) => {
    // Truncate description if it's too long for the layout
    const shortDescription = course.description.length > 200
        ? course.description.substring(0, 197) + "..."
        : course.description;

    return (
        <div className="bg-[url(https://i.ibb.co/2L5DM4n/2303-i309-016-s-m004-c13-graduation-education-realistic.jpg)] bg-cover text-white">
            <div className="bg-black/70 py-60">
                <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
                    <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
                        <img className="rounded-2xl" src="https://i.ibb.co/2L5DM4n/2303-i309-016-s-m004-c13-graduation-education-realistic.jpg" alt="" />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="text-white text-sm font-semibold mb-1 tracking-wide">NEW COURSE</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">{course.title}</h2>
                        <p className="text-white text-sm mb-5 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="mb-5">
                            <p className="text-sm text-white">Instructor: <span className="font-semibold text-white">{course.instructor.name}</span></p>
                        </div>

                        <div className="text-xs text-white flex space-x-4 items-center mb-5">
                            <p className="flex items-center"><span className="mr-1"><IoIosTimer /></span>{course.duration}</p>
                            <p className="flex items-center"><span className="mr-1"><FaRegStar /></span>{course.rating}</p>
                            <p className="flex items-center"><span className="mr-1"><FaUser /></span>{course.totalEnrollments}</p>
                        </div>

                        <div className="flex items-baseline mb-6">
                            <p className="text-3xl font-bold text-white mr-2">${course.discountPrice}</p>
                            <p className="text-xl text-white line-through">${course.price}</p>
                        </div>

                        <button className="w-full sm:w-auto bg-indigo-600 text-white py-3 px-10 rounded-lg hover:bg-indigo-700 transition duration-300 mb-6 text-base font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSlide;