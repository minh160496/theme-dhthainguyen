import { BoxTest } from "@/components/BoxTest";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Lkt = () => {
  return (
    <LayoutNganh title="Ngành luật kinh tế">
      <BoxTest
        title1="Tổng quan chương trình"
        list1={[
          "Chương trình đào tạo trực tuyến ngành Luật Kinh tế cung cấp cho sinh viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật, đồng thời chuyên sâu hơn trong lĩnh vực luật kinh doanh thương mại để giải quyết các vấn đề pháp lý trong công việc và cuộc sống. Sinh viên cũng được trang bị kiến thức bổ trợ về kinh tế, quản trị, kế toán để phục vụ cho nghề nghiệp. Bên cạnh đó, sinh viên được rèn luyện các kỹ năng áp dụng pháp luật, thực hành nghề nghiệp, tư duy phản biện và được bồi dưỡng hình thành thái độ văn hóa ứng xử pháp lý và tuân thủ pháp luật",
        ]}
        title2="Nghề nghiệp"
        list2={[
          "Luật sư",
          "Nhân viên văn phòng công chứng",
          "Chấp hành viên",
          "Thẩm tra viên",
          "Chuyên viên tư vấn pháp luật tại các doanh nghiệp",
          "Chuyên viên nghiên cứu hành pháp, lập pháp và tư pháp tại các cơ quan nhà nước",
          "Giảng viên Luật kinh tế",
        ]}
        label="Đăng ký tư vấn"
      />
    </LayoutNganh>
  );
};
