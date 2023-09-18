"use client";

import { FormGetFly2 } from "@/components/FormContact";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
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
      <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
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
        <Box
          bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
        >
          <Container maxW={"6xl"} py="120px">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"24px"}>
              <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
              <GridItem>
                <FormGetFly2 />
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
