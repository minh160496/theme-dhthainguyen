"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Image from "next/image";
import { ReactNode } from "react";
import { BiHome } from "react-icons/bi";
import { BsPiggyBank } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactNode;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const Banner = () => {
  return (
    <Box
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
      py={"48px"}
    >
      <Container maxW={"6xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"#fc5934"}
              fontWeight={600}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              bg={"red.50"}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Tuyển sinh hệ từ xa E - learning
            </Text>
            <Heading>Đại học Thái Nguyên</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Chương trình tuyển sinh đại học từ xa Đại học Thái Nguyên - Sở hữu
              bằng Đại học tương đương hệ chính quy ngay tại nhà
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon as={BsPiggyBank} color={"yellow.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Tiết kiệm thời gian"}
              />
              <Feature
                icon={<Icon as={BiHome} color={"green.500"} w={5} h={5} />}
                iconBg={"green.100"}
                text={"Học online tại nhà"}
              />

              <Feature
                icon={<Icon as={PiCertificate} color={"#fc5934"} w={5} h={5} />}
                iconBg={"#fc593473"}
                text={"Bằng cử nhân do Bộ Giáo dục và đào tạo công nhận"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              alt={"feature image"}
              src={"/banner-3.png"}
              width={700}
              height={500}
              priority
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
