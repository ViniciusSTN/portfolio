import React, { useEffect, useState } from 'react';
import {
  Item,
  AgeBox,
  Container,
  Line,
  Line2,
  TextBox,
  Age,
  Text,
  ImageContainer,
} from './styles';
import data from '@/data/timeline';
import { theme } from '@/styles/theme-provider';

export default function Timeline() {
  const allColors = data.colors;
  const allPosts = data.posts;

  const [image, setImage] = useState(false);

  useEffect(() => {
    function onResize() {
      const width = window.innerWidth;
      if (width < theme.numBreakpoints.md) setImage(false);
      if (width >= theme.numBreakpoints.md) setImage(true);
    }

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Container>
      {allPosts.map((item) => {
        const currentColor = allColors[item.id % allColors.length];
        const nextColor = allColors[(item.id + 1) % allColors.length];

        return (
          <React.Fragment key={item.id}>
            <AgeBox>
              <Line $color={currentColor} />
              <Line2 $color={nextColor} />
              <Age $color={currentColor}>{item.age}</Age>
              <Item $color={currentColor}>{item.letter}</Item>
            </AgeBox>
            <TextBox>
              <Text $color={currentColor}>{item.data}</Text>
            </TextBox>
            {image && (
              <ImageContainer>
                <img
                  src={item.imageUrl}
                  alt="imagem"
                  width={130}
                  height={130}
                />
              </ImageContainer>
            )}
          </React.Fragment>
        );
      })}
    </Container>
  );
}
