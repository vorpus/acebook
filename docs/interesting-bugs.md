1. logout after refreshing page gave strange errors, turns out you need to dispatch the redirect. Also setting logout state causes rerender which could break certain jsx elements.

TODO:
* how to debug for mobile?

* I want to keep the elements that do nothing

* how does user profile work? posts made by user or posts directed toward user? how to make this into query?
