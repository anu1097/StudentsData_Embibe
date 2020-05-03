import React from 'react';
import styled, { css } from 'styled-components';

const InputControls = styled.div`
display: flex;
align-items: center;
margin: 0.5em;
width: 50%;
`
const SearchBar = styled.input`
flex-grow: 1;
width: 20em;
margin: 0.5em;
padding: 0.5em;
border-radius: 5px;
`
const Button = styled.button<Custom>`
margin: 0.5em;
padding: 0.5em;
border-radius: 5px;
${(props: any) => props.sortedBasedOnName !== undefined && css`
background: yellow;
color: palevioletred;
`}

${(props: any) => props.sortedDataBasedOnTotalMarks !== undefined && css`
background: yellow;
color: palevioletred;
`}
`

type Custom = {
  sortedBasedOnName?: any,
  sortedDataBasedOnTotalMarks?: any
};

export const DashboardControls = (props: any) => {
  const { filterCardsBasedOnName, sortByName, sortedBasedOnName, sortByTotalMarks, sortedDataBasedOnTotalMarks } = props;

  const appendSortingSymbol = (flag: boolean) => {
    if (flag !== undefined) {
      return flag ? <b>&uarr;</b> : <b>&darr;</b>
    }
    else return '';
  }

  return (
    <InputControls>
      <SearchBar onChange={filterCardsBasedOnName} type='text' placeholder='Search Using Name of Student' />
      <Button onClick={sortByName} sortedBasedOnName={sortedBasedOnName}>
        Sort By Name {appendSortingSymbol(sortedBasedOnName)}
      </Button>
      <Button onClick={sortByTotalMarks} sortedDataBasedOnTotalMarks={sortedDataBasedOnTotalMarks}>
        Sort By Total Marks {appendSortingSymbol(sortedDataBasedOnTotalMarks)}
      </Button>
    </InputControls >
  )
}