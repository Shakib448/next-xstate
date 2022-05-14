import Layout from "@common/Layout";
import Counter from "@components/Counter";
// import JokeSearch from "@components/JokeSearch";
import { ReactElement } from "react";

const Home = () => {
  return <Counter />;
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Xstate management">{page}</Layout>;
};
