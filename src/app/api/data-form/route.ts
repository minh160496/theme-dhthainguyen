import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const api_url = process.env.API_URL || "";
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  let id: string = "";
  let href: string = "";
  try {
    const responeWordpress = await fetch(`${api_url}/posts/?slug=${type}`, {
      next: { revalidate: 10 },
    });
    const data: any[] = await responeWordpress.json();

    //lấy ra chuỗi formHTML
    const htmlString = data?.length > 0 ? data[0]?.content.rendered : ``;

    //dùng regex để lấy ra id và href
    const idRegex = /id="([^"]+)"/;
    const idMatch = htmlString.match(idRegex);
    id = idMatch ? idMatch[1] : "";

    // Sử dụng biểu thức chính quy để trích xuất chuỗi href
    const hrefRegex = /https:\/\/[^'"]+/;
    const hrefMatch: string[] = htmlString.match(hrefRegex);
    href = hrefMatch ? hrefMatch[0] : "";
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ id, href });
}
