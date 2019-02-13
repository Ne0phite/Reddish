import React from "react";
import Postlist from "./Postlist";
import "../styles/Feed.css";

export default class Feed extends React.Component {
  state = {
    currentUser: {
      id: 1,
      username: "reddishuserone",
      profile_pic: "url"
    },
    users: [
      {
        id: 2,
        username: "abc",
        profile_pic: "url1"
      },
      {
        id: 3,
        username: "fellow",
        profile_pic: "url5"
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
        title: "long established fact that a reader will be distracted",
        body:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isLink: false,
        user_id: 2,
        subreddit_id: 4
      },
      {
        id: 2,
        title: "Various versions have evolved over the years",
        body:
          "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg",
        isLink: true,
        user_id: 3,
        subreddit_id: 7
      },
      {
        id: 3,
        title: "long established fact that a reader will be distracted",
        body:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isLink: false,
        user_id: 2,
        subreddit_id: 4
      },
      {
        id: 4,
        title: "distracted by the readable content of a page when",
        body:
          "https://rangerrick.org/wp-content/uploads/2018/03/Meerkat-RR-Dev-Jan-2018.jpg",
        isLink: true,
        user_id: 3,
        subreddit_id: 7
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
        type_of_vote: "up"
      },
      {
        id: 1,
        user_id: 5,
        votedOn_id: 2,
        type_of_vote: "down"
      }
    ]
  };

  render() {
    return (
      <div className="feed">
        <Postlist posts={this.state.posts} />
      </div>
    );
  }
}
