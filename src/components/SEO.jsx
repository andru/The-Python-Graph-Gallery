// made following the Gatsby Doc: https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/

// This component is called by every page of the website.
// At the top of each page you will find a Head component export that calls this SEO component

// The SEO component will add stuff like title, description, image, lang... in the head of the HTML page

import React from 'react';
import { Script } from 'gatsby';

function getAdThriveScriptUrl() {
  if (typeof window === 'undefined') {
    return '';
  }
  const w = window;
  w.adthrive = w.adthrive || {};
  w.adthrive.cmd = w.adthrive.cmd || [];
  w.adthrive.plugin = 'adthrive-ads-manual';
  w.adthrive.host = 'ads.adthrive.com';
  return (
    'https://' +
    w.adthrive.host +
    '/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer=' +
    w.encodeURIComponent(w.location.href) +
    '&cb=' +
    (Math.floor(Math.random() * 100) + 1)
  );
}

export const SEO = ({ title, seoDescription, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto|Montserrat"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content={seoDescription || 'How to build a chart with Python'}
      />
      <meta name="author" content="Yan Holtz" />
      <meta
        name="keywords"
        content={keywords || 'python, chart, graph, code, viz, dataviz'}
      />

      <meta property="og:site_name" content="The Python Graph Gallery" />
      <meta
        property="og:title"
        content={title + ' | The Python Graph Gallery'}
      />
      <meta
        property="og:image"
        content="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"
      />
      <meta property="og:description" content={seoDescription} />
      <meta
        name="twitter:image"
        content="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"
      />
      <Script id="adthrive" strategy="idle" src={getAdThriveScriptUrl()} />
    </>
  );
};
