interface SkillsData {
  id: number;
  title: string;
  data: string;
  imageUrl: string;
}

const data: SkillsData[] = [
  {
    id: 1,
    title: 'Javascript',
    data: 'Post 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Freact.png?alt=media&token=059eff12-79f4-4415-8b4f-fbe216545ef4',
  },
  {
    id: 2,
    title: 'ReactJS',
    data: 'Post 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Fportugol.png?alt=media&token=8e437727-a34a-4cdc-8f6a-8a56211a9f89',
  },
  {
    id: 3,
    title: 'NextJS',
    data: 'Post 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Ftimeline%2Fjs.png?alt=media&token=e868b184-fd36-432e-acb3-cc1df008be2a',
  },
];

export default data;
