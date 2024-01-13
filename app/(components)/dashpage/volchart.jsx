"use client"
import { BarChart, Card, Title } from "@tremor/react";

export default function BarrChart(props) { 
  const chartdata = [

    {
      name: "Jan",
      "No. of Calls": 0,
    },
    {
      name: "Feb",
      "No. of Calls": 0,
    },
    {
      name: "Mar",
      "No. of Calls": 0,
    },
    {
      name: "Apr",
      "No. of Calls": 0,
    },
    {
      name: "May",
      "No. of Calls": 0,
    },
    {
      name: "June",
      "No. of Calls": 0,
    },
    {
        name: "July",
        "No. of Calls": 0,
      },
      {
        name: "Aug",
        "No. of Calls": 0,
      },
      {
        name: "Sept",
        "No. of Calls": 0,
      },
      {
        name: "Oct",
        "No. of Calls": 0,
      },
      {
        name: "Nov",
        "No. of Calls": 0,
      },
      {
        name: "Dec",
        "No. of Calls": 0,
      },
  ];

  const corrIndex = {
    "Jan":0,
    "Feb":1,
    "Mar":2,
    "Apr":3,
    "May":4,
    "June":5,
    "July":6,
    "Aug":7,
    "Sept":8,
    "Oct":9,
    "Nov":10,
    "Dec":11
  }
  let monn = props.monthData;
  for(let i=0; i<monn.length; i++) {
    let nameGet = monn[i];  
    let thatIndex = corrIndex[nameGet.dateD];
    chartdata[thatIndex]["No. of Calls"]++;
  }

const valueFormatter = (number) => new Intl.NumberFormat("us").format(number).toString();
    return(
<Card className=" rounded-xl">
    <Title>Volume of Calls Each Month</Title>
    <BarChart
    className="mt-6"
    showAnimation
    data={chartdata}
    index="name"
    categories={["No. of Calls"]}
    valueFormatter={valueFormatter}
    yAxisWidth={48}
    />
</Card>
)
}