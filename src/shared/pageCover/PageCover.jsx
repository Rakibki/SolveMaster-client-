import Container from "../../utils/container/Container";
import CoverBgShapeOne from "../../assets/images/herobanner__2.png";
import CoverBgShapeTwo from "../../assets/images/herobanner__5.png";
import CoverBgShapeThree from "../../assets/images/herobanner__1.png";

const PageCover = ({ title }) => {
  return (
    <section className="bg-[rgb(245,245,254)] w-full">
      <Container>
        <div className="h-[350px] flex justify-start items-center relative">
          <div>
            <h2 className="text-4xl">{title}</h2>
          </div>

          <img
            className="absolute top-3 left-3"
            src={CoverBgShapeOne}
            alt="CoverBgShapeOne"
          />
          <img
            className="absolute bottom-3 left-3"
            src={CoverBgShapeTwo}
            alt="CoverBgShapeTwo"
          />
          <img
            className="absolute top-3 right-3"
            src={CoverBgShapeThree}
            alt="CoverBgShapeThree"
          />
        </div>
      </Container>
    </section>
  );
};

export default PageCover;
