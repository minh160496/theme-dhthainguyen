"use client";

import { Contact } from "@/features/home/Contact";
import { Counters } from "@/features/home/Counters";
import { Box, Container, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutNganh = ({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) => {
  return (
    <>
      <Box bg="radial-gradient(circle, rgba(0,132,62,1) 37%, rgba(89,227,53,1) 100%, rgba(252,89,52,1) 100%)">
        <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            {title || "Ngành công nghệ thực phẩm"}
          </Heading>
        </Container>
      </Box>
      <Box>
        <Container maxW={"6xl"} py="120px">
          {children}
        </Container>
        <Contact />
        <Counters />
      </Box>
    </>
  );
};
