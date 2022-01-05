module.exports = ({ env }) => [

  //updates from
  //https://github.com/zoomoid/strapi-provider-upload-aws-s3-advanced
  //needed to allow the thumbnails to properly populate
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", `${env("CDN_BASE_URL")}`, `${env("AWS_BASE_URL")}`],
          "media-src": ["'self'", "data:", "blob:", `${env("CDN_BASE_URL")}`, `${env("AWS_BASE_URL")}`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  //end updates

  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
