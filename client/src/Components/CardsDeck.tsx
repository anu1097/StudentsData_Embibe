import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { StudentInformation } from '../types/data';
import { Link } from 'react-router-dom';

const CardsList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const CardsDeck = (props: any) => {
  const cards: any = [];
  if (props.studentsInfo !== []) {
    props.studentsInfo.forEach((info: StudentInformation) => {
      let to = "/" + info.studentId;
      cards.push(
        <Link to={to} key={info.studentId}>
          <Card studentInformation={info} />
        </Link>
      )
    });
  }

  return (
    <CardsList>
      {cards}
    </CardsList>
  )

}