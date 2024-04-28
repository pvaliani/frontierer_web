// VideoCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const VideoCarousel: React.FC = () => {
  const swiperConfig = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 5000 },
    loop: true,
  };

  const videoURLs = [
    "https://www.youtube.com/embed/CEIvJ4EJSX8",
    "https://www.youtube.com/embed/-e6-2_4pDMM",
    "https://www.youtube.com/embed/HETQc_aYqTc",
    "https://www.youtube.com/embed/fj6GHObfiq0",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper {...swiperConfig}>
        {videoURLs.map((url, index) => (
          <SwiperSlide key={index}>
            <iframe
              src={url}
              width="100%"
              height="500"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
