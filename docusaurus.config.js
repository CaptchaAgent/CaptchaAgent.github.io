// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// const math = require('remark-math');
// const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CaptchaAgent',
  tagline: '🥂 Gracefully face hCaptcha Challenge with MoE(ONNX) embedded solution.',
  favicon: 'img/favicon2.png',

  // Set the production url of your site here
  url: 'https://docs.captchax.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CaptchaAgent', // Usually your GitHub org/user name.
  projectName: 'CaptchaAgent.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // https://docusaurus.io/zh-CN/docs/i18n/git
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CaptchaAgent/docs-source/tree/main/',
        },
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#ex-config
        blog: {
          editUrl: 'https://github.com/CaptchaAgent/docs-source/tree/main/',
          
          blogSidebarCount: 'ALL',

          showReadingTime: true,
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // https://dashboard.algolia.com/account/api-keys/all
      // https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template
      algolia: {
        // The application ID provided by Algolia
        appId: '63F28NXXKD',

        // Public API key: it is safe to commit it
        apiKey: 'e5ce36be07b350ed0b0d7af28fedd6ce',

        indexName: 'captchax-docs',

        // Optional: see doc section below
        // contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

        //... other Algolia params
      },

      // Replace with your project's social card
      image: 'img/CaptchaAgent-social-card.jpg',
      navbar: {
        title: 'CaptchaAgent',
        logo: {
          alt: 'CaptchaAgent',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            href: 'https://github.com/QIN2DIM/hcaptcha-challenger',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [

        ],
        copyright: `Copyright © ${new Date().getFullYear()} CaptchaAgent. All right.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
