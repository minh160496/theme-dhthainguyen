import { TextScroll } from "@/components/TextScroll";

export const TextScrollHomePage = () => {
  const listInf = [
    "Lịch khai giảng tại Hà Nội: 15/10",
    "Lịch khai giảng tại Thái Nguyên: 08/10",
    "Lịch khai giảng tại Hồ Chí Minh: 01/10",
    "Lịch khai giảng tại Đà Nẵng: 09/10",
  ];
  return <TextScroll list={listInf} />;
};
