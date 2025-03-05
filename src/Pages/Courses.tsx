import { useState } from "react";

interface Course {
  title: string;
  description: string;
  image: string;
}

const courses: Record<string, Course> = {
    ADSE: {
        title: "Advanced Diploma in Software Engineering (ADSE)",
        description:
          "The Advanced Diploma in Software Engineering (ADSE) is a cutting-edge program that trains students in Java, .NET, Linux, Python, Cloud Computing, IoT, Data Science, AI, Machine Learning and a number of other in-demand and new-age technologies. These technologies play a key role in the making of a capable I.T Professional. Aptech also has international alliances with reputed institutes like the Lincoln University College Malaysia, Middlesex University in London and NCC Education in UK. Students gets a fantastic opportunity to study abroad in UK, Malaysia, Dubai or Malta via Credit Transfer Facility at Partnered Universities.It's a career programme which runs for 2 years. After completing the program, you can transfer your credits to the international universities in affiliation with Aptech and get a Bsc in one more year. That's 3 years in total to acquire an international IT degree.",
        image:
          "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=800&auto=format&fit=crop&q=80",
      },
      CPISM: {
        title: "Certified Professional in Information Systems Management (CPISM)",
        description:
          "This is the semester 1 only of the full program which can be taken as a stand alone.It focuses on full Front end web development. It's a 6 months programme.",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      },
      DISM: {
        title: "Diploma in Information System Management (DISM)",
        description:
          "This is a combination of Semester 1+2. It covers mobile app development, Linus, C# and Java programming. It runs for 1 year.",
        image:
          "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww",
      },
      "Fullstack Web Dev": {
        title: "Fullstack Web Development",
        description:
          "Become a versatile web developer with our Full Stack Web Development Course! This in-depth program covers both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Learn to build responsive websites, develop dynamic web applications, and manage databases. Ideal for beginners and those looking to advance their skills, this course will equip you with the knowledge and practical experience needed to succeed as a full stack developer in today's tech-driven world.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      },
      "UI/UX": {
        title: "UI/UX Design",
        description:
          "Master the art of creating intuitive and engaging digital experiences with our UI/UX Product Design Course! This comprehensive program covers essential principles of user interface (UI) and user experience (UX) design, including wireframing, prototyping, user research, and usability testing. Learn to use industry-standard tools like Figma. Whether you're a beginner or looking to enhance your skills, this course will equip you with the knowledge and portfolio to excel in the dynamic field of product design.",
        image:
          "https://images.unsplash.com/photo-1587440871875-191322ee64b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVpdXh8ZW58MHx8MHx8fDA%3D",
      },
      "Data Analysis": {
        title: "Data Analysis",
        description:
          "Transform data into actionable insights with our Data Analysis Course! This comprehensive program covers key concepts and tools, including Excel, Tableau , PowerBi and SQL to analyze and visualize data effectively. Learn to clean, process, and interpret data, and develop skills in statistical analysis and data-driven decision-making. Whether you're a beginner or looking to advance your career, this course will equip you with the expertise needed to thrive in the data-driven world.",
        image:
          "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tlc0bCyVUKOylIX2VcdJTKZUzto8R0CviydpYtzGP7I=",
      },
      "Office Automation": {
        title: "Office Automation",
        description:
          "Enhance your productivity and efficiency with our Office Automation Course! This comprehensive program covers essential software tools like Microsoft Office Suite (Word, Excel, PowerPoint). Learn to automate repetitive tasks, manage data, create professional documents, and streamline communication. Ideal for professionals and students, this course will equip you with the skills needed to excel in today's digital workplace.",
        image:
          "https://media.istockphoto.com/id/1272127190/photo/smart-office-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwb-tqr2H3gys2Csi-akhCVK6rwVTYHxY5RNuU8UkO4=",
      },
      "Graphic Design": {
        title: "Graphic Design",
        description:
          "Master the art of creating intuitive and engaging digital experiences with our UI/UX Product Design Course! This comprehensive program covers essential principles of user interface (UI) and user experience (UX) design, including wireframing, prototyping, user research, and usability testing. Learn to use industry-standard tools like Figma. Whether you're a beginner or looking to enhance your skills, this course will equip you with the knowledge and portfolio to excel in the dynamic field of product design.",
        image:
          "https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JhcGhpYyUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      "Digital Marketing": {
        title: "Digital Marketing",
        description:
          "Boost your sales & marketing career with our Digital Marketing Course! This comprehensive program covers key areas such as SEO, social media marketing, email marketing, content creation, and Google Analytics. Learn to develop effective marketing strategies, create engaging content, and analyze campaign performance. Ideal for beginners and professionals looking to enhance their digital skills, this course will equip you with the knowledge and tools to succeed in the fast-paced world of digital marketing.",
        image:
          "https://images.unsplash.com/photo-1571677246347-5040036b95cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
    };
    
const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("ADSE");

  return (
<>
  {/* Hero Section */}
  <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-white text-6xl font-extrabold drop-shadow-lg">
          Our Career Courses
        </h1>
        <p className="text-white text-lg mt-4">
          Kickstart your career in Information Technology with industry-relevant courses designed for success.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop&q=60"
          alt="Coding"
          className="rounded-lg shadow-xl object-cover"
        />
      </div>
    </div>
  </section>

  {/* Courses Section */}
  <section className="bg-gray-50 py-16 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-gray-600 text-lg font-semibold uppercase tracking-wider">
          Our Courses
        </h3>
        <h1 className="text-gray-900 text-5xl font-extrabold leading-tight">
          Your IT Career Pathway
        </h1>
        
        {/* Dynamic Course Title */}
        <h2 className="text-red-600 text-3xl font-bold mt-6">
          {courses[selectedCourse].title}
        </h2>
        
        {/* Course Tabs */}
        <div className="flex flex-wrap gap-4 mt-6">
          {Object.keys(courses).map((course) => (
            <button
              key={course}
              className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all ${
                selectedCourse === course
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCourse(course)}
            >
              {course}
            </button>
          ))}
        </div>
        
        {/* Dynamic Course Description */}
        <p className="text-gray-700 mt-6 leading-relaxed text-lg md:text-xl lg:text-xl xl:text-xl">
          {courses[selectedCourse].description}
        </p>

        {/* Learn More Button for ADSE & CPISM */}
        {(selectedCourse === "ADSE" || selectedCourse === "CPISM") && (
          <a
            href={selectedCourse === "ADSE" ? "/adse" : "/cpism"}
            className="mt-6 inline-block bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all"
          >
            Learn More
          </a>
        )}
      </div>

      {/* Right Side: Dynamic Image */}
      <div className="relative flex justify-center items-center">
        <img
          src={courses[selectedCourse].image}
          alt={selectedCourse}
          className="w-full max-w-lg rounded-2xl shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        />
      </div>
    </div>
  </section>
</>

  );
};

export default Courses;
