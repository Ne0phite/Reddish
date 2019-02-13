# Sample State

```js
{
  currentUser: {
    id: 1,
    username: 'reddishuserone',
    profile_pic: "url"
  },
  users: [
    {
      id: 2,
      username: 'abc',
      profile_pic: 'url1'
    },
    {
      id: 3,
      username: 'fellow',
      profile_pic: 'url5'
    }
  ],
  subreddits: [
    {
      id: 3,
      subreddit_title: "funny things"
    },
    {
      id: 2,
      subreddit_title: "javascript"
    }
  ],
  posts: [
    {
      id: 1,
      title: 'funny stuff',
      content: 'imgur link url',
      isLink: true,
      user_id: 3,
      subreddit_id: 7
    },
    {
      id: 2,
      title: 'pet stuff',
      content: 'pets are balh blah',
      isLink: false,
      user_id: 2,
      subreddit_id: 4
    }
  ],

  comments: [
    {
     id: 1,
     user_id: 4,
     body: "wow, that is pretty crazy",
     commentedON_id: 2,
     commentedON_type: "post"
   },
    {
     id: 3,
     user_id: 4,
     body: "no way that is real. just look at height",
     commentedON_id: 3,
     commentedON_type: "comment"
   }

  ],
  subscriptions: [
    {
      id: 2,
      user_id: 3,
      subreddit_id: 2
    },
    {
      id: 1,
      user_id: 5,
      subreddit_id: 5
    }
  ],
  voting: [
    {
      id: 2,
      user_id: 3,
      votedOn_id: 3,
      type_of_vote: 'up'
    },
    {
      id: 1,
      user_id: 5,
      votedOn_id: 2,
      type_of_vote: 'down'
    }
  ]
}
```
