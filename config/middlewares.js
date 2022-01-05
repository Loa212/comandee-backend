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
          "img-src": ["'self'", "data:", "blob:", "sheeesh", `//${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`, `${env("CDN_BASE_URL")}`],
          "media-src": ["'self'", "data:", "blob:", `//${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`, `${env("CDN_BASE_URL")}`],
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
