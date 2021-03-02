---
title: "React Hooks: Effect Hook"
date: "2021-03-01"
featuredImage: "../../images/blog_images/react_hooks_effect.jpg"
---

## What is Side Effect or Effect?
In computer science, side effect or, in short, effect refers to modification of the state. This can include changing the value of the state, writing something to the screen. In React, effect is modifying the value of a prop or state or doing something that changes the DOM (Document Object Model) or does a simple `console.log()`.

## What is `useEffect`?
React came with hooks from 16.8, which basically provided better and cleaner ways to access some of the features of React. `useEffect` is one of the those hooks, which is primarily designed to handle side effects or effects. `useEffect` does it in such a way that is more elegant and implements some of the programming concepts like cohesion and decoupling. Handling effects has always been in React but just in some other way and only in some specific type of component, the class-based components.

## How effects were handled before?
Previously, effects could only be handled in a life cycle method, which were only available for class-based components. So, if someone wanted to manage the effect, they had to create a class-based component and then add some of the life cycle methods, like `componenetDidMount`, `componentDidUpdate`, and `componentWillUnmount`. Let's take a closer look at these methods to understand what purpose they served.

When we are applying some effect, we would want to let React render the DOM first and then apply the effects. In laymen terms, that means, React will create the Virtual DOM and then apply any changes in values it may have on that. This is where the life-cycle methods worked. `componentDidMount` will run the effects once the component is mounted to the DOM, which happens only once. So, when any value changes in the component, React will call another method: `componentDidUpdate`. As the name explains, this is called everytime React wants to update something in the DOM. So, the main thing to understand from here is the timing of these methods and the frequency with which they are called. `componentDidMount` is called only once when everything is created for the first time and painted to DOM. On the other hand, `componentDidUpdate` is called everytime there is a change in something and React needs to repaint the DOM. Now, in some cases, if we have created something, we may need to destroy it as well. Otherwise, it may lead to unwanted consequences like memory leaks. For this purpose, we can use the third method mentioned before: `componentWillUnmount`. This method can be used to close any subscription or connection after we are done with it.

There are some inherent problems with this approach:

1. If we need to do some effect when the components are created and everytime the values are updated, we would need to specify or call the effects from both `componentDidMount` and `componentDidUpdate` methods, which violets the DRY principle of programming. Even if we localize the effect code in a function, we would still need to call it from both methods.
2. Code related to creating, updating, and destroying something are separated in three different methods but code related to multiple creation are bunched together. This is violets the seperation-of-concern and decoupling concepts.

## How effects are handled now?
Now, React hooks are used to handle effects. This way the problems of life-cycle methods are mitigated. Code related to creating, updating, and deleting something are put together. In addition, we have better control over running effects while maintaining the DRY principle. Let's deep dive into how `useEffect` works and how you can use it in your code.

## How to `useEffect` works?
`useEffect` primarily contains a function that does the 'effect' for us. So, all we need to do is create a method name `useEffect` and inside that create and call a function that contains the effect. Visually, this would look like this:

![use effect diagram 1](https://svgshare.com/i/U_i.svg)

In addition, if we need to cleanup the effect after we are done working with it, we simply reply another callback from the effect function. So, visually it would look something like this:

![use effect diagram 2](https://svgshare.com/i/UcL.svg)

Apart from these, we would want to control when our effect function is run. In class-based components we did this by adding the affect to either or both of the life cycle methods. However, in `useEffect` hook, we have the concept of 'list of dependency', which helps us control when the effect is invoked. For this, we pass an array as the optional second argument to the `useEffect` method. So, it would contain two arguments: the effect function and list of dependency. The list of dependency can be a variable (prop/state) or can be a method, preferrablly declared within the `useEffect` method. So, the visual representation at the moment would look like:

![use effect diagram 2](https://svgshare.com/i/Uc1.svg)

## How to decide on implementation of `useEffect`?
There are certain decisions that we need to make while implementing a `useEffect` hook. The implementation will largly depend on the results of those decisions. The decision tree will look like this:

![use effect flow chart](https://svgshare.com/i/UbR.svg)

## `useEffect` Implementation examples
For the sake of example, let's consider something useful and handy. In this example, we will fetch data from [reqres.in][1] and put it in a state called 'users'. We will also select an user from it and print their name. Also, I will be using [axios][2] library to fetch data.

First, import the method:
```js
import { useEffect } from 'react'
```

Implementation of `useEffect` without any cleanup but with list of dependency would look like:

```js
const [ users, setUsers ] = useState([])

useEffect(async ()=>{
	const response = await axios.get(`https://reqres.in/api/users`)
	setUsers(response.data)
},[])
```

Implementation of `useEffect` with cleanup and dependency list would look like:
```js
useEffect(async ()=>{
	const response = await axios.get(`https://reqres.in/api/users`)
	setUsers(response.data)
	return ()=>{ console.log("Cleaning up the mess!")}//do something else
},[users])
```

Implementation of `useEffect` with a function as effect function:
```js
useEffect(()=>{
	function doSomething() {
		const response = await axios.get(`https://reqres.in/api/users`)
		setUsers(response.data)
	}
	doSomething()
	return ()=>{ console.log("Cleaning up the mess!")}//do something else
},[users])
```

Implementation of `useEffect` with functions, if the function is outside the `useEffect`:
```js
const doSomething = useCallback(() =>{
	const response = await axios.get(`https://reqres.in/api/users`)
	setUsers(response.data)
}, [])

useEffect(()=>{
	doSomething();
},[doSomething])

```

[1]: https://reqres.in/
[2]: https://www.npmjs.com/package/axios