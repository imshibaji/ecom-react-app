import { Display } from "../components/display";
import { Input } from "../components/input";

export default function About() {
    return (
      <div className="page px-6">
        <div className="wrapper group">
          <div className="highlight-text">
            About Page
          </div>
          <Display title="Display Part" />
          <Input title="Input Part" />
        </div>
      </div>
    );
  }