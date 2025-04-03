import CourseCard from '@/components/CourseCard/CourseCard';


export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Course Card */}
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
    </div>
  );
}
