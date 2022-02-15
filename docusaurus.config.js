// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ipincamp",
  tagline: "Don't waste your time!",
  url: "https://docs.nur-arifin.my.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ipincamp",
  projectName: "ipincamp.github.io",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ipincamp/ipincamp.github.io",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ipincamp/ipincamp.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "IPINCAMP",
        logo: {
          alt: "ipincamp",
          src: "https://github.com/ipincamp.png",
        },
        items: [
          {
            position: "right",
            label: "Courses",
            items: [
              {
                to: "/docs/HTML-CSS/intro",
                label: "HTML CSS",
              },
              {
                to: "/docs/Java/intro",
                label: "Java",
              },
              {
                to: "/docs/JavaScript/intro",
                label: "JavaScript",
              },
              {
                to: "/docs/NodeJS/intro",
                label: "NodeJS",
              },
            ],
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social Media",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/users/675175109362843667",
              },
              {
                label: "Facebook",
                href: "https://twitter.com/ipincamp",
              },
              {
                label: "Instagram",
                href: "https://www.facebook.com/profile.php?id=100010728341707",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ipincamp",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "htpps://discord.gg/FGw4nCbfqB"
              },
              {
                label: "GitHub",
                href: "https://github.com/AmethystCraft",
              },
              /*
              {
                label: "Blog",
                to: "/blog",
              },
              */
            ],
          },
          {
            title: "Contacts",
            items: [
              {
                label: "Email",
                href: "mailto:support@nur-arifin.my.id"
              },
              {
                label: "WhatsApp",
                href: "https://api.whatsapp.com/send/?phone=6285292806060",
              },
            ],
          },
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()}
        <a href="https://github.com/ipincamp" target="_blank">ipincamp</a>. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
