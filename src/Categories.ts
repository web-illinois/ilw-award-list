import {LitElement, html, unsafeCSS, css} from "lit";
// @ts-ignore
import styles from "./Categories.styles.css?inline";
import { customElement, property } from "lit/decorators.js";

@customElement("ilw-categories")
export class Categories extends LitElement {
    @property()
    theme = "";

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
        "ilw-categories": Categories;
    }
}
