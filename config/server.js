module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3287),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5965d14c-2739-4274-bdeb-cd7608b81fbd'),
    },
  },
});
