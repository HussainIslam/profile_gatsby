---
title: "React Hooks: State Hook"
date: "2021-02-28"
featuredImage: "../../images/blog_images/react_hooks.jpg"
---

## What is a Hook and why?
Hook is a special function that lets you use some of the features of React. This is a localized way to reduce repetation and implement of DRY. There are some React hooks already built in to the React library. Additionally, you can also create your own hooks and reuse them in other parts of the code.

## What is State?
State is a variable that stores values in a React Component. These values are strictly confined to the component where they are declared. These can be thought of as counterparts of 'properties' in a Javascript Object.

## What is State Hook?
The State hook in React is called `useState`. This is a significantly cleaner implementation of handling the state in React Components. Before the implementation of hooks, component states could only be used inside a _class-based component_. However, from React 16.8, with the implementation of hooks, states can be managed in _function-based components_ as well.

## How to declare State Variable?
While using the state hook, we must remember that all the [rules of hooks][2] apply to this. There are three main steps of creating, using, and modifying a state variable through a state hook. 

1. First step is to import `useState` from 'react'. This will enable you to use it inside the component.

```js
import { useState } from 'react'
```

2. The next step is to create a hook with this imported function. When we call this imported function `useState` and pass in a value, it returns an array of two things: a variable with the value we passed into the `useState` function and a function to change the value of this variable. We use the [ES6 destructuring][1] to assign these to two variables. In our example, I have used variable names like `count` and `setCount`, but these could be anything, like `rick` and `morty`.

```js
const [ count, setCount ] = useState(0);
```

3. The final step is to use it. We can use the `variable` anyway a normal variable can be used.

```html
<!-- use of variable -->
<h2>{count}</h2>
```

For the function, it need to follow the `Rules of Hooks`. Everything else about the function is same as normal functions:
```js
setCount(100)
```

## Complete Sample
```js
import { useState } from 'react';

const ComponentName = () => {
	const [ count, setCount ] = useState(0);

	const handleClick = () => setCount(count+1)

	return (
		<h1>You have clicked me {count} times</h1>
		<button onClick={handleClick}></button>
	)
}
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[2]: https://reactjs.org/docs/hooks-rules.html