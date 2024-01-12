"use client"
import { AreaChart, Card, Title } from "@tremor/react";

export default function CharSentiment(props) {
  const chartdata = [
  ];
  const dat = props.firstSentiment;
  for(let i=0; i<dat.length; i++) {
    chartdata.push( {rec: dat[i].recD, score: dat[i].scoreD} );
  }
  
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
      index="rec"
      categories={["score"]}
      colors={["red"]}
      valueFormatter={valueFormatter}
    />
  </Card>
  </>
)
}