import Clock from "../components/clock";
import Layout from "../components/layout";

export default function Home() {
  const config = { navOptions: ["Home", "About", "Contact"] };
  return (
    <Layout config={config}>
      <Clock />
    </Layout>
  );
}
