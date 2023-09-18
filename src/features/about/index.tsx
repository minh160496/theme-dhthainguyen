"use client";

import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const About = () => {
  return (
    <Box>
      <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
        <Container maxW={"6xl"} py="60px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            Giới thiệu Đại học Thái Nguyên
          </Heading>
        </Container>
      </Box>

      <Container maxW={"6xl"} py="60px">
        <Heading as="h1" textAlign={"center"} size={"lg"} pb="16px">
          Chào mừng các bạn đến với Trường Đại học Thái Nguyên
        </Heading>
        <Text>
          Trường Đại học Thái Nguyên (Thai Nguyen University of Agriculture and
          Forestry – TUAF) được thành lập năm 1969, hiện nay là một đơn vị thành
          viên của Đại học Thái Nguyên. Trải qua 52 năm xây dựng và phát triển,
          Trường Đại học Thái Nguyên trở thành một trung tâm đào tạo và chuyển
          giao khoa học – công nghệ hàng đầu Việt Nam về nông, lâm nghiệp, quản
          lý tài nguyên, môi trường và phát triển nông thôn cho các tỉnh trung
          du, miền núi phía Bắc Việt Nam.
        </Text>
        <Grid placeItems={"center"} py={"24px"}>
          <Image
            src={"/truong-dai-hoc-nong-lam-thai-nguyen.jpg"}
            alt="Đại học Thái Nguyên"
            width={600}
            height={436}
          />
          <Text fontWeight={"bold"}>Trường Đại học Thái Nguyên</Text>
        </Grid>
        <Text>
          Trường Đại học Thái Nguyên (Thai Nguyen University of Agriculture and
          Forestry – TUAF) được thành lập năm 1969, hiện nay là một đơn vị thành
          viên của Đại học Thái Nguyên. Trải qua 52 năm xây dựng và phát triển,
          Trường Đại học Thái Nguyên trở thành một trung tâm đào tạo và chuyển
          giao khoa học – công nghệ hàng đầu Việt Nam về nông, lâm nghiệp, quản
          lý tài nguyên, môi trường và phát triển nông thôn cho các tỉnh trung
          du, miền núi phía Bắc Việt Nam. Hàng năm trường tuyển 1.600 – 1.700
          sinh viên cho 24 chuyên ngành bậc đại học các hệ chính quy và hệ vừa
          làm vừa học và khoảng 500 học viên cho 10 ngành đào tạo thạc sỹ và 8
          ngành đào tạo tiến sỹ. Ngoài 24 chương trình đào tạo thông thường bằng
          tiếng Việt, Nhà trường còn tổ chức đào tạo thành công 3 chương trình
          đào tạo tiên tiến nhập khẩu từ nước ngoài, được giảng dạy bằng tiếng
          Anh, đó là chương trình đào tạo: Khoa học và Quản lý môi trường, Công
          nghệ thực phẩm được nhập khẩu từ Đại học California Davis (Hoa Kỳ) và
          chương trình Kinh tế nông nghiệp được nhập khẩu từ Đại học New England
          (Australia). Các chương trình đào tạo tiên tiến đã và đang thu hút
          nhiều sinh viên trong nước và hàng trăm sinh viên quốc tế đến học tập
          hàng năm. Một điểm nhấn khác biệt trong đào tạo hiện nay của Nhà
          trường là tổ chức các chương trình đào tạo đặc biệt, Chương trình đào
          tạo đặc biệt này được tổ chức trên cơ sở các chương trình đào tạo
          thông thường, nhưng sinh viên được học thêm ngoại ngữ, kỹ năng mềm và
          được tham gia thực tập nghề từ 10 đến 12 tháng ở cơ sở đào tạo có uy
          tín ở nước ngoài có học bổng và chi phí sinh hoạt. Năm 2017, Trường đã
          được kiểm định đánh giá chất lượng cơ sở giáo dục đại học với kết quả
          cao, đứng thứ 2 trong các trường đại học ở Việt Nam đã đánh giá.
          Trường là một đơn vị có nhiều thành tích về nghiên cứu khoa học,
          chuyển giao công nghệ và hợp tác quốc tế. Hàng năm Nhà trường triển
          khai trên 200 nhiệm vụ, đề tài, dự án các cấp và nhiều chương trình
          chuyển giao công nghệ vào thực tế sản xuất. Nhà trường đang sở hữu hơn
          20 bản quyền tác giả về các sản phẩm giống cây trồng, vật nuôi và quy
          trình kỹ thuật. Hiện tại, Nhà trường đang có mối quan hệ hợp tác về
          nghiên cứu khoa học và đào tạo với 65 tổ chức và các trường đại học
          tiên tiến trên thế giới. Hàng năm, Nhà trường đón gần 300 lượt chuyên
          gia đến giảng dạy, trao đổi kinh nghiệm và triển khai các chương trình
          nghiên cứu, cử hơn 200 lượt cán bộ ra nước ngoài đào tạo, tập huấn và
          triển khai các chương trình nghiên cứu hợp tác. Trao đổi sinh viên và
          gửi sinh viên đi thực tập nghề ở nước ngoài là những thành tựu nổi bật
          của Trường trong 5 năm qua. Mỗi năm Nhà trường tiếp nhận từ 50 – 70
          sinh viên quốc tế đến học tập, cử 300 – 350 sinh viên đi thực tập nghề
          và trao đổi học tập ngắn hạn ở nước ngoài. Tổng diện tích đất phục vụ
          cho đào tạo và nghiên cứu của Nhà trường là hơn 250 ha nằm ở 3 tỉnh:
          Thái Nguyên: 102 ha, Tuyên Quang: 130 ha và Cao Bằng: 19 ha. Nhiệm sở
          chính của Nhà trường đặt tại Thái Nguyên có cảnh quan xanh, sạch, đẹp
          với 60 phòng học được trang bị đầy đủ các trang thiết bị hiện đại phục
          vụ học tập và giảng dạy. Hệ thống phòng thí nghiệm (34 phòng) với
          trang thiết bị chuyên sâu, hiện đại và đồng bộ, các mô hình rèn nghề
          và thực hành tại trường đáp ứng đầy đủ các điều kiện cho thực hành,
          rèn nghề và nghiên cứu cho cán bộ, nghiên cứu sinh, học viên và sinh
          viên. Ký túc xá sinh viên ngay trong khuôn viên trường có đầy đủ tiện
          nghi, cùng với nhà ăn tập thể có khả năng cung cấp chỗ ở cho hơn 5000
          sinh viên nội trú. Khu vui chơi giải trí của Trường rộng 12 ha bao gồm
          sân bóng đá, nhà thể thao, sân tennis, bóng rổ, bóng chuyền, cầu lông
          v.v… đảm bảo đầy đủ yêu cầu vui chơi giải trí cho cán bộ viên chức và
          người học. Đội ngũ cán bộ giảng dạy, nghiên cứu và phục vụ giảng dạy
          không ngừng phát triển về số lượng và chất lượng. Hiện nay Nhà trường
          có gần 500 cán bộ viên chức, trong đó có 300 cán bộ giảng dạy, 100 cán
          bộ nghiên cứu và 100 cán bộ làm công tác phục vụ. Trong số cán bộ
          giảng dạy, có 11 Giáo sư, 34 Phó giáo sư, 115 tiến sỹ, còn lại là thạc
          sỹ. Tỷ lệ giáo viên có trình độ tiến sĩ trở lên đạt 53%; tỷ lệ Giáo
          sư, Phó Giáo sư đạt 15%. Nhà trường luôn tự hào về thành tựu đào tạo
          trong 52 năm qua, đã cung cấp cho đất nước nguồn nhân lực chất lượng
          cao bao gồm hơn 50.000 kỹ sư, cử nhân và trên 4.000 cán bộ có trình độ
          thạc sỹ, hơn 100 tiến sĩ và hàng chục nghìn cán bộ kỹ thuật hiện làm
          việc trong và ngoài nước. Nhiều cựu sinh viên của Nhà trường rất thành
          đạt, đang làm việc trong các cơ quan Đảng, Nhà nước. Hiện nay có hơn
          200 đồng chí đang giữ cương vị lãnh đạo từ chủ tịch và bí thư huyện
          trở lên, đặc biệt đã có 12 cựu sinh viên của Nhà trường là Uỷ viên BCH
          Trung ương Đảng (5 đồng chí là Bộ trưởng và tương đương Bộ trưởng và
          11 đồng chí là Bí thư Tỉnh uỷ), 16 cựu sinh viên là Chủ tịch uỷ ban
          nhân dân và Chủ tịch hội đồng nhân dân cấp tỉnh, 9 cựu sinh viên là
          giáo sư, 40 cựu sinh viên là phó giáo sư, hàng trăm cựu sinh viên là
          các nhà doanh nghiệp thành đạt. Sự trưởng thành của các cựu sinh viên
          trên nhiều cương vị công tác đã khẳng định chất lượng đào tạo cũng như
          vai trò của Nhà trường cho sự nghiệp công nghiệp hoá, hiện đại hoá đất
          nước. Với sự nỗ lực phấn đấu của các thế hệ cán bộ viên chức và người
          học, Trường Đại học Thái Nguyên đã vinh dự được đón nhận nhiều phần
          thưởng, danh hiệu cao quý của Đảng, Nhà nước trao tặng như: Danh hiệu
          Anh hùng Lao động (2013) Huân chương Độc lập hạng nhì (2021) Huân
          chương Độc lập hạng ba (2004), (2019) Huân chương Lao động hạng nhất
          (1995), (2015) Huân chương Lao động hạng nhì (1985) Huân chương Lao
          động hạng ba (1980) Nhiều đơn vị, cá nhân trong trường được trao tặng
          Huân chương Lao động, Bằng khen của Thủ tướng Chính Phủ, Bộ GD&ĐT; 02
          danh hiệu Anh hùng lao động, 03 Nhà giáo nhân dân, 19 cán bộ giảng dạy
          được công nhận danh hiệu Nhà giáo ưu tú, 02 giảng viên nữ được trao
          giải Kovalevskaia. Nhà trường luôn mong muốn tiếp tục nhận được sự hợp
          tác giúp đỡ của các tổ chức, cá nhân trong nước và quốc tế để Nhà
          trường hoàn thành xuất sắc sứ mệnh đào tạo và nghiên cứu khoa học góp
          phần vào sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.
        </Text>
      </Container>
    </Box>
  );
};
