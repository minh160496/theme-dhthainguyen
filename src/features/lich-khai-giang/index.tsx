import { FormContact } from "@/components/FormContact";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { LayoutNganh } from "@/layouts/layoutNganh";
import { BoxTest } from "@/components/BoxTest";

export const LichKg = () => {
  return (
    <LayoutNganh title="Lịch khai giảng Đại học Thái Nguyên - E learning">
      <BoxTest
        title="Cập nhật lịch khai giảng dự kiến"
        list={[
          "Tại Hà Nội: 15/10",
          "Tại Thái Nguyên: 08/10",
          "Tại Hồ Chí Minh: 01/10",
          "Tại Đà Nẵng: 09/10",
        ]}
        label="Đăng ký tư vấn"
      />
    </LayoutNganh>
  );
};
