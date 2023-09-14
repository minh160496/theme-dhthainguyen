"use client";

import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Input,
  InputProps,
  Select,
  SelectProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { BtnTheme } from "./BtnTheme";

interface IForm {
  title?: string;
}

export const FormContact = (props: IForm) => {
  const { title } = props;

  const [sucess, setSucess] = useState(false);

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Họ tên là bắt buộc";
    } else if (value?.trim().length < 2) {
      error = "Tên phải lớn hơn 2 ký tự😱";
    }
    return error;
  };

  const validatePhone = (value: string) => {
    const regex = /^(0[3-9]{1}\d{8})|(02[0-9]{1}\d{7,8})$/;
    let error;
    if (!value) {
      error = "Số điện thoại là bắt buộc";
    } else if (!regex.test(value.trim())) {
      error = "Số điện thoại không hợp lệ😱";
    }
    return error;
  };

  const handleSubmit = async (formData: any, actions: any) => {
    const NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL || "";
    try {
      const res = await fetch(NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      actions.setSubmitting(false);
      setSucess(true);
    } catch (error) {
      alert("Đăng ký không thành công, vui lòng thử lại!");
      actions.setSubmitting(false);
      setSucess(false);
    }
  };

  return (
    <Box
      bg={"gray.100"}
      rounded={"sm"}
      px={"24px"}
      py={"24px"}
      h={"max-content"}
    >
      <Heading
        as={"h2"}
        size={"md"}
        textAlign={"center"}
        pb={"24px"}
        color={sucess ? "green.700" : "gray.700"}
      >
        {!sucess && (title || "Tư vấn lộ trình học và ưu đãi")}
        {sucess && "Thành công"}
      </Heading>
      {!sucess && (
        <Formik
          initialValues={{
            name: "",
            phone: "",
            "name-child": "",
            class: "",
            course: "",
            email: "",
            place: "",
          }}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {(props) => (
            <Form>
              <VStack spacing={"12px"}>
                <Field name="name" validate={validateName}>
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        {...field}
                        bg={"white"}
                        type="text"
                        name="name"
                        placeholder="Nhập họ tên bạn..."
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <HStack
                  spacing={"8px"}
                  justify={"space-between"}
                  w={"full"}
                  align={"flex-start"}
                >
                  <Field name="email">
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl flex={1}>
                        <Input
                          {...field}
                          bg={"white"}
                          type="email"
                          name="email"
                          placeholder="Nhập email..."
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone" validate={validatePhone}>
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl
                        isRequired
                        flex={1}
                        isInvalid={form.errors.phone && form.touched.phone}
                      >
                        <Input
                          {...field}
                          bg={"white"}
                          type="tel"
                          name="phone"
                          placeholder="Nhập số điện thoại..."
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <Field name="course">
                  {({ field, form }: { field: SelectProps; form: any }) => (
                    <FormControl>
                      <Select
                        {...field}
                        bg={"white"}
                        placeholder="Chọn ngành học"
                        name="course"
                      >
                        <option>
                          Ngành kinh doanh xuất nhập khẩu nông sản
                        </option>
                        <option>Ngành công nghệ thực phẩm</option>
                        <option>Ngành công nghệ thực phẩm tiếng Anh</option>
                        <option>Ngành nông nghiệp công nghệ cao</option>
                      </Select>
                      <FormErrorMessage>{form.errors?.course}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <BtnTheme
                  isLoading={props.isSubmitting}
                  type="submit"
                  colorScheme="red"
                  w={"full"}
                  mt={"24px"}
                >
                  Giữ chỗ ngay
                </BtnTheme>

                <Text fontSize={".7rem"} fontWeight={"bold"}>
                  * Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm
                  (trong vòng 24h)
                </Text>
              </VStack>
            </Form>
          )}
        </Formik>
      )}

      {sucess && (
        <Center flexDir={"column"}>
          <Image
            priority
            src={"/success-icon.png"}
            width={100}
            height={100}
            alt="Thành công"
          />
          <Text fontWeight={600} color={"green.700"} pt={"16px"}>
            Chúng tôi sẽ liên hệ lại với bạn!
          </Text>
        </Center>
      )}
    </Box>
  );
};
