/* eslint-env node */

import { siteUrl } from "./config";

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: siteUrl,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
  // output: "export", // Set static output here
  exclude: ["/icon.svg"]
}
