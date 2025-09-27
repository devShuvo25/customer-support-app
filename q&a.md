1. What is JSX, and why is it used?
Ans : JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but is used inside React to describe the UI structure.

Makes code more readable and declarative (you can see what the UI looks like directly in the code).JSX is converted to JavaScript using tools like Babel.

2. What is the difference between State and Props?
Ans : State and props are both used to manage data in React but serve different purposes. Props are short for “properties” and are used to pass data from a parent component to a child component. They are read-only, meaning a child component cannot modify the props it receives. State, on the other hand, is internal to a component and represents data that can change over time, such as user input or a counter value. State is mutable and can be updated within the component using functions like setState or the useState hook. In short, props are external and immutable, while state is internal and mutable.

3. What is the useState hook, and how does it work?
Ans : The useState hook is a built-in React hook that allows functional components to have state. It returns an array with two elements: the current state value and a function to update it. For example, const [count, setCount] = useState(0) initializes a state variable called count with the value 0 and provides setCount to update it. When the state update function is called, React re-renders the component to reflect the latest value. This makes useState a fundamental tool for handling dynamic, interactive data inside functional components.

4. How can you share state between components in React?
Ans : In React, state is shared between components through a process called “lifting state up” or by using global state management tools. If two or more components need to access the same state, the common approach is to move the state to their closest common parent and pass it down to child components via props. For larger applications, this can become cumbersome, so React provides the Context API to share state without excessive prop drilling. Additionally, external state management libraries like Redux, Zustand, or Recoil can be used for more complex applications that require a global state.

5. How is event handling done in React?
 Ans: Event handling in React is similar to handling events in JavaScript but uses JSX syntax and camelCase naming conventions. Instead of writing event attributes as strings like in HTML, React expects event handlers to be passed as functions. For example,<button onClick={handleClick}>Click</button> attaches the handleClick function to the button’s click event. React’s event system is built on top of synthetic events, which work consistently across all browsers, making event handling more predictable and reliable. This approach makes React’s event system both efficient and easy to use. -->