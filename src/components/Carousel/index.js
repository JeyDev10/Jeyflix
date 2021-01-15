import React from 'react';
import {
  VideoCardGroupContainer, VideoCardList, Title, Description,
} from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryDescription = category.descricao;
  const { videos } = category;

  console.log(ignoreFirstVideo);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    centerMode: false,
    slidesToShow: 3,
    variableWidth: true,
    adaptiveHeight: true,
  };
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryDescription
            && (
            <Description>
              {categoryDescription}
            </Description>
            )}
        </>
      )}
      <Slider {...settings}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
