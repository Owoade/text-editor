import "./styles.css";
import Editor from "@codifytools/react-text-editor";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({ text: "<p>Editor example text</p>" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <Editor
        field="text"
        html={values.text}
        classes="example-class"
        saveCallback={handleChange}
        placeholder="custon placeholder text..."
      />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
