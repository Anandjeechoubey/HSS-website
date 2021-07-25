import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import iitr from "assets/images/iitr-long.png";

const EconomicDB = () => {
  return (
    <>
      <section className="padded-container">
        <Container fluid className="mx-0 px-0">
          <p className="breadcrump">
            <Link to="/facilities">{`Facilities >`}</Link> Economic Database
          </p>
        </Container>
        <h1 className="section-heading mb-3">Economic Database</h1>
        <img src={iitr} className="eco-db--hero" alt="iitr" />
      </section>
      <section className="padded-container mx-auto about--hod-note" style={{ background: "#fff" }}>
        <p>
          Department of Humanities and Social Sciences maintains the collection of several economic databases as an attempt to render its dedicated support to the students, researchers and faculties.
          This endeavour provides cutting- edge information for research and teaching in Economics. The list of databases includes the following:
        </p>
        <img src={iitr} className="my-5" style={{ width: "100%" }} alt="iitr" />
        <h2>Annual Survey of Industries</h2>
        <p>
          The Annual Survey of Industries (ASI) is the principal source of industrial statistics in India. The comprehensive and detailed data obtained from ASI can be used for the estimation of the
          contribution of industrial sector in the State economy, and for systematic study of various structural aspects of the industry. As a continuous effort, the department has maintained the
          record of ASI data since 1998-99.
        </p>
        <h2>Census Data</h2>
        <p>
          This data forms the benchmark for framing of the welfare and development policies for billions of population living in India. It covers the information about population projections, density
          of population, the state of literacy, gender composition of population, the size and the rate of growth of population, etc. Census data on population, economic activities, migration and
          socio-cultural characteristics of the people is a comprehensive source of information for framing demographic policies.
        </p>
        <h2>Indiastat.com</h2>
        <p>
          It is a portal for country-specific, state-specific, sector-specific and region-specific, secondary level socio-economic statistical facts and figures on more than 35 variables. This online
          gateway includes statistics on demographics, health, higher education, agricultural and industrial production, etc. Information from specific sectors such as banking and financial
          institutions, companies, co-operatives, crime and law, population, foreign trade, labor and workforce, housing, media, power, and transportation are also included in this data source.
        </p>
        <h2>National Sample Survey (NSS)</h2>
        <p>
          The National Sample Survey Organization (NSSO) has been conducting nationwide sample surveys on various socio-economic aspects since 1950. These surveys are conducted in the form of rounds
          extending normally over a period of one year. Each NSS round provides data on the state-wise as well as district- wise estimates on certain socio-economic indicators. The various rounds
          conducted by NSSO cover major areas such as employment-unemployment; unorganized enterprises in non-agricultural sectors; population, births, deaths, disability, morbidity, fertility,
          maternity & child care, and family planning; land holdings and livestock enterprises; and debt, investment and capital formation; etc. The department has kept stock of the National Sample
          Survey (NSS) unit-level record data till the 68th Round.
        </p>
      </section>
    </>
  );
};

export default EconomicDB;
