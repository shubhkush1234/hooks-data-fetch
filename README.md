UseEffect hook:

the effect function in the useEffect hook runs every render. When state is set, the component re renders. So, if we are making API call in use effect and setting it to state, it will fall into infinite loop. So, need to pass second parameter in effect function as [].