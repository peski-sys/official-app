"use client"
import { AreaChart, Card, Title } from "@tremor/react";

export default function Char() { 
  const chartdata = [
    {
      date: "Rec. 1",
      Client: 15,
      "Caller": 21,
    },
    {
      date: "Rec. 2",
      Client: 10,
      "Caller": 12,
    },
    {
      date: "Rec. 3",
      Client: 35,
      "Caller": 30,
    },
    {
      date: "Rec. 4",
      Client: 20,
      "Caller": 60,
    },
    {
      date: "Rec. 5",
      Client: 22,
      "Caller": 15,
    },
  ];
  
  const valueFormatter = function(number) {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <>
  <Card className=" max-w-6xl rounded-xl m-auto outline-none shadow-xl text-sm">
  <Title>Interaction time between Caller and Client (in mins)</Title>
  <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      showAnimation="true"
      index="date"
      categories={["Client", "Caller"]}
      colors={["blue", "red"]}
      valueFormatter={valueFormatter}
    />
  </Card>
  </>
)
}