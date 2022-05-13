import Layout from "@common/Layout";
import Xstate from "@components/Xstate";
import { ReactElement } from "react";

const Home = () => {
  return <Xstate />;
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Xstate management">{page}</Layout>;
};
