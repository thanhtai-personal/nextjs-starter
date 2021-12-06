module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98f07bb1376cfc8ed56430e5cd9fa628'),
  },
});
