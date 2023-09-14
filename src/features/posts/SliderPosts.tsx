"use client";

import { Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { useSize } from "../../hooks/useSizeWindow";

export const StyledContainer = styled(Container)`
  .mySwiper {
    padding-bottom: 38px;
  }

  .swiper-slide {
    height: 550px;
  }
`;

export const SLiderPosts = ({ children }: { children: ReactNode }) => {
  const { size } = useSize();
  return (
    <StyledContainer maxW="6xl">
      <Swiper
        slidesPerView={(size.width < 480 && 1) || (size.width < 992 && 2) || 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </StyledContainer>
  );
};
