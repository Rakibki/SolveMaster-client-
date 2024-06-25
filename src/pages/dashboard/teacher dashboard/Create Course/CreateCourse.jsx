import { useContext, useState } from "react";
import { authContext } from "../../../../provider/authProvider/AuthProvider";
import Loader from "../../../../components/loader/Loader";
import Container from "../../../../utils/container/Container";
import { v4 as uuidv4 } from "uuid";
import uploadeImage from "../../../../utils/uploade Image/uploadeImage";
import { FaArrowRightLong } from "react-icons/fa6";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const { user } = useContext(authContext);
  const [topics, setTopics] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [couseData, setCouseData] = useState({
    couseId: uuidv4(),
    title: "",
    platform: "Coursera",
    videoUrl: "",
    topics: [],
    level: "",
    duration: "",
    instructorName: user?.displayName,
    instructorEmail: user?.email,
    rating: 0,
    reviews: 0,
    description: "",
    prerequisites: "",
    format: "Video lectures, quizzes, and coding exercises.",
    language: "",
    certificate: "",
    last_updated: new Date().toLocaleDateString(),
    course_image: "",
    regularPrice: "",
    CourseType: "",
    couseStatus: "Pending",
    discountedPrice: "",
  });

  const handleCouseImage = async (e) => {
    const imagefile = await e.target?.files[0];
    const image = await uploadeImage(imagefile);
    setCouseData({
      ...couseData,
      course_image: image,
    });
  };

  const handleChange = (event) => {
    setCouseData({
      ...couseData,
      [event.target.name]: event.target.value,
    });
  };

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    const topic = e.target.Topic.value;

    const updatedTopics = [...topics, topic];
    setTopics(updatedTopics);

    setCouseData({
      ...couseData,
      topics: updatedTopics,
    });
  };

  const handleCourseCreate = async () => {
    if (!user) {
      return alert("Login first");
    }
    await axiosSecure.post("/api/v1/course",  couseData);
    navigate("/dashboard/MyCourse");
  };

  return (
    <main>
      <div>
        <Container>
          <h2 className="text-2xl mb-5">Create Course</h2>
          <div className="grid mb-11 gap-5 grid-cols-7">
            <div className="flex col-span-5 flex-col gap-4">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-2xl text-black font-medium">
                  Course Info
                </div>
                <div className="collapse-content">
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Course Title</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="Course Title"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 items-center gap-3">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Free Regular Price ($)
                          </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="Free Regular Price ($)"
                          className="input input-bordered"
                          name="regularPrice"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Discounted Price ($)
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Discounted Price ($)"
                          className="input input-bordered"
                          name="discountedPrice"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 items-center grid-cols-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">level</span>
                        </label>

                        <select
                          className="input input-bordered"
                          name="level"
                          onChange={handleChange}
                          id="level"
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            {" "}
                            <label className="label">
                              <span className="label-text">CourseType</span>
                            </label>
                          </span>
                        </label>
                        <select
                          onChange={handleChange}
                          className="input input-bordered"
                          name="CourseType"
                          id="CourseType"
                        >
                          <option value="Paid">Paid</option>
                          <option value="Free">Free</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="grid gap-5 items-center grid-cols-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">duration</span>
                          </label>

                          <select
                            className="input input-bordered"
                            name="duration"
                            id="duration"
                            onChange={handleChange}
                          >
                            <option value="5 hr">5 hr</option>
                            <option value="10 hr">10 hr</option>
                            <option value="more then 20 hr">
                              more then 20 hr
                            </option>
                          </select>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              <label className="label">
                                <span className="label-text">language</span>
                              </label>
                            </span>
                          </label>
                          <select
                            onChange={handleChange}
                            className="input input-bordered"
                            name="language"
                            id="language"
                          >
                            <option value="English">English</option>
                            <option value="Bangla">Bangla</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Prerequisites</span>
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="prerequisites"
                        placeholder="Prerequisites"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          onChange={handleChange}
                          className="input h-[200px] input-bordered"
                          name="description"
                          id="description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-2xl text-black font-medium">
                  Course Intro
                </div>
                <div className="collapse-content">
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Video url</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="videoUrl"
                        placeholder="Video url"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        onChange={handleCouseImage}
                        type="file"
                        name="file"
                        id="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-2xl text-black font-medium">
                  topics
                </div>

                <div className="collapse-content">
                  <div>
                    <form onSubmit={handleTopicSubmit}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Topic:</span>
                        </label>
                        <input
                          type="text"
                          name="Topic"
                          placeholder="Topic"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <button type="submit" className="btn mt-3 btn-primary">
                        Add topic
                      </button>
                    </form>
                  </div>
                </div>

                <div className="px-7">
                  <h3 className="text-xl">Added Topics:</h3>
                  {topics.map((item, index) => {
                    return (
                      <div className="p-5" key={index}>
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div
                  onChange={handleChange}
                  className="collapse-title text-2xl text-black font-medium"
                >
                  Certificate Template
                </div>
                <div className="collapse-content">
                  <div>
                    <div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Certificate</span>
                        </label>
                        <select
                          onChange={handleChange}
                          className="input input-bordered"
                          name="Certificate"
                          id="Certificate"
                        >
                          <option value="label one">label one</option>
                          <option value="label two">label two</option>
                          <option value="label three">label three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-xl p-4 border-[1px] border-[#5F2DED] col-span-2">
              <h2 className="text-xl">Course Upload Tips</h2>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex gap-2">
                  <div>
                    <FaArrowRightLong className="text-lg mt-1 text-[5F2DED]" />
                  </div>
                  <div>
                    <p>Set the Course Price option make it free.</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <FaArrowRightLong className="text-lg mt-1 text-[5F2DED]" />
                  </div>
                  <div>
                    <p>Set the Course Price option make it free.</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <FaArrowRightLong className="text-lg mt-1 text-[5F2DED]" />
                  </div>
                  <div>
                    <p>Set the Course Price option make it free.</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <FaArrowRightLong className="text-lg mt-1 text-[5F2DED]" />
                  </div>
                  <div>
                    <p>Set the Course Price option make it free.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="btn btn-primary">Review</button>
              <button onClick={handleCourseCreate} className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default CreateCourse;
