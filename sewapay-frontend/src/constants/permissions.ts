export const PERMISSIONS = {
  SUPER_ADMIN: [
    'manage_admins',
    'view_reports',
    'manage_whitelabels',
    'manage_b2c',
    'manage_distributors',
    'manage_retailers',
  ],
  ADMIN: [
    'view_reports',
    'manage_b2c',
    'manage_distributors',
    'manage_retailers',
  ],
  WHITELABEL: [
    'view_reports',
    'manage_b2c',
    'manage_distributors',
    'manage_retailers',
  ],
  B2C_ADMIN: [
    'view_reports',
    'manage_customers',
  ],
  DISTRIBUTOR: [
    'view_reports',
    'manage_retailers',
  ],
  RETAILER: [
    'view_reports',
  ],
};
