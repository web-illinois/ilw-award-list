import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-award-list.ts";

const content = html`
    <ilw-award-list role="region" aria-labelledby="awards">
        <h2 slot="heading" id="awards">2024 Awards</h2>
        <ilw-award-category>
            <h3 slot="heading">Winners</h3>
            <ul>
                <li>
                    <h4>Grand Prize</h4>
                    <p>
                        <strong>Kyle Timmer</strong><br/>
                        "A Biomimetic Scaffold to Improve Rotator Cuff Shoulder Repair" (Chemical & Biomolecular Engineering)
                    </p>
                </li>
                <li>
                    <h4>Design Award</h4>
                    <p>
                        <strong>Andrew Freeman</strong><br/>
                        "Breaking the Ice: Fast and Reliable Aircraft Wing Deicing" (Electrical Engineering)
                    </p>
                </li>
            </ul>
        </ilw-award-category>
    </ilw-award-list>
`;

test("renders slotted heading", async () => {
    const screen = render(content);
    const element = screen.getByText("2024 Awards");
    await expect.element(element).toBeInTheDocument();
});

test("renders slotted paragraph", async () => {
    let screen = render(content);
    const element = screen.getByText("A Biomimetic Scaffold to Improve Rotator Cuff Shoulder Repair");
    await expect.element(element).toBeInTheDocument();
});
