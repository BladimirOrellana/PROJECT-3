import React from "react";
import Button from "@material-ui/core/Button";
import AboutCard from './components/AboutCard';
import './index.css';

class About extends React.Component {
  render() {
    return (
      <div id="about-us" className="container">
      <h1 className="about-us-container-title">About H&B Fencing</h1>

      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8">
        <h3>H & B FENCING COMPANY, SERVING HOUSTON’S METRO AND SURROUNDING AREAS</h3>
          <p className="text-muted">
          Family owned and operated, H & B Fencing Company is the team Houston relies on for expert fence installation and repair. For over a decade, we’ve been focused on providing high-quality Fence installation for our customers, along with superior workmanship and an unrivaled customer experience. We have a passion for the job and take the time to do it right. While we know that you will see our pride of work in the final product, you will also have the peace of mind that comes with our 12-month standard warranty.
          </p>

          <p>Whether you live in Houston metro, or the surrounding areas, simply give us a call today for a free estimate on fence installation and repair. We’ll walk you through choosing a fence or gate that fits your style, budget and timeline. From new construction, to repair, renovation, a retrofit and more. H & B Fence Company is your one-stop shop.</p>
          <p>We look forward to helping you install a beautiful, functional fence that you’ll love for years to come.</p>

          <h5>
            {" "}
            Don’t take our word for it, though. Check out what our customers
            have to say:
          </h5>
          <a href="#reviews">
            <Button color="primary">Read Reviews</Button>
          </a>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <AboutCard />
        </div>
       </div>
    </div>
      
    );
  }
}

export default About;
