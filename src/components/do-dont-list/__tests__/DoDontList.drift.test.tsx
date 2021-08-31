import React from "react"
import DoDontList from "../"
import { renderNunjucksTemplate, renderReact } from "../../../util/testing/DriftUtils"

describe("DoDontList.Drift", () => {
    it("Do list matches nhsuk-frontend", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("do-dont-list", {
            "title": "Do",
            "type": "tick",
            "items": [
                {
                    "item": "cover blisters that are likely to burst with a soft plaster or dressing"
                },
                {
                    "item": "wash your hands before touching a burst blister"
                },
                {
                    "item": "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
                }
            ]
        });

        const reactHtml = renderReact(
            <DoDontList listType="do">
                <DoDontList.Item>cover blisters that are likely to burst with a soft plaster or dressing</DoDontList.Item>
                <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
                <DoDontList.Item>allow the fluid in a burst blister to drain before covering it with a plaster or dressing</DoDontList.Item>
            </DoDontList>
        )

        expect(reactHtml).toEqual(nunjucksHtml);
    })

    it("Don't list matches nhsuk-frontend", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("do-dont-list", {
            "title": "Don't",
            "type": "cross",
            "items": [
                {
                    "item": "burst a blister yourself"
                },
                {
                    "item": "peel the skin off a burst blister"
                },
                {
                    "item": "pick at the edges of the remaining skin"
                },
                {
                    "item": "wear the shoes or use the equipment that caused your blister until it heals"
                }
            ]
        });


        // A .replace("Don't", "Don&#39;t") is required due to Nunjucks' escaping features.
        const reactHtml = renderReact(
            <DoDontList listType="dont">
                <DoDontList.Item>burst a blister yourself</DoDontList.Item>
                <DoDontList.Item>peel the skin off a burst blister</DoDontList.Item>
                <DoDontList.Item>pick at the edges of the remaining skin</DoDontList.Item>
                <DoDontList.Item>wear the shoes or use the equipment that caused your blister until it heals</DoDontList.Item>
            </DoDontList>
        ).replace("Don't", "Don&#39;t")

        expect(reactHtml).toEqual(nunjucksHtml);
    });
})
