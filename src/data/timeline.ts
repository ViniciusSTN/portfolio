interface TimelineData {
  colors: string[];
  posts: {
    id: number;
    age: string;
    letter: string;
    data: string;
    imageUrl: string;
  }[];
}

const data: TimelineData = {
  colors: ['#F4A152', '#F26F7A', '#15A0B9', '#87A546'],
  posts: [
    {
      id: 1,
      age: '2017',
      letter: 'A',
      data: 'Post 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Freact.png?alt=media&token=059eff12-79f4-4415-8b4f-fbe216545ef4',
    },
    {
      id: 2,
      age: '2017',
      letter: 'B',
      data: 'Post 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Fportugol.png?alt=media&token=8e437727-a34a-4cdc-8f6a-8a56211a9f89',
    },
    {
      id: 3,
      age: '2019',
      letter: 'C',
      data: 'Post 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Flearning.png?alt=media&token=cb6be1b9-2a3b-4029-8d8c-fad0efdc6d34',
    },
    {
      id: 4,
      age: '2020',
      letter: 'D',
      data: 'Post 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Fjs.png?alt=media&token=e868b184-fd36-432e-acb3-cc1df008be2a',
    },
    {
      id: 5,
      age: '2021',
      letter: 'E',
      data: 'Post 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Fhtml-css.png?alt=media&token=934d47e6-9f23-4815-96b6-9a2d4c2eebdc',
    },
  ],
};

export default data;
