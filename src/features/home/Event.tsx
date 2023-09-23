"use client";

import { CardBlog } from "@/components/CardBlog";
import { HeadSection } from "@/components/HeadSection";
import { Button, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

export const Event = ({ news, notifis }: { news: any[]; notifis: any[] }) => {
  return (
    <Container maxW={"6xl"} py={"64px"}>
      <HeadSection
        title="Tin tức - Thông báo"
        subtitle="tin tức"
        desc="Đừng vội lướt qua những tin tức và thông báo cập nhật từ chúng tôi"
      />
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap={"24px"}>
        {news?.map((post, index) => (
          <CardBlog
            key={index}
            image={post?.featured_image || ""}
            tag="Tin tức"
            bgTag="red.500"
            title={post.title?.rendered || ""}
            desc={post.excerpt?.rendered || ""}
            path={`/tin-tuc/${post.slug}`}
          />
        ))}
        {notifis?.map((post, index) => (
          <CardBlog
            key={index}
            image={post?.featured_image || ""}
            tag="Thông báo"
            bgTag="green.500"
            title={post.title?.rendered || ""}
            desc={post.excerpt?.rendered || ""}
            path={`/tin-tuc/${post.slug}`}
          />
        ))}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button
          as={Link}
          href={"/tin-tuc"}
          colorScheme={"#064121"}
          variant={"link"}
          fontSize={{ base: "md", md: "xl" }}
        >
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
