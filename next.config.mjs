import withSerwistInit from "@serwist/next";
import crypto from "crypto"

const isProd = process.env.NODE_ENV === "production";


const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
});

export default withSerwist({
  assetPrefix: isProd ? "/pumpfun" : undefined
});
