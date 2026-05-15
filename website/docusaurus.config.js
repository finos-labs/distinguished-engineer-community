// Docs at https://docusaurus.io/blog/releases/3.1

const projectName = 'Distinguished Engineer Community Special Interest Group'
const githubOrganisation = 'finos-labs'
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
    missionStatement: "We build a trusted community of distinguished engineers and senior technology leaders that enables cross-organisational collaboration, amplifies their collective impact on wider society, and champions inclusive and responsible engineering — publishing the results of that collaboration as open, freely reusable resources."
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
        {to: 'docs/about-us', label: 'Docs', position: 'right'},
        {to: 'docs/roadmap', label: 'Roadmap', position: 'right'},
        {to: 'docs/team', label: 'Team', position: 'right'},
        {
          href: `https://github.com/${githubOrganisation}/${projectSlug}/`,
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    metadata: [
      {name: 'description', content: 'A community of Distinguished Engineers from across financial services, collaborating across firm boundaries to share expertise, produce open thought leadership, support charities through pro-bono technical outreach, and champion inclusive engineering practices.'},
      {property: 'og:title', content: 'FINOS Distinguished Engineers Community'},
      {property: 'og:description', content: 'A community of Distinguished Engineers from across financial services, collaborating across firm boundaries to share expertise, produce open thought leadership, support charities through pro-bono technical outreach, and champion inclusive engineering practices.'},
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
              label: 'About the DE SIG',
              to: 'docs/about-us'
            },
            {
              label: 'Outreach Working Group',
              to: 'docs/outreach',
            },
            {
              label: 'Terms of Engagement',
              to: 'docs/terms-of-engagement',
            },
            {
              label: 'Inclusive Engineering Working Group',
              to: 'docs/inclusive-engineering',
            },
            {
              label: 'Defining Distinguished Engineers',
              to: 'docs/DERoleDefinition',
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
            `https://github.com/${githubOrganisation}/${projectSlug}/edit/main/website/`,
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-Y7NJD3LPWH',
          anonymizeIP: true,
        }
      }
    ]
  ]
};
