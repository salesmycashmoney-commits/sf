const requiredEnvVars = [
  'VITE_API_BASE_URL',
] as const;

export const validateEnv = () => {
  const missing = requiredEnvVars.filter(
    (envVar) => !import.meta.env[envVar]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
};
