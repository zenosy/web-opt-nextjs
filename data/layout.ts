interface Route {
  title: string;
  path: string;
}

interface FooterColumn {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
}

interface Footer {
  columns: FooterColumn[];
}

export const routes: Route[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Designs',
    path: '/designs',
  },
];

export const footer: Footer = {
  columns: [
    {
      title: 'Pages',
      links: [
        {
          name: 'Home',
          link: '/',
          leavesWebsite: false,
        },
        {
          name: 'Designs',
          link: '/designs',
          leavesWebsite: false,
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          name: 'GitHub',
          link: 'https://github.com/deep-quality-dev',
          icon: '/static/icons/github-f.svg',
          leavesWebsite: true,
        },
        {
          name: 'Email',
          link: 'mailto:hungrywarrior081@gmail.com',
          icon: '/static/icons/mail-f.svg',
          leavesWebsite: true,
        },
      ],
    },
  ],
};