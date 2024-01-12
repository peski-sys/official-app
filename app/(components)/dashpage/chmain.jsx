"use client"
import { AreaChart, Card, Title } from "@tremor/react";

export default function Char(props) { 
  const chartdata = [
  ];
  const dat = props.firstClientCaller;
  for(let i= 0; i<dat.length; i++) {
    chartdata.push({rec: dat[i].recD, client: dat[i].clientD, caller: dat[i].callerD});
  }

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
      showAnimation
      index="rec"
      categories={["client", "caller"]}
      colors={["blue", "red"]}
      valueFormatter={valueFormatter}
    />
  </Card>
  </>
)
}