1. logout after refreshing page gave strange errors, turns out you need to dispatch the redirect. Also setting logout state causes rerender which could break certain jsx elements.

2. How to implement friend cycle using only api methods available to us - ended up with a lot of class methods on the model to locate friendship and update.

TODO:

[ ] how to debug for mobile?

[ ] I want to keep the elements that do nothing

[ ] Should friend return friend objects or can I return the relevant users?

[ ] how does user profile work? posts made by user or posts directed toward user? how to make this into query?

[x] add profile pic url and cover pic url to user
https://github.com/appacademy/curriculum/tree/master/full-stack-project/demos/file_upload_demo

[x] make links on header work

[ ] loading bar
http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html

[x] visiting profile doesn't take you to top of page

[x] seed data custom times
http://stackoverflow.com/questions/2417182/changing-created-at-for-seed-rb-data

[x] need to do logged in check on user profile - logout button doesn't work properly

FRIEND TABLE:
USER1 IS PERSON WHO REQUESTED
USER2 IS PERSON WHO NEEDS TO REQUEST
