import React from "react"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"
import Card from "../";


describe("Card.Drift", () => {
    it("Basic card matches nhsuk-frontend", async () => {
        const reactDom = renderReact(
            <Card>
                <Card.Content>
                    <Card.Heading headingLevel="h3">If you need help now, but its not an emergency</Card.Heading>
                    <Card.Description>Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a></Card.Description>
                </Card.Content>
            </Card>
        );

        const nunjucksDom = await renderNunjucksTemplate("card", {
            "heading": "If you need help now, but its not an emergency",
            "headingLevel": "3",
            "descriptionHtml": "<p class=\"nhsuk-card__description\">Go to <a href=\"#\">111.nhs.uk</a> or <a href=\"#\">call 111</a></p>"
        })

        expect(reactDom).toEqual(nunjucksDom)
    })

    it("Clickable card matches nhsuk-frontend", async () => {
        const reactDom = renderReact(
            <Card clickable>
                <Card.Content>
                    <Card.Heading className="nhsuk-heading-m">
                        <Card.Link href="#">
                            Introduction to care and support
                        </Card.Link>
                    </Card.Heading>
                    <Card.Description>
                        A quick guide for people who have care and support needs and their carers
                    </Card.Description>
                </Card.Content>
            </Card>
        );

        const nunjucksDom = await renderNunjucksTemplate("card", {
            "href": "#",
            "clickable": "true",
            "heading": "Introduction to care and support",
            "headingClasses": "nhsuk-heading-m",
            "description": "A quick guide for people who have care and support needs and their carers"
        })

        expect(reactDom).toEqual(nunjucksDom)
    })

    // it("Card with an image matches nhsuk-frontend", async () => {
    //     const reactDom = renderReact(
    //         <Card clickable>
    //             <Card.Image alt="Alt Text" src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" />
    //             <Card.Content>
    //                 <Card.Heading className="nhsuk-heading-m">
    //                     <Card.Link href="#">
    //                         Exercise
    //                     </Card.Link>
    //                 </Card.Heading>
    //                 <Card.Description>
    //                     Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
    //                 </Card.Description>
    //             </Card.Content>
    //         </Card>
    //     );

    //     const nunjucksDom = await renderNunjucksTemplate("card", {
    //         "imgURL": "https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",
    //         "imgALT": "Alt Text",
    //         "href": "#",
    //         "clickable": "true",
    //         "heading": "Exercise",
    //         "headingClasses": "nhsuk-heading-m",
    //         "description": "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
    //     })

    //     expect(reactDom).toEqual(nunjucksDom)
    // })
})
