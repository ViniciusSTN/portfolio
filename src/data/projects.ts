type ProjectsData = ProjectProps[];

export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  type: string;
  imageUrl: string;
  situation: string;
  gitHubUrl: string;
  aplicationUrl: string;
};

const data: ProjectsData = [
  {
    id: 1,
    title: 'Nome do projeto 1',
    description:
      '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    type: 'Web Front-End',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Fprojects%2Fportfolio.PNG?alt=media&token=6ef04c8f-7487-4175-bd08-c91357dc5760',
    situation: 'Concluído',
    gitHubUrl: 'https://google.com',
    aplicationUrl: 'https://google.com',
  },
  {
    id: 2,
    title: 'Nome do projeto 2',
    description:
      '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    type: 'Web Back-End',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Fprojects%2Fportfolio.PNG?alt=media&token=6ef04c8f-7487-4175-bd08-c91357dc5760',
    situation: 'Concluído',
    gitHubUrl: 'https://google.com',
    aplicationUrl: '',
  },
  {
    id: 3,
    title: 'Nome do projeto 3',
    description:
      '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    type: 'Dashboard',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Fprojects%2Fportfolio.PNG?alt=media&token=6ef04c8f-7487-4175-bd08-c91357dc5760',
    situation: 'Concluído',
    gitHubUrl: 'https://google.com',
    aplicationUrl: 'https://google.com',
  },
  {
    id: 4,
    title: 'Nome do projeto 4',
    description:
      '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    type: 'Web Front-End',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Fprojects%2Fportfolio.PNG?alt=media&token=6ef04c8f-7487-4175-bd08-c91357dc5760',
    situation: 'Concluído',
    gitHubUrl: 'https://google.com',
    aplicationUrl: '',
  },
  {
    id: 5,
    title: 'Nome do projeto 5',
    description:
      '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui similique, numquam molestias quia provident vitae eius voluptate eveniet ipsa alias a voluptatem quibusdam natus',
    type: 'Web Back-End',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-7fea7.appspot.com/o/images%2Fprojects%2Fportfolio.PNG?alt=media&token=6ef04c8f-7487-4175-bd08-c91357dc5760',
    situation: 'Concluído',
    gitHubUrl: 'https://google.com',
    aplicationUrl: 'https://google.com',
  },
];

export default data;
