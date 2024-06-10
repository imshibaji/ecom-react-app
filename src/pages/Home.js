import { useState } from "react";
import { Display } from "../components/display";
import { Input } from "../components/input";

export default function Home() {
  const [value, setValue] = useState('');
    return (
      <div className="page px-6">
        <div className="wrapper group">
          <div className="highlight-text">Hello to E-comm home page</div>
          <Display title={value} />
          <Input title="Input Part" change={value => setValue(value)} />
        </div>
      </div>
    );
  }