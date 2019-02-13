# Redditch

# Minimum Viable Product

Redditch is a small town in England. It's also a website I'm working on. My website has nothing to do with the English town. It is a clone of Reddit. I will build Redditch using Javascript and React/Redux on the front-end and Express and MySQL on the backend.
By the end of the production period, this app will, at a minimum, satisfy the following criteria:

- Hosting on a live server
- New user account creation, login and deleting.
- Browsing and searching for posts and users by post titles and usernames, respectively.
- Creating new posts and commenting on other users' posts.
- Replying to comments.
- Casting up/down votes on posts/comments
- Deleting posts/comments that user created.
- Subscribe to subreddits

# Design Docs

- [View Wireframes](./wireframes)
- [React Components](./component-hierarchy.md)
- [API Endpoints](./api-endpoints.md)
- [DB Schema](./db-schema.md)
- [Sample State](./sample-state.md)

# Implementation Timeline

## Phase 1: Backend, API (7 days)

- **Objective:** Creating backend sql tables and populating it with dummy data. Creating backend API routes using Express.

## Phase 2: Frontend Components and everything else (15 days)

- **Objective:** Working out the logic of ...
  - components
  - search
  - up/down votes
  - commenting on posts/comments
  - showing lading page with `trending view`
  - using up/down votes to order Posts
  - other stuff ...

## Bonus Features (TBD)

- Implement more of reddit features
- trending based on different criteria
