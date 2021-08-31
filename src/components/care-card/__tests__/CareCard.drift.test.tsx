import React from "react"
import { renderReact, renderNunjucksTemplate } from "../../../util/testing/DriftUtils"
import CareCard from "../";

describe("CareCard.Drift", () => {
    it("matches nhsuk-frontend for a non-urgent card", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("care-card", {
            type: "non-urgent",
            heading: "Speak to a GP if:",
            HTML: `
            <ul>
              <li>you're not sure it's chickenpox</li>
              <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
              <li>your child is <a href=\"https://www.nhs.uk/conditions/dehydration\">dehydrated</a></li>
              <li>you're concerned about your child or they get worse</li>
            </ul>
            <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
            `
        });

        const reactHtml = renderReact(
            <CareCard type="non-urgent">
                <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
                <CareCard.Content>
                    <ul>
                        <li>you're not sure it's chickenpox</li>
                        <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
                        <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
                        <li>you're concerned about your child or they get worse</li>
                    </ul>
                    <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
                </CareCard.Content>
            </CareCard>
        )

        expect(reactHtml).toEqual(nunjucksHtml);
    });


    it("matches nhsuk-frontend for an urgent card", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("care-card", {
            type: "urgent",
            heading: "Ask for an urgent GP appointment if:",
            HTML: `
            <ul>
              <li>you're an adult and have chickenpox</li>
              <li>you're pregnant and haven't had chickenpox before and you've been near someone with it </li>
              <li>you have a weakened immune system and you've been near someone with chickenpox</li>
              <li>you think your newborn baby has chickenpox</li>
            </ul>
            <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
            `
        });

        const reactHtml = renderReact(
            <CareCard type="urgent">
                <CareCard.Heading>Ask for an urgent GP appointment if:</CareCard.Heading>
                <CareCard.Content>
                    <ul>
                        <li>you're an adult and have chickenpox</li>
                        <li>you're pregnant and haven't had chickenpox before and you've been near someone with it </li>
                        <li>you have a weakened immune system and you've been near someone with chickenpox</li>
                        <li>you think your newborn baby has chickenpox</li>
                    </ul>
                    <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
                </CareCard.Content>
            </CareCard>
        )

        expect(reactHtml).toEqual(nunjucksHtml);
    })

    it("matches nhsuk-frontend for an immediate card", async () => {
        const nunjucksHtml = await renderNunjucksTemplate("care-card", {
            type: "immediate",
            heading: "Call 999 if you have sudden chest pain that:",
            HTML: `
            <ul>
              <li>spreads to your arms, back, neck or jaw</li>
              <li>makes your chest feel tight or heavy</li>
              <li>also started with shortness of breath, sweating and feeling or being sick</li>
            </ul>
            <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
            `
        });

        const reactHtml = renderReact(
            <CareCard type="immediate">
                <CareCard.Heading>Call 999 if you have sudden chest pain that:</CareCard.Heading>
                <CareCard.Content>
                    <ul>
                        <li>spreads to your arms, back, neck or jaw</li>
                        <li>makes your chest feel tight or heavy</li>
                        <li>also started with shortness of breath, sweating and feeling or being sick</li>
                    </ul>
                    <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
                </CareCard.Content>
            </CareCard>
        )

        expect(reactHtml).toEqual(nunjucksHtml);
    })
})
