import { BoxTest } from "@/components/BoxTest";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const CntpTa = () => {
  return (
    <LayoutNganh title="Ngành công nghệ thực phẩm tiếng Anh">
      <BoxTest
        title="Tổng quan chương trình"
        list={[
          "Ngành Công nghệ Thực phẩm cung cấp kiến thức cơ sở và chuyên sâu về lĩnh vực Công nghệ Thực phẩm giúp sinh viên có khả năng tổ chức, lập kế hoạch sản xuất, quản lý sản xuất và phụ trách về kỹ thuật, công nghệ trong các nhà máy chế biến thực phẩm; phân tích và đánh giá chỉ tiêu hóa lý, vi sinh, hóa sinh của các sản phẩm thực phẩm; xây dựng bố trí các mô hình thí nghiệm, kiểm định vệ sinh an toàn thực phẩm; có kiến thức về phương pháp nghiên cứu, lập dự án, quản lý và điều hành các dự án liên quan đến lĩnh vực Công nghệ Thực phẩm.",
          "Ngoài ra, sinh viên tốt nghiệp từ Chương trình tiên tiến còn có năng lực tiếng Anh vượt trội do chương trình học được giảng dạy hoàn toàn bằng tiếng Anh; Có cơ hội học tập trong môi trường quốc tế với sinh viên đến từ các quốc gia như: Úc, Pháp, Hàn Quốc, Philippines, Indonesia…;",
          "Đội ngũ giáo viên giảng dạy Chương trình tiên tiến ngành Công nghệ Thực phẩm đều được đào tạo Thạc sĩ, Tiến sĩ ở nước ngoài giàu chuyên môn",
        ]}
        label="Bắt đầu kiểm tra"
      />
    </LayoutNganh>
  );
};
