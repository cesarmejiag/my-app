import Layout from "../components/layout";

export default function Template({ config, id }) {
  return (
    <Layout config={config}>
      <h1>Template {id}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "about" } },
      { params: { id: "products" } },
      { params: { id: "contact" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { ...params },
  };
}
