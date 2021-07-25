import React, { useEffect, useState } from "react";
import HeroSection from "components/hero";
import Button from "react-bootstrap/Button";
import { GetResearch } from "apis/restAPIs";

function Research() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const GetData = async () => {
    const { data } = await GetResearch();
    setIncomplete(data[0]);
    setCompleted(data[1]);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <HeroSection>
        <h1 className="section-heading">Research</h1>
        <p className="section-content">
          The department is invested in doing cutting-edge research in several of its disciplines. Currently, the focussed areas for Economics are labour economics, climate change and disaster,
          conservation, cleaning the Ganges, etc. The English discipline has expertise in modern and contemporary British literature, Indian writings, postcolonial literature, ecocriticism, and
          linguistics.
        </p>
      </HeroSection>

      <section className="padded-container pb-0">
        <h1 className="section-heading mb-4">Projects</h1>
        <p className="section-content">
          The department is invested in doing cutting-edge research in several of its disciplines. Currently, the focussed areas for Economics are labour economics, climate change and disaster,
          conservation, cleaning the Ganges, etc.
        </p>
      </section>

      <section className="padded-container">
        <h2 className="section-heading-sm mt-5 mb-3">Ongoing Projects</h2>
        {incomplete.map((item) => (
          <a className="ann--wrapper" key={item.id}>
            <p className="ann--spons">Sponsored by: IIT Roorkee</p>
            <h2 className="ann--title">{item.headline}</h2>
            <p className="ann--date">
              Durations: {item.durations} Years &#8226; By {item.project_by}
            </p>
          </a>
        ))}
        <div className="d-flex my-5">
          <Button variant="outline-primary" href="#">
            View all projects →{" "}
          </Button>
        </div>
      </section>

      <section className="padded-container">
        <h2 className="section-heading-sm mt-5 mb-3">Completed Projects</h2>
        {completed.map((item) => (
          <a className="ann--wrapper" key={item.id}>
            <p className="ann--spons">Sponsored by: IIT Roorkee</p>
            <h2 className="ann--title">{item.headline}</h2>
            <p className="ann--date">
              Durations: {item.durations} Years &#8226; By {item.project_by}
            </p>
          </a>
        ))}
        <div className="d-flex my-5">
          <Button variant="outline-primary" href="#">
            View all projects →{" "}
          </Button>
        </div>
      </section>
    </>
  );
}

export default Research;
