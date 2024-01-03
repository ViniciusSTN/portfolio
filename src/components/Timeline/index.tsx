import React from 'react';
import {
  Item,
  AgeBox,
  Container,
  Line,
  Line2,
  TextBox,
  Age,
  Text,
} from './styles';
import data from '@/data/timeline';

export default function Timeline() {
  const allColors = data.colors;
  const allPosts = data.posts;

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
          </React.Fragment>
        );
      })}
    </Container>
  );
}
