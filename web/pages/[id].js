export default function Template() {
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
