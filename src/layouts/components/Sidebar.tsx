"use client";

import { Item, categotys } from "@/features/home/Categorys";
import {
  Box,
  Button,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FormContact } from "./FormContact";

export const Sidebar = ({ sticky }: { sticky?: string }) => {
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky}>
      <Box>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các khóa học
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box
          rounded={"2xl"}
          p="24px"
          bg="radial-gradient(circle, rgba(53,227,170,1) 2%, rgba(0,132,62,1) 100%, rgba(89,227,53,1) 100%)"
        >
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              bg={"white"}
              color={"blue.600"}
              w={"full"}
            >
              Fanpage Tuaf
            </Button>
            <Button
              leftIcon={<FaFacebook />}
              bg={"white"}
              color={"blue.600"}
              w={"full"}
            >
              Group Tuaf
            </Button>
            <Button
              leftIcon={<AiFillYoutube />}
              bg={"white"}
              color={"red.600"}
              w={"full"}
            >
              Youtube Tuaf
            </Button>
            <Button
              leftIcon={<SiZalo />}
              bg={"white"}
              color={"blue.600"}
              w={"full"}
            >
              Group Zalo Tuaf
            </Button>
            <Button leftIcon={<BiLogoTiktok />} bg={"white"} w={"full"}>
              Tiktok Tuaf
            </Button>
            <VStack pt={"24px"} w={"full"}>
              <Text>Liên hệ trực tiếp</Text>
              <Button
                leftIcon={<BsFillTelephoneFill />}
                bg={"white"}
                w={"full"}
              >
                <Link href="tel: 0912345678">0912345678</Link>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box pt={"24px"}>
        <FormContact title="Đăng ký nhận tin" action="Đăng ký" />
      </Box>
    </Box>
  );
};
