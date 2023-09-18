"use client";

import {
  Box,
  Container,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FormContact } from "../../components/FormContact";
import styles from "@/styles/Home.module.css";

const HeadSection = ({
  subtitle,
  title,
  desc,
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"}>
      <Text color={"#FA692E"}>{subtitle}</Text>
      <Heading
        as={"h2"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"whiteAlpha.900"}
      >
        {title}
      </Heading>
      <Text color={"whiteAlpha.900"} fontWeight={"sm"}>
        {desc}
      </Text>
    </VStack>
  );
};

const lists = [
  "KHÔNG phải thi đầu vào, chỉ xét tuyển hồ sơ",
  "KHÔNG phải đến trường, học online mọi lúc mọi nơi",
  "TIẾT KIỆM chi phí, chủ động thời gian học tập",
  "Tốt nghiệp THPT là đủ điều kiện đăng ký, rút ngắn thời gian khi đã có bằng ĐH, CĐ",
  "BẲNG ĐỎ được Bộ GD&ĐT công nhận, có giá trị toàn quốc",
  "Đủ điều kiện học lên cao học, xét bậc lương, thi công chức theo đúng quy định",
];

export const Contact = () => {
  return (
    <Box
      pos={"relative"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Container
        maxW={"6xl"}
        py={"60px"}
        pos={"absolute"}
        top={0}
        left={"50%"}
        transform={"translateX(-50%)"}
        className="context"
      >
        <HeadSection
          title="Tuyển sinh"
          subtitle="Contact"
          desc="Đại học năm 2023"
        />
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"24px"} pt={"24px"}>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Box color={"white"}>
              <List
                spacing={"18px"}
                border={"1px solid"}
                borderColor={"gray.400"}
                p={{ base: "12px", md: "16px" }}
                rounded={"sm"}
              >
                {lists.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon
                      as={AiFillStar}
                      w={"24px"}
                      h={"24px"}
                      color={"orange.400"}
                    />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </GridItem>

          <GridItem>
            <FormContact title="Đăng ký học" />
          </GridItem>
        </SimpleGrid>
      </Container>

      {/* Animate  */}
      <Box className={styles["area"]} bg={"blue.900"} w={"100%"}>
        <List className={styles["circles"]}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </Box>
    </Box>
  );
};
