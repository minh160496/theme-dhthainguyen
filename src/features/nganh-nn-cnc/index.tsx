import { BoxTest } from "@/components/BoxTest";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const NnCnc = () => {
  return (
    <LayoutNganh title="Ngành nông nghiệp công nghệ cao">
      <BoxTest
        title="Tổng quan chương trình"
        list={[
          "Ngành nông nghiệp công nghệ cao đào tạo nhân lực theo định hướng chất lượng cao và liên ngành trong lĩnh vực sản xuất cây trồng nông nghiệp hiện đại",
          "Sinh viên tốt nghiệp ngành Nông nghiệp công nghệ cao có đạo đức nghề nghiệp, kiến thức chuyên môn toàn diện, kỹ năng nghề nghiệp tốt trong lĩnh vực sản xuất cây trồng ứng dụng công nghệ cao, có năng lực tự khởi nghiệp, hội nhập và làm việc trong môi trường quốc tế.",
        ]}
        label="Bắt đầu kiểm tra"
      />
    </LayoutNganh>
  );
};
