import { useContext, useState } from "react";
import { authContext } from "../../../../provider/authProvider/AuthProvider";
import Loader from "../../../../components/loader/Loader";
import Container from "../../../../utils/container/Container";
import { v4 as uuidv4 } from "uuid";

const CreateCourse = () => {
  const { user } = useContext(authContext);
  const { couseData, setCouseData } = useState({
    couseId: uuidv4(),
    title: "",
    platform: "Coursera",
    url: "demo",
    topics: [],
    level: "",
    duration: "",
    instructor: user?.displayName,
    rating: 0,
    reviews: 0,
    description: "",
    prerequisites: "",
    format: "Video lectures, quizzes, and coding exercises.",
    language: "",
    certificate: "",
    last_updated: new Date().toLocaleDateString(),
    course_image: "",
  });

  if (!user) {
    return <Loader />;
  }

  const handleChange = () => {};

  return (
    <main>
      <div>
        <Container>
          <h2 className="text-2xl mb-5">Create Course</h2>
          <div className="flex flex-col gap-4">
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
                        type="text"
                        placeholder="Free Regular Price ($)"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Discounted Price ($)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Discounted Price ($)"
                        className="input input-bordered"
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
                            <span className="label-text">COURSES</span>
                          </label>
                        </span>
                      </label>
                      <select
                        className="input input-bordered"
                        name="SHORTBYOFFER"
                        id="SHORTBYOFFER"
                      >
                        <option value="SHORTBYOFFER">Paid</option>
                        <option value="SHORTBYOFFER">Free</option>
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
                      type="text"
                      placeholder="Video url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="file"
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
                  <button className="btn btn-primary">Add topic</button>
                </div>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-2xl text-black font-medium">
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
                        className="input input-bordered"
                        name="Certificate"
                        id="Certificate"
                      >
                        <option value="Certificate">label one</option>
                        <option value="Certificate">label two</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default CreateCourse;
