# Timer

A prototype app for figuring out how to track my time.

State is handle through services and BehaviorSubjects

TODO:
- Write tests
  - Input clears on submit
  - Input handles submit
  - Deleting an item removes it from state
  - Clear buttton clears list
  - Clock shows the time

- Also, figure out how to properly model state. Right now we have each feature being able to hold a list of items that represent that feature. We've lost one of the early goals of this project to keep a single, large, ApplicationState object. I'm not sure how we'll hook that up, but I believe it could lead to far less coupling than what we're used to working with.

- Find a good way to strongly type your state service.