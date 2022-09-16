import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  return (
    <div className="App">
      <Plan1 />
      {/* {plans.map((plan, index) => {
        <Pricing plan={plan} key={index} />;
      })} */}
      <Plan2 />
      <Plan3 />
    </div>
  );
}

export default App;

function Plan1() {
  return (
    <div className="card">
      <div className="plans">
        <h5 className="selectedPlan text-muted">FREE</h5>
        <h3 className="price">
          $0 <span className="month"> /Month</span>
        </h3>
      </div>
      <hr />
      <div className="benefits">
        <ul className="list">
          <li className="listitems"> Single User</li>
          <li className="listitems"> 5GB Storage</li>
          <li className="listitems"> Unlimited Public Projects</li>
          <li className="listitems"> Community Access</li>
          <li className="listitems text-muted">Unlimited Private Projects</li>
          <li className="listitems text-muted">Dedicated Phone Support</li>
          <li className="listitems text-muted">Free Subdomain</li>
          <li className="listitems text-muted">Monthly Status Reports</li>
        </ul>

        {/* {plan.benefit.map((bfit) => {
          <Benefit benefit={bfit} />;
        })} */}
      </div>
      <Button className="btn btn-primary text-uppercase">Choose Plan</Button>
    </div>
  );
}

function Plan2() {
  return (
    <div className="card">
      <div className="plans">
        <h5 className="selectedPlan text-muted">Plus</h5>
        <h3 className="price">
          $9 <span className="month"> /Month</span>
        </h3>
      </div>
      <hr />
      <div className="benefits">
        <ul className="list">
          <li className="listitems">5 User</li>
          <li className="listitems">50GB Storage</li>
          <li className="listitems">Unlimited Public Projects</li>
          <li className="listitems">Community Access</li>
          <li className="listitems">Unlimited Private Projects</li>
          <li className="listitems">Dedicated Phone Support</li>
          <li className="listitems">Free Subdomain</li>
          <li className="listitems text-muted">Monthly Status Reports</li>
        </ul>

        {/* {plan.benefit.map((bfit) => {
          <Benefit benefit={bfit} />;
        })} */}
      </div>
      <Button className="btn btn-primary text-uppercase">Choose Plan</Button>
    </div>
  );
}

function Plan3() {
  return (
    <div className="card">
      <div className="plans">
        <h5 className="selectedPlan text-muted">Plus</h5>
        <h3 className="price">
          $49 <span className="month"> /Month</span>
        </h3>
      </div>
      <hr />
      <div className="benefits">
        <div>
          <ul className="list">
            <li className="listitems">Unlimited User</li>
            <li className="listitems">150GB Storage</li>
            <li className="listitems">Unlimited Public Projects</li>
            <li className="listitems">Community Access</li>
            <li className="listitems">Unlimited Private Projects</li>
            <li className="listitems">Dedicated Phone Support</li>
            <li className="listitems">Free Subdomain</li>
            <li className="listitems">Monthly Status Reports</li>
          </ul>
        </div>
        {/* {plan.benefit.map((bfit) => {
          <Benefit benefit={bfit} />;
        })} */}
      </div>
      <Button className="btn btn-primary text-uppercase">Choose Plan</Button>
    </div>
  );
}

const Benefit = ({ benefit }) => {
  return (
    <div>
      <ul className="list">
        <li className="listitems">{benefit}</li>
        {/* <li className="listitems">5GB Storage</li>
        <li className="listitems">Unlimited Public Projects</li>
        <li className="listitems">Community Access</li>
        <li className="listitems">Unlimited Private Projects</li>
        <li className="listitems">Dedicated Phone Support</li>
        <li className="listitems">Free Subdomain</li>
        <li className="listitems">Monthly Status Reports</li> */}
      </ul>
    </div>
  );
};

// Single User
// 5GB Storage
// Unlimited Public Projects
// Community Access
// Unlimited Private Projects
// Dedicated Phone Support
// Free Subdomain
// Monthly Status
// Reports

{
  /* <Card style={{ width: "18rem" }}>
        
{/* <ListGroup variant="flush">
  <Card.Header>
    <Card.Subtitle className="mb-2 text-muted">Free</Card.Subtitle>
    <Card.Title>$0/month</Card.Title>
  </Card.Header>
</ListGroup>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    <ul>
      <li>Single User</li>
      <li>5GB Storage</li>
      <li>Unlimited Public Projects</li>
      <li>Community Access</li>
      <li>Unlimited Private Projects</li>
      <li>Dedicated Phone Support</li>
      <li>Free Subdomain</li>
      <li> Monthly Status</li>
      <li> Reports</li>
    </ul>
    .
  </Card.Text>
  <Button variant="primary" disabled>
    {" "}
    Button
  </Button>
</Card.Body> */
}
