import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.css',
})
export class UiUxComponent {
  courseId!: string;
  courseDetails: any;

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
        imgUrl: 'assets/img/course/details/RMUIUX.png',
      },
      // Add more mock course data as needed
    ];

    return courses.find((course) => course.id === id);
  }
}
