import React from "react"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"
import ContentsList from "../"

describe("ContentsList.Drift", () => {
    it("matches nhsuk-frontend", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("contents-list", {
            items: [
                {
                    href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/",
                    text: "What is AMD?",
                    current: "true"
                },
                {
                    href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/",
                    text: "Symptoms"
                },
                {
                    href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/",
                    text: "Getting diagnosed"
                }
                ,
                {
                    href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/",
                    text: "Treatments"
                }
                ,
                {
                    href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/",
                    text: "Living with AMD"
                }
            ]
        });

        const reactHtml = renderReact(
            <ContentsList aria-label="Pages in this guide">
                <ContentsList.Item current>
                    What is AMD?
                </ContentsList.Item>
                <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
                    Symptoms
                </ContentsList.Item>
                <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
                    Getting diagnosed
                </ContentsList.Item>
                <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
                    Treatments
                </ContentsList.Item>
                <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
                    Living with AMD
                </ContentsList.Item>
            </ContentsList>
        );

        expect(reactHtml).toEqual(nunjucksHtml);
    })
})
