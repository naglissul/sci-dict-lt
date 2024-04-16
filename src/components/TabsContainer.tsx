import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function TabsContainer({
  LtTab,
  UaRuLtTab,
  ArchiveTab,
  NlTab,
  ContributeTab,
}: {
  LtTab?: React.ReactNode;
  UaRuLtTab?: React.ReactNode;
  ArchiveTab?: React.ReactNode;
  NlTab?: React.ReactNode;
  ContributeTab?: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (key: any) => {
    navigate(key);
  };

  return (
    <Tabs activeKey={location.pathname} onSelect={handleSelect}>
      <Tab eventKey="/" title="LT" style={{ marginTop: "20px" }}>
        {LtTab}
      </Tab>
      <Tab eventKey="/ua-ru-lt" title="UA-RU-LT" style={{ marginTop: "20px" }}>
        {UaRuLtTab}
      </Tab>
      <Tab eventKey="/archive" title="Archive" style={{ marginTop: "20px" }}>
        {ArchiveTab}
      </Tab>
      <Tab eventKey="/nl" title="NL" style={{ marginTop: "20px" }}>
        {NlTab}
      </Tab>
      <Tab
        eventKey="/lt-contribute"
        title="LT Contribute"
        style={{ marginTop: "20px" }}
      >
        {ContributeTab}
      </Tab>
    </Tabs>
  );
}
