import Carousel from "@/components/Banner/Banner";
import Dialog from "@/components/Dialog/Dialog";
import Loader from "@/components/Loader/Loader";
import { mapBannerData, mapCategoryData } from "@/utils/mapData";

const LandingPage = ({ categories = [], banner = [] }) => {
  if (!categories.length || !banner.length) {
    return <Loader />;
  }

  return (
    <>
      <Carousel banner={banner} />
      <Dialog dialogs={categories} />
    </>
  );
};

LandingPage.getInitialProps = async (context, client) => {
  const { data } = await client.get(`/kansino/pages/en/homepage`);

  const categories = data?.components.find(
    (res) => res.type === "category-carousel"
  )?.items || [];
  
  const banner = data?.components.find(
    (res) => res.type === "banner-carousel"
  )?.carousel || [];

  return {
    categories: categories.map(mapCategoryData),
    banner: banner.map(mapBannerData),
  };
};

export default LandingPage;