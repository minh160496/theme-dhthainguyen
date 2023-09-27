import { BoxTest } from "@/components/BoxTest";
import { Loading } from "@/components/Loading";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const LichKg = ({
  list,
  isLoading,
}: {
  list: string[];
  isLoading: boolean;
}) => {
  return (
    <LayoutNganh title="Lịch khai giảng Đại học Thái Nguyên - E learning">
      {!isLoading && (
        <BoxTest
          title1="Cập nhật lịch khai giảng dự kiến"
          list1={list}
          label="Đăng ký tư vấn"
        />
      )}

      {isLoading && <Loading he="10vh" />}
    </LayoutNganh>
  );
};
