module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '1vl5j0anles8ejmf4qf69h99r3zazw0ydmpsy4p'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a2cc2628af1bb6f61316af2a5f7bd1f'),
  },
});
