module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '402615f520d56ed2a82e9167a58682e0'),
  },
});
