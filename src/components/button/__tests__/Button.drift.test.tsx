import { react } from "@babel/types";
import React from "react"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"
import Button from "../Button"

describe("Button.Drift", () => {
    it("matches nhsuk-frontend for a basic button", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("button", {
            text: "Save and continue"
        });

        const reactHtml = renderReact(<Button>Save and continue</Button>)

        expect(nunjucksHtml).toEqual(reactHtml);
    });

    it("matches nhsuk-frontend for a link button", async () => {
        // The React Components add a "button" role to a link, so add the attribute directly
        const nunjucksHtml = await renderNunjucksTemplate("button", {
            text: "Link button",
            href: "/",
            attributes: {
                role: "button"
            }
        });

        const reactHtml = renderReact(<Button href="/">Link button</Button>)

        expect(nunjucksHtml).toEqual(reactHtml);
    });

    /**
     * nhsuk-frontend sets the value of the disabled attribute to "disabled", i.e.
     * <button disabled="disabled">
     *
     * Disabled is a boolean attribute, so proper usage is:
     * <button disabled>
     *
     * Otherwise, the output is identical.
     *
     * TODO: Raise an issue in nhsuk-frontend for this.
     */
    it.todo("matches nhsuk-frontend for a disabled button");

    it("matches nhsuk-frontend for a secondary button", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("button", {
            text: "Find my location",
            classes: "nhsuk-button--secondary"
        });

        const reactHtml = renderReact(<Button secondary>Find my location</Button>);

        expect(nunjucksHtml).toEqual(reactHtml);
    })

    it("matches nhsuk-frontend for a reverse button", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("button", {
            text: "Save and continue",
            classes: "nhsuk-button--reverse"
        });

        const reactHtml = renderReact(<Button reverse>Save and continue</Button>);

        expect(nunjucksHtml).toEqual(reactHtml);
    });
});
