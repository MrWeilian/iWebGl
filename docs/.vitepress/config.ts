import { defineConfig } from 'vitepress'
import { sidebar, mdPlugin } from './configs'
import fs from 'fs'
import path from 'path'

const vpRoot = path.resolve(__dirname, '../')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iceWebGl",
  description: 'iceWebGl',
  lastUpdated: true,
  markdown: {
    config: (md) => mdPlugin(md)
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png'
      }
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        if (location.host.includes('localhost')) return;
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a84e5bcfbdb6e96bed2d847adf7271da";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: '🧊 上车指南', activeMatch: '^/content', link: '/content/一、前言/1. 导读' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MrWeilian/iWebGl' }
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 2023-present 井柏然'
    }
  }
})
