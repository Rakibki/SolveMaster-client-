// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/ext-language_tools";
// import { useState } from "react";

// const CodeEditor = () => {
//   const [text, setText] = useState("");

//   const problem = {
//     problemId: 1,
//     title: "Reverse a String",
//     description: "Write a function that reverses a string.",
//     difficulty: "Easy",
//     exampleInput: "hello",
//     exampleOutput: "olleh",
//     tests: [
//       { input: "hello", output: "olleh" },
//       { input: "abcdef", output: "fedcba" },
//     ],
//   };

//   function onChange(newValue) {
//     console.log(newValue)
//   }

//   return (
//     <div>
//       <AceEditor
//         mode="java"
//         theme="github"
//         onChange={onChange}
//         name="UNIQUE_ID_OF_DIV"
//         editorProps={{ $blockScrolling: true }}
//       />
//       ,
//     </div>
//   );
// };

// export default CodeEditor;

// import React, { useState } from "react";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-github";

// const CodeEditor = () => {
//   const [result, setResult] = useState(null);

//   const problem = {
//     problemId: 1,
//     title: "Reverse a String",
//     description: "Write a function that reverses a string.",
//     difficulty: "Easy",
//     exampleInput: "hello",
//     exampleOutput: "olleh",
//     tests: [
//       { input: "hello", output: "olleh" },
//       { input: "abcdef", output: "fedcba" },
//     ],
//   };

//   function onChange(newValue) {
//     try {
//       const userFunction = new Function(newValue);
//       console.log(userFunction);

//       // const testResults = problem.tests.map((test) => {
//       //   const output = userFunction(test.input);
//       //   const expectedOutput = test.output;
//       //   const isCorrect = output === expectedOutput;
//       //   return { input: test.input, output, isCorrect };
//       // });

//       // setResult(testResults);
//     } catch (error) {
//       console.error("Error evaluating code:", error);
//       setResult(null); // Clear result in case of error
//     }
//   }

//   return (
//     <div>
//       <AceEditor
//         mode="javascript"
//         theme="github"
//         onChange={onChange}
//         name="UNIQUE_ID_OF_DIV"
//         editorProps={{ $blockScrolling: true }}
//         style={{ width: "100%", height: "300px" }} // Adjust the height as needed
//       />
//       {result && (
//         <div>
//           {result.map((test, index) => (
//             <div key={index}>
//               Input: {test.input} | Output: {test.output} | Correct:{" "}
//               {test.isCorrect ? "Yes" : "No"}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CodeEditor; 