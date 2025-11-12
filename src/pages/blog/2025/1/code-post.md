---
layout: ../../../../layouts/partials/BlogLayout.astro
title: "Code Post"
date: 2025-01-01
description: "This is a code post."
tags: ["notes", "code"]
---

Default
```ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

---

Copy button disabled
```ts copy="false"
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
---

With Title
```ts title="greet.ts"
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
---

transformerNotationDiff()
```ts
console.log("Minus") // [!code --]
console.log("Add") // [!code ++]
console.log("Equal")
```
---

transformerNotationHighlight()
```ts
console.log("Yes")
console.log("Highlight") // [!code highlight]
console.log("No")
```
---

transformerNotationHighlight()
```ts
// [!code highlight:3]
console.log("Yes")
console.log("Highlight")
console.log("No")
```
---

transformerNotationWordHighlight()
```ts
// [!code word:Highlight]
console.log("Yes")
console.log("Highlight")
console.log("No")
```
---

transformerNotationFocus()
```ts
console.log("Yes")
console.log("Focused") // [!code focus]
console.log("No")
```
---
                
transformerNotationErrorLevel() 
```ts
console.log("Yes")
console.log("Error") // [!code error]
console.log("Warning") // [!code warning]
```