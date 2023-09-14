import { BoxTest } from "@/components/BoxTest";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Kdxnk = () => {
  return (
    <LayoutNganh title="Ngành kinh doanh xuất nhập khẩu nổng sản">
      <BoxTest
        title="Tổng quan chương trình"
        list={[
          "Xuất nhập khẩu là một trong những lĩnh vực kinh doanh hàng đầu đang được nhà nước ta ưu tiên đẩy mạnh. Đây là một lợi thế cực lớn đối với sinh viên XNK, mở rộng cơ hội việc làm với mức thu nhập khủng",
          "Ngành Kinh doanh xuất nhập khẩu Nông Lâm sản yêu cầu các bên tuân thủ nghiêm ngặt các nguyên tắc quốc tế trong mua bán hàng hoá. Chính vì thế, XNK là ngành nghề có tính đặc thù cao",
        ]}
        label="Bắt đầu kiểm tra"
      />
    </LayoutNganh>
  );
};
