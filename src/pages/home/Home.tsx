import Banner from "./Banner";
import News from "./News";
import Recommened from "./Recommened";
import TopSeller from "./TopSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSeller />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
