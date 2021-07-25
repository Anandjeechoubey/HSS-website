import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { GetStudentList } from "apis/restAPIs";
import ScholarCard from "components/scholarCard";

const Scholars = () => {
  const [fullTime, setFullTime] = useState([]);
  const [partTime, setPartTime] = useState([]);

  const FetchScholars = async () => {
    let FT = [];
    let PT = [];

    const { data } = await GetStudentList();

    data.forEach((item) => {
      if (item.type === "Full Time") return FT.push(item);
      PT.push(item);
    });

    setFullTime(FT);
    setPartTime(PT);
  };

  useEffect(() => {
    FetchScholars();
  }, []);

  return (
    <>
      <section className="padded-container">
        <Container fluid className="mx-0 px-0">
          <p className="breadcrump">
            <Link to="/people">{`People >`}</Link> Research Scholars
          </p>
        </Container>
        <h1 className="section-heading mb-3">Research Scholars</h1>
        <p className="section-content max-width-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="padded-container">
        <h2 className="section-heading mb-3">Full Time Scholars</h2>
        {fullTime.map((scholar) => (
          <ScholarCard key={scholar.id} {...scholar} />
        ))}
      </section>

      <section className="padded-container">
        <h2 className="section-heading mb-3">Part Time Scholars</h2>
        {partTime.map((scholar) => (
          <ScholarCard key={scholar.id} {...scholar} />
        ))}
      </section>
    </>
  );
};

export default Scholars;
