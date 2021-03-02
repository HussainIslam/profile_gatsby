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

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2021-03-01T19:07:57.614Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36\&quot; etag=\&quot;qFK5et-8UP__LrIzFQwI\&quot; version=\&quot;14.4.3\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;44tnilYa6obqubEtAVNZ\&quot; name=\&quot;Page-1\&quot;&gt;zZXBjpswEIafhmMlbGdZcixs2O1hT0it1JuLB7DW2MiYQvr0NcFACIm0K2XVnmJ/Hnvs/58JHomr/lnTunxVDISHfdZ75MnDGKEQ25+BHEfySB5GUGjOXNACUv4HHPQdbTmDZhVolBKG12uYKSkhMytGtVbdOixXYp21pgVsQJpRsaU/ODPlSMMHf+EvwItyyox8t1LRKdiBpqRMdWeIHDwSa6XMOKr6GMQg3qTLuC+5sTpfTIM079nwjb7uTBh+L/sU8Z+UpFXKv7hTflPRuge7y5rjpEBXcgNpTbNh3lmXPRKVphJ2huyQNvWoe857sKkiQX+BiGj2VmjVShYrofTpJBLHSbLf25CcC3HGI5IkQWC5uwxoA/3NV6JZO1t0oCow+mhD3Aa8d3K7ekPTvFvcwzvHyjPnZkhdxRTz2YuoduB0/YDGeKNx28AhzwfZLsW2DzdrfRuj1RtMakkl4UJAh6jghbTTzAoFlkeDjNwW8le3UHHGhjTRNUNPVg32PfnD8Uoa14ro8bN8wRtfQnLFls9yhfybyr9Q9qITguB+nUCCteI42HYCCq50wgzvrvluozm4NvDzVmaGK/mfdsQNa6fk9++XrXto6x6+9j/2cfPsdPkMndbOPubk8Bc=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>

In addition, if we need to cleanup the effect after we are done working with it, we simply reply another callback from the effect function. So, visually it would look something like this:

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2021-03-01T19:10:27.778Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36\&quot; etag=\&quot;9Y4S1rNNxI5NOrA71R-d\&quot; version=\&quot;14.4.3\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;44tnilYa6obqubEtAVNZ\&quot; name=\&quot;Page-1\&quot;&gt;zZbNjpswFIWfhmUljAkhy8KEmS5mhdRK3blwAWuMjRxTSJ++JhgIgUitRNKuYh9f/33HJ8LCYdm+SlIV7yIFZjl22lr4xXIchHxH/3TKuVf2eNcLuaSpKZqEmP4CI9pGrWkKp1mhEoIpWs3FRHAOiZppRErRzMsywea7ViSHhRAnhC3VbzRVRa/6O3vS34DmxbAzss1ISYZiI5wKkormSsJHC4dSCNW3yjYE1sEbuPTzojuj48EkcPUnE76Qd1f5/teijRH9TnBcxvSTWeUnYbW5sDmsOg8EmoIqiCuSdP1Gu2zhoFAl0z2km+RU9dwz2oLeKmDkB7CAJB+5FDVPQ8GEvKyEwzCKDgddklHGrvQAR5Hnad0cBqSC9u4t0chOPzoQJSh51iVmgnMwuM17Q0O/mdxzXKMVV86NIjEvJh/XnqDqhuH6F4ydBeP6BMcs67DdwtYXV3O+JyXFBwy0uOBwA9BIhNGc626iQYHWgw4j1Q/5sxkoaZp22wRrhl6s6ux7sbvlBVcmimj/KF+chS8+XrHlUa7gf/Pyb8jeJMHztksC9ubEHW+ZBOStJGEUN2fuLpiDiYGd1TxRVPD/NBF3rB023z4vS/fQ0j1n7X/sUebtnhaYO1RvshJF22XFtee0sb2SFbSWFfQo3PsF7oQB4XX12LAwyNSzouI+0Ty8TVR0d/piu4xdfffi428=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>

Apart from these, we would want to control when our effect function is run. In class-based components we did this by adding the affect to either or both of the life cycle methods. However, in `useEffect` hook, we have the concept of 'list of dependency', which helps us control when the effect is invoked. For this, we pass an array as the optional second argument to the `useEffect` method. So, it would contain two arguments: the effect function and list of dependency. The list of dependency can be a variable (prop/state) or can be a method, preferrablly declared within the `useEffect` method. So, the visual representation at the moment would look like:

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2021-03-01T19:19:27.064Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36\&quot; etag=\&quot;oIifs0jLRtJxkikP8w_G\&quot; version=\&quot;14.4.3\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;44tnilYa6obqubEtAVNZ\&quot; name=\&quot;Page-1\&quot;&gt;3ZfLjpswGIWfhmUlgxNCloUJbRezQmql7lz4AWuMjYxpyDx9TTBJuESZSCStuop9fIPv+ODYwkHRfJGkzF9FAsxyUNJY+MVyHNv2HP3TKodO2eB1J2SSJqbTWYjoOxgRGbWmCVSDjkoIpmg5FGPBOcRqoBEpxX7YLRVsuGpJMpgIUUzYVP1BE5V3qrdGZ/0r0CzvV7aRaSlI39kIVU4Ssb+Q8M7CgRRCdaWiCYC18Hou3bjwSuvpwSRw9ZEB38jrSnne97yJbPqT4KiI6Cczy2/CavPC5mHVoSewz6mCqCRxW99rly3s56pgumbrIqnKjntKG9BL+Yz8AuaT+C2TouZJIJiQx5lwEIThdqu7pJSxC93HYei6WjcPA1JBc/Ut7RM7velAFKDkQXcxA5ytwW32m93X92f3nJXR8gvnTiIxOyY7zX2GqguG6x2MnQnjuoJdmrbYxrD1i6sh30pJ8QY9LS44jAAaiTCacV2NNSjQut9ipHojfzYNBU2Sdhl/ztCjVa19L6idXnBlomhvHuWLM/HFwzO2PMoV/Hd2/ojsKAmuu1wSsDsk7rjTJNjuTBJO4uLMVxPmYGKA0prHigr+jybiirX94svnZeqePXXPmfuOPcq89dMCc4XqKCthuFxWVmhIG6OZrNhzWbEfhXszwR0zILwuHxsWBql6VlRWTzQPPzMq3u2oDJndCM59SEdWjmKDUBAgtNShvrl5xDz3hNlOyDNateeLSNtLCJSgqfP48B8kJxeSvmuNMDN8iVMHuUNDvamhc3+eT7eeOwzV1fPl59h2cYXEuz8=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>

## How to decide on implementation of `useEffect`?
There are certain decisions that we need to make while implementing a `useEffect` hook. The implementation will largly depend on the results of those decisions. The decision tree will look like this:

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2021-03-01T21:14:03.953Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36\&quot; etag=\&quot;8cnrIIxxsgOcryGF52ax\&quot; version=\&quot;14.4.3\&quot; type=\&quot;google\&quot;&gt;&lt;diagram name=\&quot;Page-1\&quot; id=\&quot;edf60f1a-56cd-e834-aa8a-f176f3a09ee4\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>

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