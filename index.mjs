import React from "react";
import { renderToString } from "react-dom/server";

const render = () => {
  const html = renderToString(<p>Hello World</p>);
  const str = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
  console.log({ str });
  return str;
};

render()
