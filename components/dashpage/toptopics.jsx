import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";

const data = [
  {
    name: "Topic 1",
    value: 456,
  },
  {
    name: "Topic 2",
    value: 351,
  },
  {
    name: "Topic 3",
    value: 271,
  },
  {
    name: "Topic 4",
    value: 191,
  },
  {
    name: "Topic 5",
    value: 91,
  },
];

export default function topics(){ 
    return (
        <>
  <Card className="rounded-xl items-center justify-center">
    <Title>Top Keywords Analytics</Title>
    <Flex className="mt-4">
      <Text>
        <Bold>Topics</Bold>
      </Text>
      <Text>
        <Bold>Calls</Bold>
      </Text>
    </Flex>
    <BarList data={data} className="mt-2"/>
  </Card>
  </>
)
}