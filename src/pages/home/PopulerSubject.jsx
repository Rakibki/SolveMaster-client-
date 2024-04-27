import Container from "../../utils/container/Container";
import populerSubjectBgShape from "../../assets/images/service__shape__bg__1.png";
import subjectImageOne from "../../assets/images/svgexport-3 (1).svg";

const PopulerSubject = () => {
  return (
    <section>
      <Container>
        <div className="flex gap-3">
          <div className="flex-1">
            <h2 className="text-3xl">Provide It & Technol Subject For You</h2>
            <p>
              Construction is a general term meaning the art and science to form
              systems organizations, and comes from Latin Construction is
            </p>
            <p>
              Construction is a general term meaning the art and science to form
              systems organizations, and comes from Latin Construction is a
              organizations, and comes from Latin construction and Old
            </p>
            <button>Explore More</button>
          </div>
          <div
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${populerSubjectBgShape})` }}
          >
            <div>
              <div>
                <div>
                  <img src={subjectImageOne} alt="subject image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopulerSubject;
