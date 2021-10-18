import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {

  const [markdownText, setMarkdownText] = useState(`# Edit your code here

  A brief description of what this project does and who it's for
  
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
  [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  ## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 
 ## Authors

- [@katherinepeterson](https://www.github.com/octokatherine)
`)

  return (
    <div className="App">
      <div className = "header-container">
        <h1 id = "title">MarkUp Editor {`>>`} <span id = "link"><a rel="noreferrer" href = "https://www.markdownguide.org/cheat-sheet/" target = "_blank">MD cheat sheet</a></span></h1>
        <p>Made by Avinash with 💜</p>
      </div>
      <div className = "markdown-container">
        <textarea id = "text-area" value = {markdownText} onChange = {(e) => setMarkdownText(e.target.value)}/>
        <div  id = "output-pannel">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
