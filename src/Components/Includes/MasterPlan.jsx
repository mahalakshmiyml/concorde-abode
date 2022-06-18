import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import AllImages from "./AllImages";
import FiveBhk from "./FiveBhk";
import FourBhk from "./FourBhk";
import MasterPlanImages from "./MasterPlanImages";
import SevenBhk from "./SevenBhk";
import SixBhk from "./SixBhk";
import ThreeBhk from "./ThreeBhk";


const MasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center fs-3">
        Concorde Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="Master Plan" className="text-dark">
          <AllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Layout 1" className="text-dark">
          <MasterPlanImages />
        </Tab>
        <Tab eventKey="three-bhk" title="Layout 2">
          <ThreeBhk />
        </Tab>
        <Tab eventKey="four-bhk" title="Layout 3">
          <FourBhk />
        </Tab>
        <Tab eventKey="seven-bhk" title="Layout 4">
          <SevenBhk />
        </Tab>
        <Tab eventKey="five-bhk" title="Layout 5">
          <FiveBhk />
        </Tab>
        <Tab eventKey="six-bhk" title="Layout 6">
          <SixBhk />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MasterPlan;
