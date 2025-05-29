"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import CourseSlide from "./CourseSlide";

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
  discountPrice: number;
  duration: string;
  level: string;
  language: string;
  category: string;
  rating: number;
  totalRatings: number;
  totalEnrollments: number;
  whatYouWillLearn: string[];
  requirements: string[];
  curriculum: string[];
  isFeatured: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

const courses: Course[] = [
  {
    "id": "course-001",
    "title": "Complete Web Development Bootcamp",
    "slug": "complete-web-development-bootcamp",
    "description": "Learn HTML, CSS, JavaScript, React, Node.js, and more to become a full-stack web developer.",
    "thumbnail": "https://images.unsplash.com/photo-1542831371-29b0f74f9491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "instructor": {
      "name": "John Doe",
      "bio": "Senior Web Developer and Instructor",
      "profileImage": "https://images.unsplash.com/photo-1535713875002-d1d0cfdce5dd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 49.99,
    "discountPrice": 29.99,
    "duration": "40 hours",
    "level": "Beginner to Advanced",
    "language": "English",
    "category": "Web Development",
    "rating": 4.8,
    "totalRatings": 1240,
    "totalEnrollments": 5500,
    "whatYouWillLearn": [
      "Build responsive websites using HTML and CSS",
      "Create interactive web apps using JavaScript and React",
      "Build backend APIs with Node.js and Express",
      "Work with MongoDB databases"
    ],
    "requirements": [
      "Basic computer knowledge",
      "No prior programming experience required"
    ],
    "curriculum": [],
    "isFeatured": true,
    "tags": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    "createdAt": "2024-05-01T10:00:00Z",
    "updatedAt": "2025-01-15T15:30:00Z"
  },
  {
    "id": "course-002",
    "title": "Mastering Data Science with Python",
    "slug": "mastering-data-science-with-python",
    "description": "Learn Python for data analysis, machine learning, and data visualization. Hands-on projects included.",
    "thumbnail": "https://images.unsplash.com/photo-1550543789-f538e1e779a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "instructor": {
      "name": "Jane Smith",
      "bio": "Data Scientist and Educator",
      "profileImage": "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 59.99,
    "discountPrice": 39.99,
    "duration": "50 hours",
    "level": "Intermediate",
    "language": "English",
    "category": "Data Science",
    "rating": 4.9,
    "totalRatings": 980,
    "totalEnrollments": 4200,
    "whatYouWillLearn": [
      "Perform data cleaning and preprocessing with Pandas",
      "Build machine learning models with Scikit-learn",
      "Visualize data with Matplotlib and Seaborn",
      "Understand statistical concepts for data science"
    ],
    "requirements": [
      "Basic understanding of programming concepts",
      "Familiarity with algebra"
    ],
    "curriculum": [],
    "isFeatured": true,
    "tags": ["Python", "Data Science", "Machine Learning"],
    "createdAt": "2024-03-10T11:30:00Z",
    "updatedAt": "2025-02-01T10:00:00Z"
  },
  {
    "id": "course-003",
    "title": "UI/UX Design Masterclass",
    "slug": "ui-ux-design-masterclass",
    "description": "Learn the principles of UI/UX design, user research, wireframing, prototyping, and usability testing.",
    "thumbnail": "https://images.unsplash.com/photo-1626786221804-d4752232936f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "instructor": {
      "name": "Emily White",
      "bio": "Lead UI/UX Designer at InnovateTech",
      "profileImage": "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 39.99,
    "discountPrice": 19.99,
    "duration": "30 hours",
    "level": "Beginner",
    "language": "English",
    "category": "Design",
    "rating": 4.7,
    "totalRatings": 780,
    "totalEnrollments": 3000,
    "whatYouWillLearn": [
      "Apply user-centered design principles",
      "Create wireframes and interactive prototypes",
      "Conduct user research and usability testing",
      "Design intuitive and aesthetically pleasing interfaces"
    ],
    "requirements": [
      "No prior design experience needed"
    ],
    "curriculum": [],
    "isFeatured": false,
    "tags": ["UI Design", "UX Design", "Figma", "Prototyping"],
    "createdAt": "2024-04-20T09:00:00Z",
    "updatedAt": "2024-12-01T14:00:00Z"
  }
];

const HeroSection: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    swiper: number,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="h-[90vh] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseSlide course={course} />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress absolute bottom-4 right-4 z-20 flex items-center justify-center w-12 h-12">
          <svg
            className="w-full h-full"
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle
              className="stroke-current text-blue-500"
              cx="24"
              cy="24"
              r="20"
              strokeWidth="4"
              fill="none"
            ></circle>
          </svg>
          <span
            className="absolute text-sm font-semibold text-white"
            ref={progressContent}
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
