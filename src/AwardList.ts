import {LitElement, html, unsafeCSS, css} from "lit";
// @ts-ignore
import styles from "./AwardList.styles.css?inline";
import { customElement, property } from "lit/decorators.js";

@customElement("ilw-award-list")
export class AwardList extends LitElement {
    @property()
    theme = "";

    @property()
    size: | "normal" | "large" = "normal";

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
                    <div class="heading-inner">
                        <slot name="heading"></slot>
                    </div>
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
        "ilw-award-list": AwardList;
    }
}
