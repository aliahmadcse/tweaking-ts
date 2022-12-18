interface BaseCourse {
  name: string;
}

interface FreeCourse extends BaseCourse {
  youtube: string;
  price?: never;
}

interface PaidCourse extends BaseCourse {
  price: number;
  youtube?: never;
}


type Course = FreeCourse | PaidCourse;


const course: Course = {
  name: 'TypeScript',
  youtube: 'https://www.youtube.com/watch?v=1'
};
