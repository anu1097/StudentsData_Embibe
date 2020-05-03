import React from 'react';
import BarChart from 'react-bar-chart';

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

interface dataPoint {
  text: string,
  value: number,
}

export class BarGraph extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      width: 500,
      data: this.convertRawData()
    };
  }

  convertRawData = () => {
    let data: any = [];
    const { studentMarks } = this.props;
    let subjects = Object.keys(studentMarks);
    subjects.forEach((subject: any) => {
      let dataPoint: any = {};
      dataPoint.text = subject;
      dataPoint.value = studentMarks[`${subject}`];
      data.push(dataPoint);
    })
    return data;
  }

  render() {
    return (
      <div ref='root'>
        <div>
          <BarChart ylabel='Marks'
            width={this.state.width}
            height={500}
            margin={margin}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}