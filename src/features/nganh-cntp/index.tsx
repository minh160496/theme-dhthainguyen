import { BoxTest } from "@/components/BoxTest";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Cntp = () => {
  return (
    <LayoutNganh>
      <BoxTest
        title="Tổng quan chương trình"
        list={[
          "Là ngành đào tạo về Công nghệ Thực phẩm đầu tiên của miền Bắc đạt chứng nhận kiểm định AUN-QA (ASEAN University Network – Quality Assurance)",
          "Ngành Công nghệ thực phẩm Đào tạo trình độ Kỹ sư theo định hướng chất lượng cao trong lĩnh vực Công nghệ Thực phẩm. Kỹ sư Công nghệ Thực phẩm được đào tạo có đạo đức nghề nghiệp, kiến thức chuyên môn toàn diện. Nắm vững các nguyên tắc và quy luật của tự nhiên-xã hội, có kỹ năng thực hành, khả năng làm việc độc lập, sáng tạo và giải quyết vấn đề trong ngành Thực phẩm, có năng lực hội nhập và làm việc trong môi trường quốc tế.",
        ]}
        label="Bắt đầu kiểm tra"
      />
    </LayoutNganh>
  );
};
