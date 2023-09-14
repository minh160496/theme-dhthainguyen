"use client";

import { HeadSection } from "@/components/HeadSection";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import CountUp from "react-countup";

interface ICounter {
  start: number;
  end: number;
  subfix: string;
  prefix?: string;
}

export const Counter = (props: ICounter) => {
  const { start, end, subfix, prefix } = props;
  return (
    <CountUp
      enableScrollSpy={true}
      start={start}
      end={end}
      duration={2}
      suffix={prefix || "+"}
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef }) => (
        <Flex justifyContent={"center"} flexDir="column" align={"center"}>
          <span
            style={{
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "bold",
              color: "green",
            }}
            ref={countUpRef}
          />
          <Heading fontSize="lg" color="red.500">
            {subfix}
          </Heading>
        </Flex>
      )}
    </CountUp>
  );
};

const counters = [
  { start: 0, end: 4, suffix: "Ngành học trực tuyến", prefix: "" },
  { start: 0, end: 2000, suffix: "Khóa học" },
  { start: 0, end: 10000, suffix: "Sinh viên theo học" },
  { start: 0, end: 100, suffix: "Học liệu đa phương tiện", prefix: "%" },
];

export const Counters = () => {
  return (
    <Box py={"48px"}>
      <Container maxW="6xl">
        <HeadSection
          title="Những con số ấn tượng"
          subtitle=""
          desc="Cùng xem những con số ấn tượng của chúng tôi trong suốt thời gian vừa qua"
        />
        <SimpleGrid
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          spacing={"8"}
          pt={"24px"}
        >
          {counters.map((counter, index) => (
            <Counter
              key={index}
              start={counter.start}
              end={counter.end}
              subfix={counter.suffix}
              prefix={counter.prefix}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
