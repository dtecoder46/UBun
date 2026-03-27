![UBun logo](./UBun_Dir/graphics/UBun.svg)

# UBun
"Style once, use everywhere" <br>
A website template that bundles Tailwind utility classes to make styling faster

## Tech Stack
1. React w/ Compiler
2. Vite
3. Tailwind
4. Bun

# How to Run
1. Fork this repo into your favorite IDE
2. Then run these commands:
```bash
cd UBun_Dir
bun run dev
```

# How it Works
1. Groups of utility classes are defined as string constants 
2. These string constants are referenced in the className property of each HTML element
3. To use multiple utility class bundles, use the classnames() function and list each constant out

# Recommended If...
1. You write a lot of utility classes
- You can now define these large sets of utility classes in constants
- Still need to write a lot of classes, but only once instead of multiple times for each HTML element
2. These utility classes are shared across multiple HTML elements
- Same benefits as stated above
3. You hate manually updating each HTML class attribute whenever you modify a utility class in a utility class bundle which is shared across elements
- Now, all you need to do is update the utility class constant once! All HTML elements sharing the utility class bundle will automatically be updated after each change!

# Sources
[Bun](https://bun.com/docs)

[TailwindCSS](https://tailwindcss.com)

[DevTo: Add Tailwind to a React and Vite project](https://dev.to/mosnyik/how-to-add-tailwindcss-to-a-react-app-built-with-vite-2025-guide-24oi)

[React Multiple ClassNames](https://www.dhiwise.com/post/the-definitive-handbook-to-react-multiple-class-name)

[How to center buttons in Tailwind](https://tailkits.com/blog/tailwind-css-centering/#centering-buttons)

[w3Schools HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

# Logo Credits

[Wikipedia: image of a bundle of mats](https://tinyurl.com/mat-bundle)

[TinyURL](https://tinyurl.com/)

[TailwindCSS](https://tailwindcss.com)

[Reddit: Tailwind font](https://tinyurl.com/tailwind-font)
