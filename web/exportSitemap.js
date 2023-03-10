const { exportPathMap } = require("./next.config");
const sm = require("sitemap");
const fs = require("fs");

exportPathMap().then((res) => {
  const sitemap = sm.createSitemap({
    hostname: "https://famous-scone-ecfd20.netlify.app",
    cacheTime: 60000,
  });

  Object.keys(res).map((page) => {
    const item = res[page];
    const { includeInSitemap, disallowRobots, _updatedAt } = item;
    if (includeInSitemap && !disallowRobots) {
      sitemap.add({ url: page, lastmod: new Date(_updatedAt) });
    }
  });

  fs.writeFile(`./out/sitemap.xml`, sitemap.toString(), (err) => {
    if (err) throw err;
    console.log(`sitemap.xml updated`);
  });
});
