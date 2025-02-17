# ilw-award-list

Links: **[ilw-award-list in Builder](https://builder3.toolkit.illinois.edu/component/ilw-award-list/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This component displays stylized categories that can contain a list of items, intended to show a list of awards for
a particular year. The component has no functionality aside from presentation.

Usage:

- The main `ilw-award-list` component should have a heading as its first child with the `slot="heading"` attribute.
- The rest of the content should be any number of `ilw-award-category` elements. Note that in this case category
  doesn't necessarily refer to an "award category". It can be an award category, but can also just separate Winners
  and Finalists.
- Each `ilw-award-category` element should have a heading with a `slot="heading"` attribute naming that category.
- The category can then have a `ul` list of items, typically a list of awardees. Each list item may optionally have
  a heading element (no slot needed).

The following attributes are available:

- `ilw-award-list`
  - `size="large"` will increase the size of the main heading. Only use this if the heading text is something very
    minimal, such as a number. See additional note below in accessibility.
- `ilw-award-category`
  - `theme="blue"` will change the heading colors for that category to blue.


## Code Examples

```html
<ilw-award-list role="region" aria-labelledby="awards-2024">
    <h2 slot="heading" id="awards-2024">2024 Awards</h2>
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
    <ilw-award-category>
        <h3 slot="heading">Finalists</h3>
        <ul>
            <li>
                <p>
                    <strong>Satinderpal Kaur</strong><br/>
                    "Flooding, Food Security and Plant-insect Interactions" (Entomology)
                </p>
            </li>
        </ul>
    </ilw-award-category>
</ilw-award-list>
```

## Accessibility Notes

- If the component is part of a page rather than all the main content, consider using `role="region"` and
  `aria-labelledby` with the large heading.
- If the large heading is just a number, an `ilw-sr-only` element should be added to improve its
  accessibility. Consider whether spelling the whole detail out for everyone to see might make it easier to
  understand.
- Make sure to use the appropriate heading structure, and consider whether the list items should have a
  heading at all.
