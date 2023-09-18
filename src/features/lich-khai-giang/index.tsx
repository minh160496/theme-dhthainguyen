import { BoxTest } from "@/components/BoxTest";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const LichKg = () => {
  return (
    <LayoutNganh title="Lịch khai giảng Đại học Thái Nguyên - E learning">
      <BoxTest
        title1="Cập nhật lịch khai giảng dự kiến"
        list1={[
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
