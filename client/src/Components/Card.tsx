import React from 'react';
import styled from 'styled-components';
import { StudentInformation } from '../types/data';

const StudentCard = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
border: 2px solid black;
padding: 0.5em;
margin: 1em;
min-width: 15em;
max-width: 15em;
min-height: 25em;
max-height: 25em;
align-items: center;
justify-content: space-evenly;
`;

const StudentImage = styled.img`
display: flex;
margin: 10px;
padding: 10px;
border: 1px solid;
max-width: 10em;
min-width: 10em;
max-height: 10em;
min-height: 10em;
float: left;
border-radius: 50%;
`

interface Props {
  studentInformation: StudentInformation
};

const Card = (props: Props) => {
  const { studentName, studentId, studentMarks, studentImage } = props.studentInformation;
  let totalMarks = 0;
  if (studentMarks) {
    let marksInEachSubject: Array<number> = Object.values(studentMarks);
    marksInEachSubject.forEach((marks: number) => totalMarks += marks);
  }

  return (
    <StudentCard>
      <StudentImage src={studentImage} />
      <div><b>Name:</b> {studentName}</div>
      <div><b>Student Id:</b> {studentId}</div>
      <div><b>Total Marks:</b> {totalMarks}/400</div>
    </StudentCard>
  )
}

export default Card;