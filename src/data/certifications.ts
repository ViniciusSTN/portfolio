interface CertificationsData {
  id: number;
  title: string;
  institution: string;
  duration: string;
  instructor: string;
  dateConclusion: string;
  certificationLink: string;
}

const data: CertificationsData[] = [
  {
    id: 1,
    title: 'Javascript e TypeScript',
    institution: 'Udemy',
    duration: '146 h',
    instructor: 'Luiz Otavio Miranda',
    dateConclusion: '05/12/23',
    certificationLink: 'https://google.com',
  },
  {
    id: 2,
    title: 'ReactJS e NextJS',
    institution: 'Udemy',
    duration: '96 h',
    instructor: 'Luiz Otavio Miranda',
    dateConclusion: '10/12/23',
    certificationLink: 'https://google.com',
  },
  {
    id: 3,
    title: 'Titulo 3',
    institution: 'Udemy',
    duration: '140 h',
    instructor: 'Luiz Otavio Miranda',
    dateConclusion: '05/12/23',
    certificationLink: 'https://google.com',
  },
  {
    id: 4,
    title: 'Titulo 4',
    institution: 'Udemy',
    duration: '100 h',
    instructor: 'Luiz Otavio Miranda',
    dateConclusion: '15/12/23',
    certificationLink: 'https://google.com',
  },
  {
    id: 5,
    title: 'Titulo 5',
    institution: 'Udemy',
    duration: '96 h',
    instructor: 'Luiz Otavio Miranda',
    dateConclusion: '05/12/23',
    certificationLink: 'https://google.com',
  },
];

export default data;
