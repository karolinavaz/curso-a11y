import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
    useEffect(() => {
        axeAccessibilityReporter()
      },[])
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
