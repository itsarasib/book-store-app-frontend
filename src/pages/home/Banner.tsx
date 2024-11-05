import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end ">
        <img src={bannerImg} alt="banner-img" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          aspernatur suscipit asperiores libero maiores, quis beatae quidem
          quaerat consectetur, inventore ratione nesciunt voluptate eius
          molestias delectus quisquam at aut hic?
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
