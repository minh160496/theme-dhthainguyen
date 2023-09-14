import { FormContact } from "@/components/FormContact";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";

export const LichKg = () => {
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
            Lịch khai giảng tuaf - e learning
          </Heading>
        </Container>
      </Box>
      <Box>
        <Container maxW={"6xl"} py="120px">
          <Grid placeItems={"center"}>
            <FormContact title="Để lại thông tin nhận lich khai giảng" />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
