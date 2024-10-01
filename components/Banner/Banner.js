import { useRef, useState } from "react";
import { BackgroundImage, Banner, BannerWrapper, CenterImageWrapper, Dot, DotWrapper, Slide, StyledButton, StyledTextContainer } from "./Style";

const CenterImage = ({
  img,
  bannerText,
  ctaButton,
  legalBannerHtml,
  legalBannerText,
}) => (
  <CenterImageWrapper $img={img}>
    <StyledTextContainer>
      <div dangerouslySetInnerHTML={{ __html: bannerText }} />
      <StyledButton dangerouslySetInnerHTML={{ __html: ctaButton }} />
      <div dangerouslySetInnerHTML={{ __html: legalBannerHtml }} />
      <div>{legalBannerText}</div>
    </StyledTextContainer>
  </CenterImageWrapper>
);

const Carousel = ({ banner }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(null);

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const difference = e.clientX - startXRef.current;
      setOffsetX((difference / window.innerWidth) * 100);
    }
  };

  const handleMouseUp = () => {
    if (offsetX > 25) {
      moveSlide("prev");
    } else if (offsetX < -25) {
      moveSlide("next");
    }
    resetDragging();
  };

  const resetDragging = () => {
    setIsDragging(false);
    setOffsetX(0);
    startXRef.current = null;
  };

  const moveSlide = (direction) => {
    setCurrentSlide((prevSlide) => {
      if (direction === "next") {
        return (prevSlide + 1) % banner.length;
      } else if (direction === "prev") {
        return (prevSlide - 1 + banner.length) % banner.length;
      }
      return prevSlide;
    });
  };

  return (
    <BannerWrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={resetDragging}
    >
      <Banner
        $offsetX={offsetX}
        $currentSlide={currentSlide}
        $isDragging={isDragging}
      >
        {banner.map((item, index) => (
          <Slide key={index}>
            <BackgroundImage $img={item.backgroundImage} />
            <CenterImage
              img={item.bannerImage}
              bannerText={item.bannerText}
              ctaButton={item.ctaButton}
              legalBannerHtml={item.legalBannerHtml}
              legalBannerText={item.legalBannerText}
            />
          </Slide>
        ))}
      </Banner>

      <DotWrapper>
        {banner.map((_, index) => (
          <Dot
            key={index}
            $isActive={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotWrapper>
    </BannerWrapper>
  );
}


export default Carousel