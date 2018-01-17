export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Content'
  },
  {
    name: 'Content',
    url: '/content',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Events',
        url: '/content/events',
        icon: 'icon-calendar'
      },
      {
        name: 'Pages',
        url: '/content/pages',
        icon: 'icon-puzzle'
      },
      {
        name: 'Posts',
        url: '/content/posts',
        icon: 'icon-puzzle'
      },
      {
        name: 'Products',
        url: '/content/products',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    title: true,
    name: 'System'
  },
  {
    name: 'System',
    url: '/system',
    icon: 'icon-star',
    children: [
      {
        name: 'Domains',
        url: '/system/domains',
        icon: 'icon-star',
      },
      {
        name: 'Settings',
        url: '/system/settings',
        icon: 'icon-settings',
      },
      {
        name: 'Users',
        url: '/system/users',
        icon: 'icon-user',
      },
    ]
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/pages/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/pages/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/pages/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/pages/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Colmena',
  //   url: 'https://github.com/colmena/colmena/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
