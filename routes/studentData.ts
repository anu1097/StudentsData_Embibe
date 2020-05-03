import * as faker from 'faker';

export const studentData = async (req, res) => {
  const fakeStudentData = [];
  const subjects = ['Maths', 'Science', 'Social Studies', 'Languages'];
  for (let i = 0; i < 100; i++) {
    let studentDetails = {};
    studentDetails['studentId'] = faker.random.alphaNumeric(10);
    studentDetails['studentName'] = faker.name.findName();
    studentDetails['studentImage'] = faker.random.image();
    studentDetails['studentMarks'] = {};
    subjects.forEach(subject => {
      studentDetails['studentMarks'][`${subject}`] = faker.random.number(100);
    })
    fakeStudentData.push(studentDetails);
  }
  res.send(fakeStudentData);
}