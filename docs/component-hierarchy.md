## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**SignupContainer**
 - SignupForm

**HeaderContainer**
 - Search

**NewPostContainer**
 - NewPostForm
  + NewTag

**NewsFeedContainer**
 - Header
  + static components
  + NewPost
  + NewsFeedItemIndex

**UserProfileContainer**
 - Header
  + NewPost
  + NewsFeedItemIndex
   - With userId tag only

**NewsFeedItem**
 - NewsFeedItem
  + Like
  + Tags



## Routes

|Path                  | Component           |
|----------------------|---------------------|
| "/sign-up"           | "AuthFormContainer" |
| "/sign-in"           | "AuthFormContainer" |
| "/newsfeed"          | "NewsFeedContainer" |
| "/profile/:id"       | "ProfileContainer"  |
| "/new-post"          | "NewPostContainer"  |
| "/search"            | "Search"            |
