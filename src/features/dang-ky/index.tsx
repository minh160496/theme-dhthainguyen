import { FormGetFly2 } from "@/components/FormContact";
import { Box, Container, Heading } from "@chakra-ui/react";

export const Dangky = () => {
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
            Đăng ký học từ xa tại Đại học Thái Nguyên
          </Heading>
        </Container>
      </Box>
      <Box bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}>
        <Container maxW={"6xl"} py="120px">
          <FormGetFly2 title="Vui lòng điền thông tin" />
        </Container>
      </Box>
    </>
  );
};
