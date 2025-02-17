import {LitElement, html, unsafeCSS, css} from "lit";
// @ts-ignore
import styles from "./AwardCategory.styles.css?inline";
import { customElement, property } from "lit/decorators.js";

@customElement("ilw-award-category")
export class AwardCategory extends LitElement {
    @property()
    theme: "orange" | "blue" = "orange";

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    render() {

        return html`
            <div class="inner">
                <div class="heading">
                    <slot name="heading"></slot>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ilw-award-category": AwardCategory;
    }
}
