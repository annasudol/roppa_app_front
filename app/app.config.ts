export default defineAppConfig({
  nuxtIcon: {},
  roppa: {
    title: 'Roppa',
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true
            }
          },
          {
            component: 'DemoToolbarLanguage'
          },
          {
            component: 'DemoToolbarNotifications'
          },
          {
            component: 'DemoToolbarActivity'
          },
          {
            component: 'DemoToolbarAccountMenu'
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: 'DemoCircularMenuLanguage'
          },
          {
            component: 'DemoCircularMenuNotifications'
          },
          {
            component: 'DemoCircularMenuActivity'
          }
        ]
      },
      navigation: {
        logo: {
          component: 'RoppaLogo',
          props: { class: 'text-primary-600 h-10' }
        },
        items: [
          {
            title: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarDashboards' },
            activePath: '/dashboard'
          },
          {
            title: 'My Account',
            component: 'DemoAccountMenu',
            position: 'end'
          }
        ]
      }
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle'
          },
          {
            component: 'DemoToolbarLanguage'
          },
          {
            component: 'DemoToolbarNotifications'
          },
          {
            component: 'DemoToolbarActivity'
          },
          {
            component: 'DemoToolbarAccountMenu'
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: 'DemoCircularMenuLanguage'
          },
          {
            component: 'DemoCircularMenuNotifications'
          },
          {
            component: 'DemoCircularMenuActivity'
          }
        ]
      },
      navigation: {
        enabled: true,
        header: {
          component: 'DemoCollapseNavigationHeader'
        },
        footer: {
          component: 'DemoCollapseNavigationFooter'
        },
        items: [
          {
            name: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            activePath: '/dashboards',
            children: [
              {
                name: 'Personal v1',
                to: '/dashboards',
                icon: { name: 'ph:coffee-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Personal v2',
                to: '/dashboards/personal-2',
                icon: { name: 'ph:chart-pie-slice-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Personal v3',
                to: '/dashboards/personal-3',
                icon: { name: 'ph:cactus-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Analytics',
                to: '/dashboards/analytics',
                icon: { name: 'ph:gauge-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Stocks',
                to: '/dashboards/stocks',
                icon: { name: 'ph:coin-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Sales',
                to: '/dashboards/sales',
                icon: { name: 'ph:shopping-cart-duotone', class: 'w-4 h-4' }
              }
            ]
          },
          {
            name: 'Layouts',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            activePath: '/layouts',
            children: [
              {
                name: 'List view v1',
                to: '/layouts',
                icon: { name: 'ph:list-bullets-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Flex list v1',
                to: '/layouts/flex-list-1',
                icon: { name: 'ph:list-checks-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Table list v1',
                to: '/layouts/table-list-1',
                icon: { name: 'ph:table-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Card grid v1',
                to: '/layouts/card-grid-1',
                icon: { name: 'ph:circles-four-duotone', class: 'w-4 h-4' }
              }
            ]
          },
          {
            name: 'Projects',
            icon: { name: 'ph:suitcase-duotone', class: 'w-5 h-5' },
            activePath: '/layouts/projects/',
            children: [
              {
                name: 'Projects',
                to: '/layouts/projects/project-list-3',
                icon: { name: 'ph:leaf-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Project Details',
                to: '/layouts/projects/details',
                icon: {
                  name: 'ph:note-duotone',
                  class: 'w-4 h-4'
                }
              },
              {
                name: 'Kanban Board',
                to: '/layouts/projects/board',
                icon: { name: 'ph:circles-four-duotone', class: 'w-4 h-4' }
              }
            ]
          },
          {
            name: 'Auth',
            icon: { name: 'ph:lock-duotone', class: 'w-5 h-5' },
            activePath: '/layouts/projects/',
            children: [
              {
                name: 'Login',
                to: '/auth',
                icon: { name: 'ph:fingerprint-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Signup',
                to: '/auth/signup-1',
                icon: {
                  name: 'ph:plus-circle-duotone',
                  class: 'w-4 h-4'
                }
              },
              {
                name: 'Recover',
                to: '/auth',
                icon: { name: 'ph:lightning-duotone', class: 'w-4 h-4' }
              }
            ]
          },
          {
            name: 'Widgets',
            icon: { name: 'ph:nut-duotone', class: 'w-5 h-5' },
            activePath: '/dashboards/widgets',
            children: [
              {
                name: 'UI Widgets',
                to: '/dashboards/widgets',
                icon: { name: 'ph:square-half-duotone', class: 'w-4 h-4' }
              },
              {
                name: 'Creative Widgets',
                to: '/dashboards/widgets/creative',
                icon: {
                  name: 'ph:square-half-bottom-duotone',
                  class: 'w-4 h-4'
                }
              },
              {
                name: 'List Widgets',
                to: '/dashboards/widgets/list',
                icon: { name: 'ph:square-half-duotone', class: 'w-4 h-4' }
              }
            ]
          },
          {
            name: 'Divider',
            divider: true
          },
          {
            name: 'Charts',
            icon: { name: 'ph:chart-pie-slice-duotone', class: 'w-5 h-5' },
            to: '/dashboards/charts'
          },
          {
            name: 'Wizard',
            icon: { name: 'ph:magic-wand-duotone', class: 'w-5 h-5' },
            to: '/wizard'
          },
          {
            name: 'Messaging',
            icon: { name: 'ph:chats-circle-duotone', class: 'w-5 h-5' },
            to: '/dashboards/messaging'
          },
          {
            name: 'Logout',
            icon: { name: 'line-md:logout', class: 'w-5 h-5' },
            click: () => {
              //TODO - add logout
            },
            position: 'end'
          }
        ]
      }
    },
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'RoppaLogo',
          props: { class: 'text-primary-600 h-10 w-10' }
        },
        header: {
          component: 'DemoTopnavWorkspaceDropdown',
          props: {}
        },
        items: [
          {
            name: 'Dashboard',
            icon: { name: 'ph:gauge-duotone', class: 'w-6 h-6' },
            activePath: '/dashboards/sales',
            to: '/dashboards/sales'
          },
          {
            name: 'Projects',
            icon: { name: 'ph:suitcase-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/projects/project-list-3',
            to: '/layouts/projects/project-list-3'
          },
          {
            name: 'Freelancers',
            icon: { name: 'ph:users-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/flex-list-1',
            to: '/layouts/flex-list-1'
          },
          {
            name: 'Files',
            icon: { name: 'ph:note-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/table-list-3',
            to: '/layouts/table-list-3'
          },
          {
            name: 'Customers',
            icon: { name: 'ph:users-three-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/user-grid-3',
            to: '/layouts/user-grid-3'
          },
          {
            name: 'Billing',
            icon: { name: 'ph:credit-card-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/utility-billing',
            to: '/layouts/utility-billing'
          },
          {
            name: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/profile-settings',
            to: '/layouts/profile-settings'
          },
          {
            name: 'Status',
            icon: { name: 'ph:notification-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/utility-status',
            to: '/layouts/utility-status'
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: 'DemoCircularMenuLanguage'
          },
          {
            component: 'DemoCircularMenuNotifications'
          },
          {
            component: 'DemoCircularMenuActivity'
          }
        ]
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true
            }
          },
          {
            component: 'DemoToolbarSearch'
          },
          {
            component: 'DemoToolbarCustomize'
          },
          {
            component: 'DemoToolbarNotifications'
          },
          {
            component: 'DemoAccountMenu',
            props: {
              horizontal: true
            }
          }
        ]
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: 'RoppaLogo',
          props: { class: 'text-primary-500 h-7 w-7' }
        },
        logo: {
          component: 'RoppaLogoText',
          props: {
            class:
              'text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0'
          }
        },
        copyright: {
          name: 'Roppa',
          to: 'https://roppa.io'
        },
        links: [
          {
            name: 'Demo pages',
            to: '/demos'
          },
          {
            name: 'Documentation',
            to: '/documentation'
          },
          {
            name: 'Shuriken UI',
            to: 'https://github.com/shuriken-ui',
            rel: 'noopener',
            target: '_blank'
          },
          {
            name: 'Support',
            to: 'https://cssninja.io/faq/support',
            rel: 'noopener',
            target: '_blank'
          }
        ]
      }
    },
    iconnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'RoppaLogo',
          props: { class: 'text-primary-600 h-10 w-10' }
        },
        items: [
          {
            name: 'New Design',
            icon: { name: 'iconoir:hexagon-plus', class: 'w-6 h-6' },
            activePath: '/new-design',
            children: []

          },
          {
            name: 'How it works',
            icon: { name: 'iconoir:shield-question', class: 'w-6 h-6' },
            activePath: '/how-it-works',
            children: []

          },
          {
            name: 'About Us',
            icon: { name: 'iconoir:book', class: 'w-6 h-6' },
            activePath: '/about-us',
            children: []

          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: 'DemoCircularMenuLanguage'
          },
          {
            component: 'DemoCircularMenuNotifications'
          },
          {
            component: 'DemoCircularMenuActivity'
          }
        ]
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        tools: [
          {
            component: 'DemoThemeToggle'
          },
          // {
          //   component: 'DemoToolbarDropdown',
          // },
          {
            component: 'DemoToolbarNotifications'
          },
          {
            component: 'DemoAccountMenu',
            props: {
              horizontal: true,
              orientation: 'start'
            }
          }
        ]
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: 'RoppaLogo',
          props: { class: 'text-primary-500 h-7 w-7' }
        },
        logo: {
          component: 'RoppaLogoText',
          props: {
            class:
              'text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0'
          }
        },
        copyright: {
          name: 'Roppa',
          to: 'https://roppa.io',
          since: '2018'
        },
        links: [
          {
            name: 'Demo pages',
            to: '/demos'
          },
          {
            name: 'Documentation',
            to: '/documentation'
          },
          {
            name: 'Shuriken UI',
            to: 'https://github.com/shuriken-ui',
            rel: 'noopener',
            target: '_blank'
          },
          {
            name: 'Support',
            to: 'https://cssninja.io/faq/support',
            rel: 'noopener',
            target: '_blank'
          }
        ]
      }
    },
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'DemoPanelLanguage'
      },
      {
        name: 'activity',
        position: 'right',
        component: 'DemoPanelActivity'
      },
      {
        name: 'search',
        position: 'left',
        component: 'DemoPanelSearch'
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask'
      },
      {
        name: 'account',
        position: 'right',
        component: 'DemoPanelAccount',
        size: 'md'
      },
      {
        name: 'card',
        position: 'right',
        component: 'DemoPanelCard'
      },
      {
        name: 'invest',
        position: 'right',
        component: 'DemoPanelInvest',
        size: 'md'
      }
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto'
        }
      }
    }
  },
  meta: {
    description: ''

  },
  nui: {}
})
