const teachers = ['Arrington', 'Kincart', 'Alberts', 'Pickett'];

const rooms = [
  ['Andy', 'Rodolfo', 'Lynn', 'Talia'],
  ['Al', 'Ross', 'Jorge', 'Dante'],
  ['Nick', 'Kim', 'Jasmine', 'Dorothy'],
  ['Adam', 'Grayson', 'Aliyah', 'Alexa'],
];

// List all the teachers with an even index number (including 0)

const evenIndex = () => teachers.filter((teacher, index) => (index % 2 === 0));

evenIndex();

// List all of the teachers with the letter i in their name

const iInName = () => teachers.filter(teacher => teacher.includes('i'));

iInName();

// Return the number of teachers

const teacherCount = () => teachers.length;

console.log(teacherCount());

// Return the number of rooms of students

const roomCount = () => rooms.length;

console.log(roomCount());

// Return the number of students in all the rooms

const studentCount = () => rooms.reduce((acc, curr) => acc + curr.length, 0);

console.log(studentCount());

// Return the students who have an i in their names

const whichStudents = () => rooms.map(room => room.filter(student => student.includes('i')));

console.log(`The students who have an 'i' in their name are ${whichStudents()}.`);

// Return the teacher who has the given student in their room

const whichTeacher = (student) => {
  for (let room = 0; room < rooms.length; room += 1) {
    if (rooms[room].includes(student)) {
      return teachers[room];
    }
  }
};

console.log(`The teacher who has Jorge is ${whichTeacher('Jorge')}.`);
console.log(`The teacher who has Alexa is ${whichTeacher('Alexa')}.`);
