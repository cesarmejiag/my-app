import Layout from "../components/layout";

export default function Landing({ title }) {
  const config = {
    navOptions: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/products", text: "Products" },
      { href: "/contact", text: "Contact" },
    ],
  };

  return (
    <Layout config={config}>
      <h1>{title}</h1>
    </Layout>
  );
}

Landing.getInitialProps = async function ({ query }) {
  return {
    title: query?.title,
  };
};