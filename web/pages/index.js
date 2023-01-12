import Layout from "../components/layout";

export default function Home({ title }) {
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
      <h4>Index Tempalte</h4>
    </Layout>
  );
}

Home.getInitialProps = async function ({ query }) {
  return {
    title: query?.title,
  };
};
