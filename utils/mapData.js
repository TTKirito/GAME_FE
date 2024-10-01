export const mapBannerData = (banner) => ({
  id: banner.id,
  backgroundImage: banner.backgroundImage.original.src,
  bannerImage: banner.bannerImage.original.src,
  bannerText: banner.bannerText.htmlContent,
  legalBannerHtml: banner.legalBannerHtml.htmlContent,
  legalBannerText: banner.legalBannerText,
  ctaButton: banner.ctaButton.text,
});

export const mapCategoryData = (category) => ({
  id: category.id,
  text: category.text,
  image: category?.image?.original?.src,
  activeImage: category?.activeImage?.original?.src,
});


export const mapGameData = (game) => ({
    id: game.id,
    text: game.gameText,
    image: game?.image?.original?.src,
  });