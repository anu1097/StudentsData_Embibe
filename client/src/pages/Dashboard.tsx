import React from 'react';
import { CardsDeck } from '../Components/CardsDeck';
import { DashboardControls } from '../Components/DashboardControls';
import styled from 'styled-components';
import { StudentInformation } from '../types/data';

const DashboadDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export default class Dashboard extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      originalData: props.studentInfo,
      studentInfo: props.studentInfo
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  componentDidUpdate() {
    if (this.props.studentInfo !== this.state.originalData) {

      this.setState({
        originalData: this.props.studentInfo,
        studentInfo: this.props.studentInfo,
        reachedBottom: false,
        sortedDataBasedOnTotalMarks: undefined,
        sortedBasedOnName: undefined
      })
    }
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      if (!this.state.reachedBottom) {
        this.setState({
          reachedBottom: true
        })
        this.props.fetchStudentsData();
      }
    }
  };


  filterCardsBasedOnName = (e: any) => {
    let studentInfo = this.state.originalData.filter((data: any) => {
      let res = data.studentName.toLowerCase().includes(e.target.value.toLowerCase());
      return res;
    });
    this.setState({
      studentInfo: studentInfo
    })
  }

  sortByName = () => {
    const { studentInfo, originalData, sortedBasedOnName } = this.state;
    if (sortedBasedOnName) {
      this.setState({
        sortedBasedOnName: !sortedBasedOnName,
        studentInfo: studentInfo.reverse(),
      })
    }
    else {
      const sortedDataBasedOnName = originalData.sort((data1: StudentInformation, data2: StudentInformation) => {
        return (data1.studentName < data2.studentName) ? -1 : 1;
      });
      this.setState({
        sortedBasedOnName: true,
        studentInfo: sortedDataBasedOnName,
        sortedDataBasedOnTotalMarks: undefined
      })
    }
  }

  sortByTotalMarks = () => {
    const { studentInfo, originalData, sortedDataBasedOnTotalMarks } = this.state;
    if (sortedDataBasedOnTotalMarks) {
      this.setState({
        sortedDataBasedOnTotalMarks: !sortedDataBasedOnTotalMarks,
        studentInfo: studentInfo.reverse()
      })
    }
    else {
      const sortedDataBasedOnTotalMarks = originalData.sort((data1: StudentInformation, data2: StudentInformation) => {
        return (this.getTotalMarks(data1) < this.getTotalMarks(data2)) ? -1 : 1;
      });
      this.setState({
        sortedDataBasedOnTotalMarks: true,
        studentInfo: sortedDataBasedOnTotalMarks,
        sortedBasedOnName: undefined
      })
    }
  }

  getTotalMarks = (data: StudentInformation) => {
    let totalMarks = 0;
    let marksInEachSubject: Array<number> = Object.values(data.studentMarks);
    marksInEachSubject.forEach((marks: number) => totalMarks += marks);
    return totalMarks;
  }

  render() {
    if (typeof (Storage) !== "undefined") {
      if (localStorage.getItem("username") === null || localStorage.getItem("password") === null) {
        window.location.assign("/");
      }
    };

    return (
      <DashboadDiv>
        <DashboardControls
          filterCardsBasedOnName={this.filterCardsBasedOnName}
          sortByName={this.sortByName}
          sortByTotalMarks={this.sortByTotalMarks}
          sortedDataBasedOnTotalMarks={this.state.sortedDataBasedOnTotalMarks}
          sortedBasedOnName={this.state.sortedBasedOnName}
        />
        <CardsDeck studentsInfo={this.state.studentInfo} />
      </DashboadDiv >
    );
  }

}