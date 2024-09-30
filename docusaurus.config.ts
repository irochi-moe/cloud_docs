import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Irochi\'s Cloud 문서',
  tagline: 'Presented by irochi.moe',
  url: 'https://docs.cloud.irochi.moe/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'cloud_docs',
  projectName: 'cloud_docs',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'src/docs',
          routeBasePath: '/',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      // title: 'Irochi\'s Cloud 문서',
      logo: {
        alt: 'Irochi\'s Cloud',
        src: 'img/logo.svg',
      },
      items: [
        /* {
          href: 'https://discord.cloud.irochi.moe',
          label: '디스코드',
          position: 'left',
        }, */
        /* {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Irochi\'s Cloud 문서',
        }, */
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
