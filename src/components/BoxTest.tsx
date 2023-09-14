import { Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import { BtnTheme } from "./BtnTheme";

export const BoxTest = ({
  title,

  label,
  list,
}: {
  title: string;

  label: string;
  list?: string[];
}) => {
  return (
    <VStack rounded={"2xl"} border={"1px solid teal"} padding={"16px"}>
      <Heading as={"h3"} size={"md"} textAlign={"center"}>
        {title}
      </Heading>
      <UnorderedList>
        {list?.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
      <BtnTheme>{label}</BtnTheme>
    </VStack>
  );
};
