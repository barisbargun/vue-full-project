import z from 'zod';
const createEnv = () => {
  const EnvSchema = z.object({
    API_URL: z.string().optional().default('http://localhost:3001'),
  });

  const envVars = {
    API_URL: import.meta.env.VITE_API_URL,
  };

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
        .map(([k, v]) => `- ${k}: ${v}`)
        .join('\n')}
  `,
    );
  }

  return parsedEnv.data ?? {};
};

export default createEnv();