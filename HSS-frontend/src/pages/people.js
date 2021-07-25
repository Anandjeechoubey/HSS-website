import React, { useEffect, useState } from "react";
import HeroSection from "components/hero";
import history from "assets/images/history.png";
import Button from "react-bootstrap/Button";
import { GetStaffList } from "apis/restAPIs";
import MemberCard from "components/member";
import { Link } from "react-router-dom";

function People() {
  const [staffList, setStaffList] = useState([]);

  const fetchStaffList = async () => {
    const { data } = await GetStaffList();
    setStaffList(data);
  };

  useEffect(() => {
    fetchStaffList();
  }, []);

  return (
    <>
      <HeroSection>
        <h1 className="section-heading">People</h1>
        <p className="section-content">
          The number of Faculty, Students and supporting Staff at Department of Humanities and Social Sciences is around 150. They come with different backgrounds like Psychology, Sociology,
          Philosophy, English (Literature, Linguistics, ELT) , Economics and many more.
        </p>
      </HeroSection>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap grey-section">
        <img className="home--hist-img" src={history} />
        <div>
          <h1 className="section-heading">Faculty</h1>
          <p className="section-content">
            There are 25 Faculty Members. They interact with governmental and non-governmental organizations for organizing seminars, conducting short term courses for students and faculty through
            workshops and seminars and workshops, consultancy programme, and holding exhibitions.
          </p>
          <Link to="/people/faculty">
            <Button variant="outline-primary">View All Faculty</Button>
          </Link>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap">
        <div>
          <h1 className="section-heading">Research Scholars</h1>
          <p className="section-content">
            HSS strives to provide students with excellent infrastructure and environment. The Faculty and Students actively participate in ongoing projects, seminars, weekly presentations as well as
            other extra curricular activities. HSS expects students to explore research, to enrich their knowledge and gain confidence and excel in their chosen field.
          </p>
          <Link to="/people/research-scholars">
            <Button variant="outline-primary">View All Students</Button>
          </Link>
        </div>
        <img className="home--hist-img mr-0 ml-5" src={history} />
      </section>

      <section className="padded-container grey-section">
        <h2 className="section-heading mb-3">Office Staff</h2>
        <p className="section-content">List of all HSS supporting Staff Members.</p>
        <div className="fac--grid mx-auto pt-5">
          {staffList.map((staff) => (
            <MemberCard name={staff?.name} desg={staff?.designation} image={staff?.img} key={staff?.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default People;
