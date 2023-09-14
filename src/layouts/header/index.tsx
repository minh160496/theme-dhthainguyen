"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { FormContact } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { Box, Container, Divider, Flex, useDisclosure } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";

export const Header = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Container maxW="6xl" py="6px">
        <HeaderTop hasSearch />
      </Container>
      <Divider />
      <Box
        boxShadow="md"
        pos={"sticky"}
        top={"0"}
        left={0}
        right={0}
        zIndex={10}
        bg={"white"}
      >
        <Container
          as={Flex}
          bg={"white"}
          color={"gray.600"}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          maxW="6xl"
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <MobileNav />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "start" }}
            align={"center"}
          >
            <Logo />
            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <BtnTheme
            colorScheme="red"
            size={{ base: "sm", md: "lg" }}
            onClick={onToggle}
          >
            Đăng ký học
          </BtnTheme>
        </Container>
      </Box>
      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormContact />
      </ModalBase>
    </>
  );
};
