# What is Dynamic color?

Material You reimagines color as a more individualized experience. Through dynamic color extraction, the range of possible color experiences is significantly broader.

Dynamic color is a key part of Material You in which an algorithm derives custom colors from a user's wallpaper to be applied to their apps and system UI.

### Luminance

Dynamic color is built to work across unpredictable contexts. To manage contrast ratios in various viewing contexts, luminance levels are the key attribute that allow colors to combine successfully even without the product team testing each specific color combination.

<img src="../../public/luminance-demo.png" />

Elements with similar luminance will not have appropriate contrast for legibility, while elements with different luminance values will be more distinguishable.


> [!IMPORTANT]
> **Luminance** or tone describes the level of light that a digital color value represents.


### Tonal palette

A tonal palette is a translation of one hue (a dynamic extracted color) into a spectrum of related tones. The translation of a color into thirteen tones enables a group of tonal ranges, called a tonal palette, to be applied in different contexts, from individual elements inside a component to entire app themes.


<img src="../../public/tonal-palletes.png" />

> [!IMPORTANT]
> Key Takeaways
> 
> * Designing with luminance crates more accessible color palettes.
> * Extracted source color becomes 5 tonal palettes.


## Extracting colors

### Seed to scheme

With the Material Theme Builder.

1. Open the Material Theme Builder. With dynamic selected, drop in an image or select one from the file browser. Notice the seed color will update based on the image.

2. Color values are extracted from a wallpaper and assigned a "type" which determines how the color will relate to other colors in a scheme. These "key colors" (to the right) have been updated to reflect these values.

<img src="../../public/color-types.png" />

3. They are then translated into luminance-based tonal palettes, generating five color ranges with tones from light to dark. The tonal palettes are labeled as such in the color output.

4. From the five tonal ranges, specific tones (based on luminance) are slotted into the predefined roles that comprise a scheme. Colors are mapped to a scheme through design tokens.


### Key Takeaways

The Material Theme Builder shows how dynamic color works and resulting extrapolated color schemes.


## Themes and Tokens

<img src="../../public/design-tokens.png" />

Design tokens enable flexibility and consistency across a product by allowing designers to, for instance, assign an element's color role in a UI, rather than a set value. Tokens act as a bridge between an element's assigned role and the chosen color value for a role. Designing for a color's role rather than the specific color is more fundamental with the introduction of dynamic color.

Themes contain Material Design tokens for both color and type, ensuring that designs and code have one source of truth to represent the baseline, along with user generated palettes and custom values.

In Figma, the plugin generates these tokens as styles, meaning if using the generated styles you will be using the MD tokens.

Colors in a tonal palette are mapped to a light or dark scheme through design tokens.

The mapping system assigns a tone to each element in a component.

### Setup tokens

To apply dynamic color to your designs we'll need to set the mockup to the tokens in the existing material-theme.

1. Let's set all the tokens (Figma styles) in the layout to the right to utilize this theme by selecting the frame of the layout and clicking swap. You'll see the style prefix update in selection colors.

2. Clicking swap to update the connected theme used in the selected design.

3. Now drop in an image or select one from the file browser. The mockup's values will take on the dynamic color extracted from the image.
Click the shuffle button, this will randomize the seed color to extrapolate from instead of extracting from the image. This is another way to quickly view how dynamic color can affect your design mocks.

<img src="../../public/swap-demo.png" />



> [!IMPORTANT]
> **Design tokens** are small, reusable design decisions that make up a design system's visual style. Tokens replace static values with self-explanatory names.

Opening the plugin without a theme will show a setup screen to get started. ‘Get started' will generate out the default baseline ‘material-theme' as a figma style group to connect to your mockups or use with the Material Design kit.

> [!IMPORTANT]
> Key Takeaways
>
> * Tokens represent a color role rather than a value, which allows dynamic color to function.
>
> * The Material Theme Builder can be used to setup Material Design tokens.


## Applying to UI

The provided layouts were created with the Material Design Kit which utilizes Material Design tokens, but there are a few custom elements that are not mapped.

Select the article cards. In the fill, set the style (four dots icon) to material-theme/surface. (You can also search for surface).
In a similar process, select the type in the cards and set to on-surface and checkboxes to primary.