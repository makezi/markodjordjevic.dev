import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

function Head({ children, title }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap" />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <title>{title}</title>

        {children}
      </NextHead>
    </>
  );
}

function Layout({ children }) {
  return (
    <>
      <Head title="Marko Djordjevic Portfolio" />
      {children}
    </>
  );
}

export { Layout };