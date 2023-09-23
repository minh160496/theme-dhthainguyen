"use client";

import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { BiHome } from "react-icons/bi";
import { BsPiggyBank } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { motion } from "framer-motion";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactNode;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack
      direction={"row"}
      align={"center"}
      fontSize={{ base: ".8rem", md: "1rem" }}
    >
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
      <Text
        fontWeight={600}
        textShadow={
          "10px 10px 25px rgb(65 121 179), -10px 10px 25px rgb(65 121 179), -10px -10px 25px rgb(65 121 179), 10px -10px 25px rgb(65 121 179);"
        }
      >
        {text}
      </Text>
    </Stack>
  );
};

const MotionBanner = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      {children}
    </motion.div>
  );
};

export const Banner = () => {
  return (
    <Box
      bgImage={"url('/dai_hoc_thai_nguyen.jpg')"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      py={"48px"}
      h={"50vh"}
    >
      <MotionBanner>
        <Container maxW={"4xl"} py={12}>
          {/* <VStack spacing={4} p={"24px"} bg={"white"} >
            <Center>
              <Text
                textTransform={"uppercase"}
                color={"#fc5934"}
                fontWeight={600}
                fontSize={{ base: ".6rem", md: "sm", lg: "lg" }}
                bg={"red.50"}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
                textShadow={
                  "10px 10px 25px rgb(133 48 48 / 86%), -10px 10px 25px rgb(133 48 48 / 86%), -10px -10px 25px rgb(133 48 48 / 86%), 10px -10px 25px rgb(133 48 48 / 86%);"
                }
              >
                Tuyển sinh hệ từ xa E - learning
              </Text>
            </Center>
            <Heading
              as={"h1"}
              color={"blue.900"}
              size={{ base: "md", md: "lg", lg: "2xl" }}
              textShadow={
                "10px 10px 25px rgb(65 121 179), -10px 10px 25px rgb(65 121 179), -10px -10px 25px rgb(65 121 179), 10px -10px 25px rgb(65 121 179);"
              }
              py={"16px"}
            >
              Đại học Thái Nguyên
            </Heading>
            <Text
              color={"blue.900"}
              fontSize={{ base: "sm", lg: "md" }}
              fontWeight={600}
              textAlign={"center"}
              textShadow={
                "10px 10px 25px rgb(65 121 179), -10px 10px 25px rgb(65 121 179), -10px -10px 25px rgb(65 121 179), 10px -10px 25px rgb(65 121 179);"
              }
            >
              Chương trình tuyển sinh đại học từ xa Đại học Thái Nguyên - Sở hữu
              bằng Đại học tương đương hệ chính quy ngay tại nhà
            </Text>
            <Stack
              pt={"12px"}
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
          </VStack> */}
        </Container>
      </MotionBanner>
    </Box>
  );
};
