import { Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import { BtnTheme } from "./BtnTheme";

export const BoxTest = ({
  title1,
  title2,
  label,
  list1,
  list2,
}: {
  title1: string;
  title2?: string;
  label: string;
  list1?: string[];
  list2?: string[];
}) => {
  return (
    <VStack rounded={"2xl"} border={"1px solid teal"} padding={"16px"}>
      <Heading as={"h3"} size={"md"} textAlign={"center"}>
        {title1}
      </Heading>

      <UnorderedList>
        {list1?.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>

      {title2 && (
        <>
          <Heading as={"h3"} size={"md"} textAlign={"center"}>
            {title2}
          </Heading>

          <UnorderedList>
            {list2?.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </>
      )}
      <BtnTheme>{label}</BtnTheme>
    </VStack>
  );
};
