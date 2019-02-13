_API Endpoints_

# Root

- `GET /` or `GET /home`
  - loads React web app

## JSON API

# Users

- `GET /api/users`
  - gets all users
- `GET /api/users/username`
  - gets single user's profile
- `POST /api/users`
  - Creates new user
- `PATCH /api/users/username`
  - Allows user to update their profile

# Subreddits

- `GET /api/subreddits`
  - gets all subreddits

# Posts

- `GET /api/subreddits/subreddit_title`
  - gets all posts on a subreddit
- `GET /api/users/username/posts`
  - gets all posts from a user
- `GET /api/subreddits/comments/:user_id/post_title`
  - gets a single post with all comments
- `POST /api/subreddits/subreddit_title/submit`
  - Creates new post on a subreddit
- `DELETE /api/subreddits/subreddit_title/post_id`
  - deletes a post

# Comments

- `GET /api/users/username/comments`
  - gets all comments from a user
- `GET /api/subreddits/comments/:user_id/post_title`
  - gets a single post with all comments
- `POST /api/subreddits/comments/:user_id/post_title`
  - Creates new comment on a post
- `PATCH /api/subreddits/comments/:user_id/post_title`
  - edits comment on a post
- `DELETE /api/subreddits/comments/:user_id/post_title`
  - deletes comment on a post

_FrontEnd Routes_

- `/` or `/home` ==> landing page
- `/signup` ==> signup form
- `/login` ==> login form
- `/users/user_id` ==> user profile with comments and posts
- `/subreddits/subreddit_title` ==> all posts on a subreddit
- `/subreddits/comments/:user_id/post_title` ==> single post with all comments/sub-comments
- `/subreddits/comments/:user_id/post_title` ==> new comment
- `/user/username/posts` ==> individual user with all posts
- `/subreddits/subreddit_title/submit` ==> new post
- `/user/username/comments` ==> individual user with all comments
