import React from "react"
import ActionLink from "../ActionLink"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"


describe("ActionLink.Drift", () => {
    it("matches the nhsuk-frontend template", async () => {
        const reactDom = renderReact(
            <ActionLink
                className="example-class"
                href="https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551"
                target="_blank"
                rel="noreferrer noopener"
            >
                Find a minor injuries unit
            </ActionLink>
        );

        const nunjucksDom = await renderNunjucksTemplate("action-link", {
            classes: "example-class",
            href: "https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551",
            openInNewWindow: true,
            text: "Find a minor injuries unit",
            attributes: {
                rel: "noreferrer noopener"
            }
        })

        expect(reactDom).toEqual(nunjucksDom)
    })
})
