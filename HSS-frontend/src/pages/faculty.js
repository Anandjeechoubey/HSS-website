import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { GetFacultyList } from "apis/restAPIs";
import FacultyCard from "components/FacultyCard";

const Faculty = () => {
  const [hod, setHod] = useState([]);
  const [asst, setAsst] = useState([]);
  const [prof, setProf] = useState([]);
  const [asso, setAsso] = useState([]);

  const FetchFaculty = async () => {
    const { data } = await GetFacultyList();

    let rawHod = [];
    let rawAsst = [];
    let rawProf = [];
    let rawAsso = [];

    data.forEach((element) => {
      switch (element.type) {
        case "Head Of Department":
          return rawHod.push(element);

        case "Assistant Professor":
          return rawAsst.push(element);

        case "Professor":
          return rawProf.push(element);

        case "Associate Professor":
          return rawAsso.push(element);

        default:
          return null;
      }
    });

    setHod(rawHod);
    setAsst(rawAsst);
    setProf(rawProf);
    setAsso(rawAsso);
  };

  useEffect(() => {
    FetchFaculty();
  }, []);

  return (
    <>
      <section className="padded-container pb-1">
        <Container fluid className="mx-0 px-0">
          <p className="breadcrump">
            <Link to="/people">{`People >`}</Link> Faculty
          </p>
        </Container>
        <h1 className="section-heading mb-3">Faculty</h1>
      </section>

      <section className="padded-container pt-0">
        <h2 className="section-heading mb-3">Head Of Department</h2>
        {hod.map((item) => (
          <FacultyCard key={item.id} {...item} />
        ))}
      </section>

      <section className="padded-container pt-0">
        <h2 className="section-heading mb-3">Professor</h2>
        {prof.map((item) => (
          <FacultyCard key={item.id} {...item} />
        ))}
      </section>

      <section className="padded-container pt-0">
        <h2 className="section-heading mb-3">Associate Professor</h2>
        {asso.map((item) => (
          <FacultyCard key={item.id} {...item} />
        ))}
      </section>

      <section className="padded-container pt-0">
        <h2 className="section-heading mb-3">Assistant Professor</h2>
        {asst.map((item) => (
          <FacultyCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default Faculty;
