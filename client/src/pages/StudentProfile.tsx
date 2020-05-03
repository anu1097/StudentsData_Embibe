import React from 'react';
import { StudentInformation } from '../types/data';
import styled from 'styled-components';
import Card from '../Components/Card';
import { BarGraph } from '../Components/BarGraph';

const StudentProfilePage = styled.div`
display: flex;
border-radius: 5px;
padding: 0.5em;
margin: 1em;
justify-content: space-evenly;
`;

interface Props {
  studentInformation: StudentInformation
}

export const StudentProfile = (props: Props) => {
  const { studentInformation } = props;
  return (
    <StudentProfilePage>
      <BarGraph studentMarks={studentInformation.studentMarks} />
      <Card studentInformation={studentInformation} />
    </StudentProfilePage>
  )
}