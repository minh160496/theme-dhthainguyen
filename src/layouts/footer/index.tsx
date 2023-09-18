"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { InputRes } from "../../components/InputRes";
import { Logo } from "../components/Logo";
import { ModalBase } from "@/components/Modal";
import { FormGetFly } from "@/components/FormContact";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box bg={"#054659"} color={"White"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Flex justify="center" align={"center"} direction="column" mb="32px">
            <Heading size="md" textAlign="center" mb={4}>
              Đăng ký nhận bản tin
            </Heading>
            <Box maxW="md">
              <InputRes
                placeholder="Nhập email để đăng ký"
                label="Đăng ký"
                onClick={onToggle}
              />
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Thông tin liên hệ</ListHeader>
              <Box as={Link} href={"#"}>
                Đại học Thái nguyên - trạm tuyển sinh AUM
              </Box>
              <Box as={Link} href={"tel:0914709118"}>
                Hotline: 0914709118
              </Box>
              <Box as={Link} href={"mailto:daihoctructuyen@tnu.edu.vn"}>
                Email: daihoctructuyen@tnu.edu.vn
              </Box>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Hỗ trợ</ListHeader>
              <Box as={Link} href={"/gioi-thieu"}>
                Về chúng tôi
              </Box>
              <Box as={Link} href={"/lich-khai-giang"}>
                Lịch khai giảng
              </Box>
              <Box as={Link} href={"/dang-ky"}>
                Đăng ký
              </Box>
              <Box as={Link} href={"/tin-tuc"}>
                Tin tức
              </Box>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Nhận diện</ListHeader>
              <Logo />
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Mạng xã hội</ListHeader>
              <Stack direction={"row"} spacing={6}>
                <SocialButton
                  label={"Twitter"}
                  href={"https://www.facebook.com/groups/vsteponline"}
                >
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaTiktok />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormGetFly title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};
