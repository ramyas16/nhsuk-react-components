import nunjucks from "nunjucks"
import ReactDOM from "react-dom"
import { JSDOM } from "jsdom"
import toDiffableHtml from "diffable-html"
import fs from "fs/promises"

const loadTemplate = async (templateName: string) => {
    const path = require.resolve(`nhsuk-frontend/packages/components/${templateName}/template.njk`)
    // Ensure file exists and is readable
    await fs.access(path)
    const file = await fs.readFile(path);
    return file.toString()
}

export const renderNunjucksTemplate = async (templateName: string, params: object): Promise<string> => {
    const templateNjks = await loadTemplate(templateName);
    return toDiffableHtml(nunjucks.renderString(templateNjks, { params }));
}

export const renderReact = (reactNode: JSX.Element): JSDOM => {
    const domObject = new JSDOM('<div id="app" />');
    ReactDOM.render(reactNode, domObject.window.document.body.querySelector("#app"));
    return toDiffableHtml(domObject.window.document.body.querySelector("#app").innerHTML);
}
