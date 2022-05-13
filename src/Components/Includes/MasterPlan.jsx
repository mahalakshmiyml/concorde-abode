import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import AllImages from "./AllImages";
import FourBhk from "./FourBhk";
import MasterPlanImages from "./MasterPlanImages";
import ThreeBhk from "./ThreeBhk";


const MasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center fs-3">
        Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <AllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <MasterPlanImages />
        </Tab>
        <Tab eventKey="three-bhk" title="3BHK">
          <ThreeBhk />
        </Tab>
        <Tab eventKey="four-bhk" title="4BHK">
          <FourBhk />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MasterPlan;
