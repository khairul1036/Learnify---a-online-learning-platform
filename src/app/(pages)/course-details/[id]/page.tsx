"use client"
import React, { useState } from 'react';
import { Star, Clock, User, Play, Lock, ChevronDown, ChevronUp } from 'lucide-react'; 
import Link from 'next/link';


const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('courseInfo'); // To manage tabs
  const [activeModule, setActiveModule] = useState(null); // To manage which module is expanded
  const [selectedVideo, setSelectedVideo] = useState(null);

  const modules = [
    { 
      title: "Introduction to Algorithms", 
      videos: [
        { title: "Basic Sorting Algorithms", videoLink: "https://www.youtube.com/embed/aO1-6X_f74M?si=MCUrjOW2mPs7L-Ig", videoDuration: "02:30:50", isLocked: false },
        { title: "Advanced Sorting Algorithms", videoLink: "https://www.youtube.com/embed/rgT9cqh_UyE?si=yw_XOYn0wsRDWAh9", videoDuration: "01:45:30", isLocked: true },
      ]
    },
    { 
      title: "Graph Algorithms", 
      videos: [
        { title: "Graph Theory Basics", videoLink: "65 https://www.youtube.com/watch?v=rgT9cqh_UyE", videoDuration: "03:10:15", isLocked: false },
        { title: "Graph Traversal", videoLink: "885 https://www.youtube.com/watch?v=rgT9cqh_UyE", videoDuration: "02:20:05", isLocked: false },
      ]
    },
    { 
      title: "Dynamic Programming", 
      videos: [
        { title: "Introduction to DP", videoLink: "https://www.youtube.com/watch?v=rgT9cqh_UyE", videoDuration: "02:45:30", isLocked: true },
        { title: "Memoization Techniques", videoLink: "https://www.youtube.com/watch?v=rgT9cqh_UyE", videoDuration: "01:50:10", isLocked: false },
      ]
    },
  ];

  const toggleModule = (index) => {
    if (activeModule === index) {
      setActiveModule(null); // Close the accordion if the same module is clicked
    } else {
      setActiveModule(index); // Open the clicked module
    }
  };

  // Function to handle selecting a video
  const handleVideoSelect = (videoLink) => {
    setSelectedVideo(videoLink)
  }
  // Close the video popup
  const closePopup = () => setSelectedVideo(null);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-8">
        {/* Course Banner and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Left: Course Banner */}
          <div className="col-span-2">
            <div className="bg-white shadow-md rounded-sm overflow-hidden">
              <img src="https://q-bitlearning.com/wp-content/uploads/2024/07/Algorithm.png" alt="Course Banner" className=" w-full h-[200px] md:h-[500px] object-cover" />
            </div>
            {/* Course Name and Category */}
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-indigo-600">Batch-2 | Algorithm Design using C/C++</h2>
              <p className="text-sm text-gray-600 mt-2">Categories: Programming</p>
            </div>

            {/* Tabs: Course Info, Class Schedule, Reviews, Announcements */}
            <div className="mt-8">
              <div className="flex space-x-4 border-b overflow-auto">
                <button
                  onClick={() => setActiveTab('courseInfo')}
                  className={`py-2 px-4 text-base cursor-pointer font-semibold ${activeTab === 'courseInfo' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('classSchedule')}
                  className={`py-2 px-4 text-base cursor-pointer font-semibold ${activeTab === 'classSchedule' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
                >
                  Schedule
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-2 px-4 text-base cursor-pointer font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setActiveTab('announcements')}
                  className={`py-2 px-4 text-base cursor-pointer font-semibold ${activeTab === 'announcements' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
                >
                  Announcements
                </button>
              </div>

              <div className="mt-4">
                {activeTab === 'courseInfo' && (
                 <div>
                 {/* <h3 className="text-xl font-semibold text-indigo-600">Course Information</h3> */}
                 <p className="text-gray-600 mt-2">
                   This course offers an in-depth exploration of algorithm design and implementation using C/C++. It is designed for students who want to master problem-solving techniques and develop a strong understanding of data structures. 
                 </p>
                 <p className="text-gray-600 mt-2">
                   Key topics include:
                 </p>
                 <ul className="list-disc pl-5 text-gray-600">
                   <li>Introduction to Algorithms and their classifications (e.g., divide and conquer, greedy algorithms)</li>
                   <li>Data Structures: Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs</li>
                   <li>Sorting and Searching Algorithms: Bubble Sort, Quick Sort, Merge Sort, Binary Search</li>
                   <li>Graph Algorithms: BFS, DFS, Shortest Path algorithms</li>
                   <li>Dynamic Programming and Backtracking</li>
                   <li>Time and Space Complexity analysis using Big O notation</li>
                 </ul>
                 <p className="text-gray-600 mt-2">
                   This course is ideal for students aiming to improve their competitive programming skills, prepare for coding interviews, or gain a deeper understanding of the fundamental principles of computer science.
                 </p>
               </div>
               
                )}
                {activeTab === 'classSchedule' && (
                  <div>
                    <h3 className="text-xl font-semibold">Class Schedule</h3>
                    <p className="text-gray-600 mt-2">Classes are held twice a week, on Mondays and Thursdays.</p>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-xl font-semibold">Reviews</h3>
                    <p className="text-gray-600 mt-2">The course is highly rated by previous students!</p>
                  </div>
                )}
                {activeTab === 'announcements' && (
                  <div>
                    <h3 className="text-xl font-semibold">Announcements</h3>
                    <p className="text-gray-600 mt-2">Next class will be a live Q&A session. Don't miss it!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Enrollment Card Info */}
          <div className="sticky top-0 mt-10 lg:mt-0">
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-2 border-indigo-600">
              <h3 className="text-2xl font-semibold text-indigo-600">1,500৳  <span className="text-lg text-gray-400 line-through">3,000৳</span></h3>
                 {/* Enroll Button */}
            <div className="mt-4">
              <Link
                href={"/checkout"}
                className="w-full text-center inline-block px-6 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:text-white transition-colors"
              >
                Enroll Now
              </Link>
            </div>
            <div className="flex items-center text-yellow-400 mb-4 border-t pt-4 mt-4">
                <Star className="w-5 h-5" />
                <span className="ml-1 text-sm text-gray-600">4.5(15)</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-1"><User className="w-4 h-4" /> </span>
                <span>17 Total Enrolled</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-1"><Clock className="w-4 h-4" /> </span>
                <span>41 hours 30 minutes Duration</span>
            </div>

              {/* Instructors */}
              <h2 className='mt-8 mb-5 text-lg font-semibold text-gray-700'>A course by</h2>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" alt="Khairul Islam" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-800">Khairul Islam</h4>
                  <p className="text-sm text-gray-500">Instructor</p>
                </div>
              </div>
            </div>

            {/* Material Includes */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-2 border-indigo-600 pt-4 mt-4">
                <h3 className="text-xl font-semibold mb-2">Material Includes</h3>
                <ul className="list-disc pl-5 text-base text-gray-600 space-y-2">
                  <li>২৫+ টির বেশি ক্লাস</li>
                  <li>সপ্তাহে ৩ (২+১) দিন ক্লাস</li>
                  <li>প্রতিটি ক্লাস হবে ১:৩০ মিনিট</li>
                  <li>লাইভ অনলাইন ক্লাস</li>
                  <li>প্রতি সপ্তাহে অফলাইন সাপোর্ট ক্লাস</li>
                  <li>প্রজেক্ট গাইডলাইন</li>
                  <li>কোশ্চেন সলভ</li>
                  <li>কন্টেস্ট প্রিপারেশন</li>
                  <li>ফুল সেমিস্টার সাপোর্ট</li>
                </ul>
            </div>

          </div>
        </div>

        {/* Topics of the Course */}
    <div className='my-10'>
      <h3 className="text-xl font-semibold text-indigo-600 mb-6">Topics of the Course</h3>

      {/* Accordion for Parent Course Modules */}
      <div className="space-y-4">
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="bg-white border border-gray-300 rounded-lg">
            {/* Parent Module Title with Expand/Collapse Icon */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleModule(moduleIndex)}
            >
              <div className="w-full flex justify-between items-center space-x-2">
                <h4 className="text-lg font-semibold text-gray-700">{module.title}</h4>
                {/* right Side: Chevron Icon */}
                <span>
                    {activeModule === moduleIndex ? (
                    <ChevronUp size={20} className="text-indigo-600" />
                    ) : (
                    <ChevronDown size={20} className="text-indigo-600" />
                    )}
                </span>
              </div>
            </div>

            {/* Accordion Content (Shows video details when module is expanded) */}
            {activeModule === moduleIndex && (
                <div className="space-y-2">
                    {module.videos.map((video, videoIndex) => (
                    <div key={videoIndex} className="flex items-center justify-between p-4 border-t border-gray-200">
                        
                        {/* Right side: Video Play icon, Title, and Lock/Free Icon */}
                        <div className="flex items-center space-x-4">
                        <Play size={24} className="text-indigo-600" />
                        
                        {/* Video Title wrapped with Link */}
                        <button
                        onClick={() => handleVideoSelect(video?.videoLink)}
                        className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-indigo-600"
                        >
                        {video.title}
                        </button>

                        {/* Lock or Free Icon */}
                        {video.isLocked ? (
                            <Lock size={18} className="text-gray-400" />
                        ) : (
                            <span className="text-green-500">Free</span>
                        )}
                        </div>

                        {/* Left side: Video Duration */}
                        <div className="text-gray-600 text-sm bg-indigo-100/50 rounded-sm px-2 py-1">
                        {video.videoDuration}
                        </div>
                    </div>
                    ))}
                </div>
                )}

                </div>
                ))}
            </div>
        </div>

        {/* Video Popup Modal */}
        {selectedVideo && (
            <div className="fixed inset-0 bg-gray-800/60 bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-indigo-600 p-1 rounded-lg relative w-4/5 md:w-3/4 lg:w-1/2">
                <button
                onClick={closePopup}
                className="absolute -top-2 -right-3 text-xl text-white px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-600 rounded-full"
                >
                X
                </button>
                <iframe
                width="100%"
                height="200"
                className="md:h-80 lg:h-96" 
                src={selectedVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
        )}

        {/* More Courses Section */}
        {/* <h3 className="text-xl font-semibold text-indigo-600 my-6">More Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div> */}
      </div>
    </div>
  );
};

export default CourseDetails;
