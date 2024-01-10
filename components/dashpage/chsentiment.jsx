"use client"
import { AreaChart, Card, Title } from "@tremor/react";

export default function CharSentiment() { 
  const chartdata = [
    {
      date: "Rec. 1",
      Score: 0.4,
    },
    {
      date: "Rec. 2",
      Score: 0.2,
    },
    {
      date: "Rec. 3",
      Score: 0.78,
    },
    {
      date: "Rec. 4",
      Score: 0.88,
    },
    {
      date: "Rec. 5",
      Score: 0.55,
    },
  ];
  
  const valueFormatter = function(number) {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <>
  <Card className=" max-w-6xl rounded-xl m-auto outline-none shadow-xl text-sm">
  <Title>Sentiment Score of Client per Recording (1 being Highest)</Title>
  <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      showAnimation
      index="date"
      categories={["Score"]}
      colors={["red"]}
      valueFormatter={valueFormatter}
    />
  </Card>
  </>
)
}