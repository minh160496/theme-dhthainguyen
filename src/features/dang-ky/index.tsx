import { FormContact } from "@/components/FormContact";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";

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
            Đăng ký học từ xa tại Đại học Nông lâm
          </Heading>
        </Container>
      </Box>
      <Box>
        <Container maxW={"6xl"} py="120px">
          <Grid placeItems={"center"}>
            <FormContact title="Vui lòng điền thông tin" />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
