"use client";

import { CardBlog } from "@/components/CardBlog";
import {
  Box,
  Button,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

export const SamePosts = ({ postsCat }: { postsCat: any[] }) => {
  return (
    <>
      <Divider pt={"32px"} />
      <Box pt={"20px"}>
        <HStack justifyContent={"space-between"} pb={"16px"}>
          <Heading as={"h3"} size={"md"}>
            Có thể bạn quan tâm
          </Heading>
          <Button
            as={Link}
            href={"/tin-tuc"}
            variant={"link"}
            colorScheme="red"
          >
            Xem tất cả
          </Button>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={"20px"}>
          {postsCat.map((postCat, index) => {
            if (index < 3)
              return (
                <GridItem key={index}>
                  <CardBlog
                    title={postCat.title.rendered}
                    desc=""
                    image={postCat?.featured_image || ""}
                    path={postCat.slug}
                  />
                </GridItem>
              );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
