import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/**
 * ESLint 9 Flat Config.
 * `eslint-config-next/core-web-vitals` is already a flat-config array and
 * bundles the TypeScript parser/rules (replacing the old `next/typescript`).
 */
const config = [
  {
    ignores: [
      ".next/**",
      ".open-next/**",
      ".wrangler/**",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
      "cloudflare-env.d.ts",
      "worker-configuration.d.ts",
    ],
  },
  ...nextCoreWebVitals,
];

export default config;
