type NavData = {
  data: {
    children: string;
    href: string;
  }[];
};

const nav: NavData = {
  data: [
    {
      children: 'Início',
      href: '/',
    },
    {
      children: 'Sobre mim',
      href: '/sobre-mim',
    },
    {
      children: 'Projetos',
      href: '/projetos',
    },
    {
      children: 'Certificações',
      href: '/certificacoes',
    },
    {
      children: 'Habilidades',
      href: '/habilidades',
    },
    {
      children: 'Contato',
      href: '/contato',
    },
  ],
};

export default nav;
