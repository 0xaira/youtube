import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Sample comments data with meaningful names, IDs, and nesting levels
const commentsData = [
  {
    id: 1,
    name: "Aira Jena",
    text: "This is the first comment.",
    replies: [
      {
        id: 2,
        name: "Sounak Dutta",
        text: "Nice comment!",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: "Dev Ashrit Behera",
    text: "I agree with Sounak.",
    replies: [
      {
        id: 4,
        name: "Subhojeet Chakraborty",
        text: "Me too!",
        replies: [
          {
            id: 5,
            name: "Ashan Zamil",
            text: "I disagree.",
            replies: [],
          },
        ],
      },
      {
        id: 6,
        name: "Deepesh Nayak",
        text: "I have a different opinion.",
        replies: [],
      },
    ],
  },
  {
    id: 7,
    name: "Rahul Barik",
    text: "Great discussion!",
    replies: [],
  },
  {
    id: 8,
    name: "Jimut Kumar Sahoo",
    text: "This is another comment.",
    replies: [],
  },
  {
    id: 9,
    name: "Sounak Dutta",
    text: "I'm enjoying reading these comments.",
    replies: [
      {
        id: 10,
        name: "Dev Ashrit",
        text: "Me too!",
        replies: [],
      },
      {
        id: 11,
        name: "Ahsan Zamil",
        text: "Agreed.",
        replies: [],
      },
      {
        id: 12,
        name: "Rahul Barik",
        text: "Interesting points.",
        replies: [],
      },
    ],
  },
];

// Comment component to display individual comments
const Comment = ({ data, level }) => {
  const { id, name, text, replies } = data;

  return (
    <div className={`p-3 my-2 border border-gray-300 rounded-lg ml-${level * 4}`}>
      <div className="flex items-start">
        <FaUserCircle className="w-8 h-8 text-gray-600 mr-3" />
        <div>
          <p className="font-semibold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      <div className="pl-8 border-l border-gray-400 mt-2">
        {/* Recursively render replies */}
        {replies.map((reply) => (
          <Comment key={reply.id} data={reply} level={level + 1} />
        ))}
      </div>
    </div>
  );
};

// Component to render the list of comments
const CommentsList = ({ comments, level }) => {
  return comments.map((comment) => (
    <Comment key={comment.id} data={comment} level={level} />
  ));
};

// Main container component to render the comments section
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold mb-5">Comments</h1>
      <div className="space-y-4">
        <CommentsList comments={commentsData} level={0} />
      </div>
    </div>
  );
};

export default CommentsContainer;
