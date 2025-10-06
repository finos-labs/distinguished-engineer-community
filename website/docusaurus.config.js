// Docs at https://docusaurus.io/blog/releases/3.1

const projectName = 'Distinguished Engineer Community Special Interest Group'
const projectSlug =  'distinguished-engineer-community'
const copyrightOwner = 'FINOS'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: `Championing Good Through Trusted Engineering Leadership`, 
  url: 'https://distinguished-engineer-community.finos.org',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon/favicon.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos-labs/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: `FINOS ${projectName}`,
      logo: {
        alt: 'Distinguished Engineers Community SIG Logo',
        src: 'img/favicon/favicon.ico',
      },
      items: [
        {to: 'docs/home', label: 'Docs', position: 'right'},
        {to: 'docs/roadmap', label: 'Roadmap', position: 'right'},
        {to: 'docs/team', label: 'Team', position: 'right'},
        {
          href: 'https://github.com/finos-labs/distinguished-engineer-community/',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    metadata: [
      {name: 'description', content: 'Our mission is to facilitate a trusted, accredited network of distinguished engineers and senior technology leaders who provide independent advice, strategic guidance, and mentorship to worthy causes and communities. Through our collective efforts, we seek to empower impactful initiatives, promote responsible use of technology, and do good in society beyond the boundaries of our industry roles.'},
      {property: 'og:title', content: 'FINOS Distinguished Engineers Community'},
      {property: 'og:description', content: 'Our mission is to facilitate a trusted, accredited network of distinguished engineers and senior technology leaders who provide independent advice, strategic guidance, and mentorship to worthy causes and communities. Through our collective efforts, we seek to empower impactful initiatives, promote responsible use of technology, and do good in society beyond the boundaries of our industry roles.'},
      {property: 'og:image', content: 'https://raw.githubusercontent.com/finos/software-project-blueprint/main/website/static/img/feature/feature-img.png'},
      {property: 'og:url', content: 'https://distinguished-engineer-community.finos.org'}
    ],
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Defining Distinguished Engineers',
              to: 'docs/DERoleDefinition',
            },
            {
              label: 'Roadmap',
              to: 'docs/roadmap',
            },
            {
              label: 'Team',
              to: 'docs/team',
            }
          ]
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://www.finos.org/',
            },
            {
              label: 'Community Handbook',
              to: 'https://community.finos.org/',
            },
            {
              label: 'FINOS Projects',
              to: 'https://landscape.finos.org',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/${projectSlug}/edit/main/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
