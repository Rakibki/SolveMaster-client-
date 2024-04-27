import Container from "../../utils/container/Container";
import AboutImage1 from "../../assets/images/about_2.png";
import AboutImage2 from "../../assets/images/about_3.png";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <section className="my-11">
      <Container>
        <div className="flex items-center gap-9">
          <div className="flex-1 flex justify-center relative">
            <img src={AboutImage1} alt="about image one" />
            <img
              src={AboutImage2}
              className="absolute bottom-1 right-1"
              alt="about image two"
            />
            <div className="flex absolute bottom-2 left-6 w-[300px] bg-slate-700 gap-2">
              <h4 className="text-3xl">2 +</h4>
              <h4 className="text-lg">YEARS EXPERIENCE JUST ACHIVED</h4>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl">Welcome to the Online Learning Center</h2>
            <p className="mt-2">
              25+Contrary to popular belief, Lorem Ipsum is not simply random
              text roots in a piece of classical Latin literature from 45 BC
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FaArrowRight />
                <p>Explore a variety of fresh educational teach</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaArrowRight />
                <p>Explore a variety of fresh educational teach</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaArrowRight />
                <p>Explore a variety of fresh educational teach</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaArrowRight />
                <p>Explore a variety of fresh educational teach</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaArrowRight />
                <p>Explore a variety of fresh educational teach</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
