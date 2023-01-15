export default function Template({ foo }) {
  console.log(foo);
  return <div>Template</div>;
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

export async function getStaticProps(context) {
  return {
    props: { foo: "Hello World" },
  };
}
