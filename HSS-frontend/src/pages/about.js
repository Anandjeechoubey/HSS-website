import React, { useEffect, useState } from "react";
import HeroSection from "components/hero";
import history from "assets/images/history.png";
import hod from "assets/images/hod.png";
import OverflowCard from "components/overflowCard";
import MemberCard from "components/member";
import { GetCommittees } from "apis/restAPIs";

function About() {
  const [committiees, setCommittiees] = useState([]);
  const [data, setData] = useState([]);

  const fetchList = async () => {
    const { data } = await GetCommittees();
    if (!data) return null;

    setData(data);
    const commlist = data.map((item) => item[0]?.committee);
    setCommittiees(commlist);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <HeroSection>
        <h1 className="section-heading">About</h1>
        <p className="section-content">
          The department teaches on a number of core and optional UG/PG courses including courses such as technical communication and other ‘Basic’ core courses in all of its disciplines. The
          department has PhD programme in all of its disciplines. The programme is divided into coursework and dissertation writing.
        </p>
        <p className="section-content">
          The coursework part is composed of four Pre-PhD courses of four credits each. Students will have to complete these courses in the first year of their joining the PhD programme.
        </p>
      </HeroSection>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap grey-section">
        <img className="home--hist-img" src={history} />
        <div className="ofc--card about--history-card">
          <h1 className="section-heading">Our History</h1>
          <p className="section-content about--font-sm">
            The Department of Humanities and Social Sciences in IIT Roorkee (erstwhile University of Roorkee) was established in 1966 with a vision to integrate human values and social concerns with
            technical education. Over the years, it has developed into a lively department, encompassing teaching and research programs in the areas of English, Economics, Philosophy, Psychology,
            Sociology, Fine Arts and related inter & cross disciplinary subjects. Seventy two scholars have been awarded the Ph.D. degrees across different disciplines of the department. One of the
            notable achievements in recent years has been the expansion in research activities and exchanges of ideas, facilitated by the constant surge of discussions, consultations and publications
            in esteemed and high impact journals. Besides, there has been considerable progression of tangible and scholastic infrastructure which in process provides an impetus to its bright future.
          </p>
        </div>
      </section>

      <section className="padded-container mt-5">
        <h1 className="section-heading text-center pt-5 mb-0">From HOD’s Desk</h1>
        <OverflowCard
          content={
            <>
              Head of Department
              <span className="about--hod-name">Nagendra Kumar</span>
              Humanities and Social Science Department,
              <br /> IIT Roorkee
            </>
          }
          img={hod}
          indent="right"
        />
      </section>

      <section className="padded-container mx-auto about--hod-note">
        <h2>HOD’s Note</h2>
        <p>
          The above-quoted verse very aptly indicates the value of finer sensibilities in one’s life. Hence, the education which only helps us grow mechanically, without sensitivity to human feelings
          and problems, is not only inappropriate but also inadequate and misguided.
        </p>
        <p>
          Probably this thinking may have led to the idea of having a strong input of humanities and social sciences alongside the study of engineering and technology. The humanities and social
          sciences component acts like a vital cog in the engineering and technology institutions as it keeps the finer sensibilities and social responsibilities alive in engineers paving the way for
          a composite, sustainable and desirable development which venerates the environment as well as human sensitivity while promoting excellence in science and technology.
        </p>
        <p>
          Department of Humanities & Social Sciences, IIT Roorkee, established in the year 1966 with a vision to integrate science and technology with human values and social understanding, has taken
          giant strides by contributing significantly to the making of engineers and technocrats who are alive to and aware of their role in nation building and responsibilities towards mankind.
        </p>
        <p>
          By imparting skill-based courses in Economics, English, Psychology and Sociology, the department endeavours to form well-rounded individuals. It targets both the timely and timeless needs of
          the students as it fills them with the much-needed job-ready skills and values that make them desirable as individuals. The Department has grown many-folds since its inception.
        </p>
        <p>
          Apart from offering core courses in all its broad areas, the department also offers some optional and evening courses to the students of the institute. In the year 2016, the department
          started a two-year M.Sc. programme in Economics which has got a very enthusiastic response. The department has a very strong research unit comprising over 100 students working in diverse
          areas of their core competencies as well as in the interdisciplinary domains. The department has world class faculty who have been contributing their research to renowned national and
          international journals and have significant linkages to the industry and other sister institutions.
        </p>
        <p>
          It has a distinguished record in both teaching and research as many of the faculty members have been conferred with prestigious awards at national and international levels. Several faculty
          members serve on the editorial boards of national and international journals, as office bearers in boards and associations, review articles for journals on a regular basis, and organize
          symposia, conferences, workshops and short-term courses apart from offering NPTEL courses.
        </p>
        <p>
          The department has excellent infrastructural support for carrying out quality research as it is equipped with state of the art Communication Research and Training Laboratory, a Psychology
          Laboratory, an Economic Database, Computer Laboratory and a well-stocked Department Library. I invite all of you to join this joyful academic ride together and enrich and get enriched by the
          meaningful academic exchanges.
        </p>
        <p>With best regards,</p>
        <p style={{ fontWeight: 500 }}>
          Nagendra Kumar, <br />
          Professor & Head <br />
          Dept. of Humanities & Social Sciences.
        </p>
      </section>

      {committiees.map((item, index) => (
        <section className={`padded-container ${index % 2 === 0 && "grey-section"}`} key={index}>
          <h2 className="section-heading text-center pt-5">{item}</h2>
          <div className="fac--grid mx-auto pt-5">
            {data[index].map((member) => (
              <MemberCard name={member?.name} desg={member?.designation} image={member?.img} key={member?.id} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default About;
