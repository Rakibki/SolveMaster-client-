import Container from "../../utils/container/Container";
import HeroImage from "../../assets/images/about_1.png";
import HeroImageBgShape from "../../assets/images/heroBgShape.png";

const Hero = () => {
  return (
    <section className="min-h-[100wh] bg-gradient-to-r from-[#170F2F] to-[rgb(26,27,84)]">
      <Container>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <h1 className="text-4xl text-white font-bold">
              Cloud-based LMS Trusted by 1000+
            </h1>
            <p className="text-[#fff] my-4">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry. Lorem Ipsum has been
            </p>
            <button className="btn">View Courses</button>
          </div>
          <div className="flex-1 h-[600px] relative">
            <img className="absolute top-1 z-30" src={HeroImage} alt="Hero Image" />
            <img
              className="absolute top-1 z-20"
              src={HeroImageBgShape}
              alt="Hero Image shape"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
