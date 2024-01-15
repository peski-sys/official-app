"use client"
import { AreaChart, Card, Title } from "@tremor/react";

export default function CharSentiment(props) {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-lg text-tremor-default bg-tremor-background p-2 shadow-xl border border-tremor-border">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`w-1 flex flex-col bg-red-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

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
      customTooltip={customTooltip}
    />
  </Card>
  </>
)
}