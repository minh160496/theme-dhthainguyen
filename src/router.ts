export const menus = [
  {
    path: "/", // the url
    title: "Trang chủ",
  },
  {
    path: "/gioi-thieu", // the url
    title: "Giới thiệu",
  },

  {
    path: "#", // the url
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-kinh-doanh-xuat-nhap-khau-nong-san",
        title: "Kinh doanh xuất nhập khẩu nông sản",
      },
      {
        path: "/nganh-cong-nghe-thuc-pham",
        title: "Công nghệ thực phẩm",
      },
      {
        path: "/nganh-nong-nghiep-cong-nghe-cao",
        title: "Nông nghiệp công nghệ cao",
      },
      {
        path: "/nganh-cong-nghe-thuc-pham-tieng-anh",
        title: "Công nghệ thực phẩm tiếng Anh",
      },
    ],
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Khai giảng",
  },
  {
    path: "/dang-ky", // the url
    title: "Đăng ký",
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức", // view rendered
  },
];
