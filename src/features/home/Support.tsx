import { HeadSection } from "@/components/HeadSection";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { GiSpookyHouse } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const accSupport = [
  {
    icon: <GiSpookyHouse />,
    title: "Sở hữu Bằng Đại học uy tín",
    content:
      "Bằng Kỹ sư không ghi hình thức đào tạo và được Bộ Giáo dục công nhận, Có giá trị sử dụng trọn đời",
  },
  {
    icon: <BiSupport />,
    title: "Đội ngũ tư vấn 24/7",
    content: "Tư vấn 24/7, hỗ trợ học tập và kỹ thuật nhanh chóng - tận tình",
  },
  {
    icon: <SlCalender />,
    title: "Thời gian đào tạo",
    content:
      "Thời gian đào tạo từ 2 - 4,5 năm giúp người học có thể học vượt để rút ngắn thời gian học tập theo quy định đào tạo tín chỉ.",
  },

  {
    icon: <MdOutlineLocalShipping />,
    title: "Kho học liệu hoàn toàn miễn phí",
    content:
      "Tài liệu học tập đa Phương tiện (video, slide, script,...), giáo trình do trường Đại học Nông Lâm Thái Nguyên biên soạn",
  },
];

export const AccSupport = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accSupport.map((acc, index) => (
        <AccordionItem
          border={"none"}
          key={index}
          py={"12px"}
          color={"red.700"}
        >
          <AccordionButton bg={"gray.50"} py="16px" rounded={"md"}>
            <Box flex="1" textAlign="left">
              <HStack>
                {acc.icon}
                <Heading
                  fontSize={{ base: "sm", md: "md" }}
                  color={"green.900"}
                >
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} color={"green.900"}>
            {acc.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Support = () => {
  return (
    <Box
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #00843e3d 100%)"}
      py={"48px"}
    >
      <Container maxW={"6xl"}>
        <HeadSection
          title="Hỗ trợ của chúng tôi"
          subtitle="support"
          desc="Đại học nông lâm hỗ trợ bạn nhiều lợi ích"
        />
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"36px"} pt={"24px"}>
          <GridItem>
            <Image
              src={`/support.png`}
              alt="Kết hợp online và oflinet"
              width={600}
              height={400}
              style={{ borderRadius: "12px" }}
            />
            <Text fontWeight={"bold"} textAlign={"center"}>
              Hỗ trợ của tuaf
            </Text>
          </GridItem>
          <GridItem>
            <AccSupport />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
