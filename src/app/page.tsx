import { Home } from "@/features/home";

const getPost = async () => {
  const api_url = process.env.API_URL || "";

  try {
    // //get all categories
    // const resCats = await fetch(`${api_url}/categories`, {
    //   next: { revalidate: 3 },
    // });
    // const cats: any[] = (await resCats.json()) || [];
    // const newCat = cats?.find((cat) => cat.name === "Tin Tức");
    const idNew = 4;
    // const notifiCat = cats?.find((cat) => cat.name === "Thông báo");
    const idNotifi = 3;

    //get posts category==='tin-tuc'
    const resNews = await fetch(
      `${api_url}/posts?_embed&per_page=2&status=publish&page=${1}&categories=${idNew}`,
      {
        next: { revalidate: 3 },
      }
    );
    const totalNews = resNews.headers.get("X-WP-Total");
    const news: any[] = (await resNews?.json()) || [];
    const newsWithFeaturedImages: any[] =
      news?.length > 0
        ? news?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image,
            };
          })
        : [];

    //get posts category==='thong-bao'
    const resNotifis = await fetch(
      `${api_url}/posts?_embed&per_page=2&status=publish&page=${1}&categories=${idNotifi}`,
      {
        next: { revalidate: 3 },
      }
    );
    const totalNotifis = resNotifis.headers.get("X-WP-Total");
    const notifis: any[] = (await resNotifis?.json()) || [];
    const motifisWithFeaturedImages: any[] =
      notifis?.length > 0
        ? notifis?.map((notifi: any) => {
            const featured_image =
              notifi._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...notifi,
              featured_image,
            };
          })
        : [];

    return {
      news: newsWithFeaturedImages || [],
      notifis: motifisWithFeaturedImages || [],
      totalNews: totalNews || "0",
      totalNotifis: totalNotifis || "0",
    };
  } catch (error) {
    console.log(error);
    return {
      news: [],
      notifis: [],
      totalNews: "0",
      totalNotifis: "0",
    };
  }
};

const HomePage = async () => {
  const { news, notifis } = await getPost();

  return (
    <main>
      <Home news={news || []} notifis={notifis || []} />
    </main>
  );
};

export default HomePage;
