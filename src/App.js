import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Plan1 />
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
      <Button className="btn btn-primary text-uppercase">Choose Plan</Button>
    </div>
  );
}
