import React from "react"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"
import Breadcrumb from "../";


describe("Breadcrumb.Drift", () => {
    it("matches nhsuk-frontend", async () => {
        const reactDom = renderReact(
            <Breadcrumb>
                <Breadcrumb.Item href="/level-one">Level one</Breadcrumb.Item>
                <Breadcrumb.Item href="/level-one/level-two">Level two</Breadcrumb.Item>
                <Breadcrumb.Item href="/level-one/level-two/level-three">Level three</Breadcrumb.Item>
                <Breadcrumb.Back href="/level-one/level-two/level-three">Level three</Breadcrumb.Back>
            </Breadcrumb>
        );

        const nunjucksDom = await renderNunjucksTemplate("breadcrumb", {
            items: [
                {
                    href: "/level-one",
                    text: "Level one"
                },
                {
                    href: "/level-one/level-two",
                    text: "Level two"
                }
            ],
            href: "/level-one/level-two/level-three",
            text: "Level three"
        })

        expect(reactDom).toEqual(nunjucksDom)
    })
})
