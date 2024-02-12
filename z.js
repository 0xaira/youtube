/*
Machine Coding Round :
Requirement Clarifiations: 5 mins
  ->Feautures
  ->Tech Stack
  ->Time Limit

Planning: 5 mins


Header
Body
  SideBarr
    MenuItems
  Main Container 
    ButtonLists
    Video Conatiner 
       Video Cards
 Watch Page 

 Search using Debouncing 

 Debouncing:
  -> It is a technique to delay the execution of the function until after some time has passed since the last time the function was invoked.
  -> It is used to limit the number of times a function is called
  
  Implementaion in Search:
  -> When the user types in the search bar, the search function is called. If the user types very fast, the search function will be called for every key stroke. This will cause the application to make a lot of requests to the server.
  -> To avoid this, we can use debouncing to delay the execution of the search function until after some time has passed since the last time the function was invoked.
  -> This will limit the number of times the search function is called and reduce the number of requests to the server.

  Implementation:
  -> If keystoke differnce is less than 200ms, we will not make API call
  -> If keystoke differnce is more than 200ms, we will make API call

  useEffect(() => {
    const timer = setTimeout(() => {
      searchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }
  }, [searchQuery]);

  Here if we enter any character(example 'j')
  -> It will wait for 200ms and then make API call
  -> If we enter any character before 200ms, it will clear the timer and wait for 200ms again
  -> This will limit the number of times the search function is called and reduce the number of requests to the server.

  

  */