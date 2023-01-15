import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.config = {
    navOptions: [
      { href: "", text: "Home" },
      { href: "about", text: "About" },
      { href: "products", text: "Products" },
      { href: "contact", text: "Contact" },
    ],
  };

  return {
    pageProps,
  };
};
