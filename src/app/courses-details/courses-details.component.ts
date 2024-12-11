import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.css',
})
export class CoursesDetailsComponent {
  courseId!: string;
  courseDetails: any;
  bulletPoints: any;
  lessons: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the course ID from the URL
    this.courseId = this.route.snapshot.paramMap.get('id')!; // Retrieve the 'id' param

    // For the purpose of this example, we'll mock the course details
    // In a real application, you would fetch this from an API or service based on the courseId.
    this.courseDetails = this.getCourseDetails(this.courseId);
  }

  getCourseDetails(id: string) {
    // Mock data, you can replace this with an actual service call
    const courses = [
      {
        id: '1',
        title: 'UI/UX',
        description:
          'Our UI/UX Design Training focuses on equipping you with the skills to create user-friendly, visually appealing, and intuitive digital experiences. Learn wireframing, prototyping, user research, and design tools like Figma and Adobe XD. Gain hands-on experience and build a portfolio to kickstart your career in design!',
        imgUrl: 'assets/img/course/13.jpg',
        bulletPoints: [
          'Research & Analysis',
          'Wireframing & Prototyping',
          'Information Architecture (IA)',
        ],
        lessons: [
          'Intro Video',
          'How to Open Camera',
          'Balancing the Exposure',
          'Preparing to Shoot',
          'Studio Demonstration',
          'Shutter Speed',
          'Aperture',
          'ISO',
        ],
      },
      {
        id: '2',
        title: 'Data Analytics',
        description:
          'Our Data Analytics Training equips you with the skills to analyze, visualize, and interpret data effectively. Learn tools like Python, Excel, SQL, and Tableau, and work on real-world projects to make data-driven decisions. Perfect for freshers and professionals aiming to excel in the analytics domain.',
        imgUrl: 'assets/img/course/details/RMDA.png',
        bulletPoints: [
          'Research & Analysis',
          'Wireframing & Prototyping',
          'Information Architecture (IA)',
        ],
        lessons: [
          'Intro Video',
          'How to Open Camera',
          'Balancing the Exposure',
          'Preparing to Shoot',
          'Studio Demonstration',
          'Shutter Speed',
          'Aperture',
          'ISO',
        ],
      },
      {
        id: '3',
        title: 'Full Stack-PYTHON',
        description:
          'Full Stack Development with Python course equips learners with the skills to build both front-end and back-end components of web applications. Using Python, students explore frameworks like Django and Flask for server-side development, while also learning front-end technologies like HTML, CSS, and JavaScript. The course covers database management with SQL, API development, and best practices in coding, testing, and deployment.',
        imgUrl: 'assets/img/course/details/RMFSD.png',
        bulletPoints: [],
      },
      {
        id: '4',
        title: 'Data Science',
        description:
          'Our Data Science Training at Dezykode IT Solution Pvt. Ltd. equips you with essential skills in data analysis, machine learning, and visualization. Gain hands-on experience with real-world projects, tools like Python, R, and Tableau, and master concepts such as statistics, predictive modeling, and big data handling. Get industry-ready with our professional certification and placement support!',
        imgUrl: 'assets/img/course/details/RMDS.png',
        bulletPoints: [],
      },
      {
        id: '5',
        title: 'Digital Marketing',
        description:
          'Our Digital Marketing Training empowers you with in-demand skills in SEO, social media, Google Ads, email marketing, content strategy, and analytics. Gain hands-on experience, industry insights, and expert guidance to build a successful digital marketing career!',
        imgUrl: 'assets/img/course/details/RMDM.png',
        bulletPoints: [],
      },
      {
        id: '6',
        title: 'Full Stack-JAVA',
        description:
          'Full Stack Development with Java course equips learners with the skills to build both front-end and back-end components of web applications. It covers essential Java technologies such as Spring Boot for back-end development, as well as front-end frameworks like HTML, CSS, JavaScript, and React. Students will learn how to integrate databases, manage APIs, and deploy applications, enabling them to create dynamic, scalable web solutions.',
        imgUrl: 'assets/img/course/details/RMFSD.png',
        bulletPoints: [],
      },
      {
        id: '7',
        title: 'Business Analytics',
        description:
          'Business analytics training equips individuals with the skills and knowledge needed to analyze data, derive insights, and make informed business decisions. It typically covers key areas such as data analysis, statistical techniques, data visualization, predictive modeling, and the use of analytics tools like Excel, SQL, and specialized software such as Tableau or Power BI.',
        imgUrl: 'assets/img/course/details/RMBA.png',
        bulletPoints: [],
      },
      {
        id: '8',
        title: 'MERN-Stack',
        description:
          'The MERN Stack course teaches how to build dynamic web applications using MongoDB, Express.js, React, and Node.js. It covers front-end and back-end development, helping students gain skills in creating full-stack applications with JavaScript..',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/details/RMMERN.png',
        bulletPoints: [],
      },
      {
        id: '9',
        title: 'MEAN-Stack',
        description:
          'The MEAN Stack course teaches the development of full-stack web applications using MongoDB, Express.js, Angular, and Node.js. It covers both front-end and back-end development, providing the skills to build dynamic, responsive, and scalable web applications. Perfect for those looking to master modern web technologies.',
        imgUrl: 'assets/img/course/details/RMMEAN.png',
        bulletPoints: [],
      },
      {
        id: '10',
        title: 'Software Testing',
        description:
          'A software testing course equips learners with essential skills to identify and fix software defects, ensuring quality and reliability. It covers testing methods, tools, and best practices for manual and automated testing in real-world scenarios.',
        imgUrl: 'assets/img/course/details/RMST.png',
        bulletPoints: [],
      },
      // Add more mock course data as needed
    ];

    return courses.find((course) => course.id === id);
  }
}
