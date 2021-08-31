import React from "react"
import Details from "../"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"
import toDiffableHtml from "diffable-html"

describe("Details.Drift", () => {
    it("Standard Details matches nhsuk-frontend", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("details", {
            text: "Where can I find my NHS number?",
            HTML: `
            <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
            <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
            <ul>
              <li>prescriptions</li>
              <li>test results</li>
              <li>hospital referral letters</li>
              <li>appointment letters</li>
              <li>your NHS medical card</li>
            </ul>
            <p>Ask your GP practice for help if you can't find your NHS number.</p>
            `
        });

        const reactHtml = renderReact(
            <Details>
                <Details.Summary>Where can I find my NHS number?</Details.Summary>
                <Details.Text>
                    <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
                    <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
                    <ul>
                        <li>prescriptions</li>
                        <li>test results</li>
                        <li>hospital referral letters</li>
                        <li>appointment letters</li>
                        <li>your NHS medical card</li>
                    </ul>
                    <p>Ask your GP practice for help if you can't find your NHS number.</p>
                </Details.Text>
            </Details>
        );

        expect(reactHtml).toEqual(nunjucksHtml);
    });

    it("Expander details matches nhsuk-frontend", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("details", {
            classes: "nhsuk-expander",
            text: "Opening times",
            HTML: `
            <table>
              <tbody>
                <tr>
                    <th><strong>Day of the week</strong></th>
                    <th><strong>Opening hours</strong></th>
                </tr>
                <tr>
                    <th>Monday</th>
                    <td>9am to 6pm</td>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <td>9am to 6pm</td>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <td>9am to 6pm</td>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <td>9am to 6pm</td>
                </tr>
                <tr>
                    <th>Friday</th>
                    <td>9am to 6pm</td>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <td>9am to 1pm</td>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <td>Closed</td>
                </tr>
              </tbody>
            </table>
            `
        });

        const reactHtml = renderReact(
            <Details expander>
                <Details.Summary>Opening times</Details.Summary>
                <Details.Text>
                    <table>
                        <tbody>
                            <tr>
                                <th><strong>Day of the week</strong></th>
                                <th><strong>Opening hours</strong></th>
                            </tr>
                            <tr>
                                <th>Monday</th>
                                <td>9am to 6pm</td>
                            </tr>
                            <tr>
                                <th>Tuesday</th>
                                <td>9am to 6pm</td>
                            </tr>
                            <tr>
                                <th>Wednesday</th>
                                <td>9am to 6pm</td>
                            </tr>
                            <tr>
                                <th>Thursday</th>
                                <td>9am to 6pm</td>
                            </tr>
                            <tr>
                                <th>Friday</th>
                                <td>9am to 6pm</td>
                            </tr>
                            <tr>
                                <th>Saturday</th>
                                <td>9am to 1pm</td>
                            </tr>
                            <tr>
                                <th>Sunday</th>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </Details.Text>
            </Details>
        );

        expect(reactHtml).toEqual(nunjucksHtml);
    });

    /**
     * The Expander Group does not have a nunjucks macro, so the HTML has been used from the nhsuk-frontend repo.
     * See: https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/details#nunjucks-macro-2
     */
    it("Expander Group matches nhsuk-frontend", () => {
        const nunjucksHtml = toDiffableHtml(`<div class="nhsuk-expander-group"></div>`);
        const reactHtml = renderReact(<Details.ExpanderGroup />)

        expect(reactHtml).toMatch(nunjucksHtml);
    })
})
