"use client"
import { AreaChart, Card, Title } from "@tremor/react";

export default function Char(props) { 
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <>
      <div className="w-56 rounded-lg text-tremor-default bg-tremor-background p-2 shadow-xl border border-tremor-border bg-opacity-60">
        {payload[0].payload.rec} <hr className="m-2" />
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`w-1 flex flex-col ${(category.dataKey == "client") ? "bg-blue-500" : "bg-red-500 mt-2"} rounded`}
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
      </>
    );
  };

  const chartdata = [
  ];
  const dat = props.firstClientCaller;
  for(let i= 0; i<dat.length; i++) {
    chartdata.push({rec: dat[i].recD, client: dat[i].clientD, caller: dat[i].callerD});
  }

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
      curveType="monotone"
      customTooltip={customTooltip}
      showXAxis={false}
      showGradient={true}
      stack={false}
    />
  </Card>
  </>
)
}