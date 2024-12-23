<h2>Performance Testing using K6</h2>

<p>Grafana k6 is an open-source, developer-friendly, and extensible load testing tool.k6 is optimized for minimal resource consumption and designed for running high-load performance tests such as spike, stress, or soak tests. Also you can run browser-based performance tests.</p>

ScreenShort :

<img src="https://github.com/user-attachments/assets/36aa4535-8686-40ed-92c8-3e7340a9b8c3" width="500" height="300">

<img src = "https://github.com/user-attachments/assets/a4e71b32-93d7-44f1-bcb9-c21f444f14e7" width="500" height="300">


<h2>🧐 Features </h2>
<p>Here're some of the project's best features:

- Performance testing .
- API Testing.
- Result Summary
- Genarate CSV file.
- Genarate Json.
- There have a GUI and Non-GUI outputs.
</p>

<h2>🛠️ Installation Steps: </h2>
<p>
  1. Download & Install ` K6 `.

2. Download collection & Environment file from here.

3. Open those file in VS code.

4. Run the project in Terminal.

5. Run the code out write down - `<b>k6 run 'project_name'</b>`

6. Genarate to CSV file write down - `<b>k6 run 'project_name' --out csv='file_name'.csv </b>`

9. Genarate to JSON file write down - `<b>k6 run 'project_name' --out json='file_name'.json </b>`

 ## Multiple outputs

If you want more control over the output produced or to output the summary into multiple places (including stdout), just combine the result of htmlReport with other summary generators, as follows:

```js
// This will export to HTML as filename "result.html" AND also stdout using the text summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
``` 
</p>

<h2>💻 Built with: </h2>
<p>
  Technologies used in the project:

- K6
- VS Code
- HTML
- Json
</p>


