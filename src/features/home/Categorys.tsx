"use client";

import { CardCat } from "@/components/CardCat";
import { HeadSection } from "@/components/HeadSection";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Item = ({
  path,
  image,
  title,
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image priority width={700} height={400} src={image} alt={title} />
      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const categotys = [
  {
    image: "/xnk.jpg",
    path: "/nganh-kinh-doanh-xuat-nhap-khau-nong-san",
    title: "Kinh doanh xuất nhập khẩu nông sản",
    desc: "Sinh viên được đào tạo ngành Kinh doanh quốc tế về chuyên môn kinh doanh xuất nhập khẩu nông lâm sản, giàu tính thực tiện, đa dạng về kinh nghiệm xử lý tình huống",
  },
  {
    image: "/cntp.jpg",
    path: "/nganh-cong-nghe-thuc-pham",
    title: "Công nghê thực phẩm",
    desc: "Ngành Công nghệ thực phẩm Đào tạo trình độ Đại học theo định hướng chất lượng cao trong lĩnh vực bảo quản và chế biến nông sản",
  },
  {
    image: "/nncnc.jpg",
    path: "/nganh-nong-nghiep-cong-nghe-cao",
    title: "Nông nghiệp công nghê cao",
    desc: "Ngành đào tạo theo định hướng chất lượng cao và liên ngành trong lĩnh vực sản xuất cây trồng nông nghiệp hiện đại",
  },
  {
    image: "/ta.jpg",
    path: "nganh-cong-nghe-thuc-pham-tieng-anh",
    title: "Công nghệ thực phẩm (Tiếng Anh)",
    desc: "Ngoài kiến thức cơ sở và chuyên sâu về lĩnh vực Công nghệ Thực phẩm, sinh viên còn được tiếp cận chương trình tiên được đào tạo bằng tiếng Anh",
  },
];

export const Categorys = () => {
  return (
    <Box py={"48px"}>
      <Container maxW="6xl">
        <HeadSection
          title="Chuyên ngành đào tạo"
          subtitle="major"
          desc="Đào tạo đa ngành, chương trình học tiết kiệm thời gian"
        />
        <SimpleGrid spacing={"8"} columns={{ base: 1, md: 2, lg: 4 }}>
          {categotys.map((categoty, index) => (
            <CardCat
              key={index}
              desc={categoty.desc}
              path={categoty.path}
              title={categoty.title}
              image={`${categoty.image}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
