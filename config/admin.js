module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a2cc2628af1bb6f61316af2a5f7bd1f'),
  },
});
