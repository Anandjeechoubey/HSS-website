import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { GetPhdAwarded } from "apis/restAPIs";

export default function PhdCard() {
  const [showAll, setShowAll] = useState(false);
  const [list, setList] = useState([]);

  const GetData = async () => {
    const { data } = await GetPhdAwarded();
    setList(data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div className="phd--grid mt-5">
        {list.map((item, index) => {
          if (index > 2 && !showAll) return null;

          return (
            <div className="phd--card" key={item.id}>
              <img className="phd--dp" alt={item.name} src={item.img} />
              <h1 className="phd--name">{item.name}</h1>
              <div className="phd--label">
                <span>Discipline</span>
                <span>Supervisor(s)</span>
              </div>
              <div className="phd--content">
                <span>{item.disicpline}</span>
                <span>{item.supervisor}</span>
              </div>
              <div className="phd--hr" />
              <p className="phd--label phd--full">Thesis Topic</p>
              <p className="phd--content phd--full mb-5" style={{ fontSize: "0.875rem" }}>
                {item.thesis}
              </p>
              <div className="phd--cta phd--full d-flex justify-content-center">
                <a href={item.link}>Read e-Dissertation →</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="outline-primary" onClick={() => setShowAll(!showAll)}>
          View {showAll ? "Less" : "More"}
        </Button>
      </div>
    </>
  );
}
