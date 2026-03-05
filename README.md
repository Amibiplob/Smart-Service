## What is JSX, and why is it used?

-JSX is a syntax extension for JavaScript that looks like HTML.  

It makes UI code more readable and allows mixing markup with logic.  

React compiles JSX into React.createElement() calls for rendering.

---

## Difference between State and Props

-State is mutable data managed within a component.  

Props are immutable inputs passed from parent to child. 

---

## What is the useState Hook, and how does it work?

-useState() adds state to functional components.  

It returns a value and a setter function.  

Updating state triggers re-render of the component.

---

## How can you share state between components in React?

-Lift state up to a common parent and pass via props. It used  by  prop drilling.  

---

## How is event handling done in React?

-Events use camelCase like onClick.Handlers are functions passed directly to elements. 
