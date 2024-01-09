"use client"
import { BarChart, Card, Title } from "@tremor/react";

  const chartdata = [

    {
      name: "Jan",
      "No. of Calls": 1445,
    },
    {
      name: "Feb",
      "No. of Calls": 743,
    },
    {
      name: "Mar",
      "No. of Calls": 281,
    },
    {
      name: "Apr",
      "No. of Calls": 251,
    },
    {
      name: "May",
      "No. of Calls": 232,
    },
    {
      name: "June",
      "No. of Calls": 98,
    },
    {
        name: "July",
        "No. of Calls": 98,
      },
      {
        name: "Aug",
        "No. of Calls": 98,
      },
      {
        name: "Sept",
        "No. of Calls": 98,
      },
      {
        name: "Oct",
        "No. of Calls": 98,
      },
      {
        name: "Nov",
        "No. of Calls": 98,
      },
      {
        name: "Dec",
        "No. of Calls": 98,
      },
  ];

const valueFormatter = (number) => new Intl.NumberFormat("us").format(number).toString();

export default function BarrChart() { 
    return(
  <Card className=" rounded-xl">
    <Title>Volume of Calls Each Month</Title>
    <BarChart
      className="mt-6 "
      data={chartdata}
      index="name"
      categories={["No. of Calls"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  </Card>
)
}