_BackEnd Tables with columns_

# users Table

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| username    | text      | not null              |
| profile_pic | text      |                       |

# subreddits Table

| column name     | data type | details               |
| --------------- | --------- | --------------------- |
| id              | integer   | not null, primary key |
| subreddit_title | text      | not null              |

# post Table

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| post_content | text      | not null              |
| isLink       | bool      | not null              |
| user_id      | integer   | not null, foreign key |
| subreddit_id | integer   | not null, foreign key |

# comments Table

| column name      | data type | details               |
| ---------------- | --------- | --------------------- |
| id               | integer   | not null, primary key |
| user_id          | integer   | not null, foreign key |
| body             | text      | not null              |
| commentedON_id   | integer   | not null, foreign key |
| commentedON_type | text      | not null              |

# voting Table

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| type_of_vote | text      | not null              |
| user_id      | integer   | not null, foreign key |
| votedOn_id   | integer   | not null, foreign key |

# subscriptions Table

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| user_id      | integer   | not null, foreign key |
| subreddit_id | integer   | not null, foreign key |
