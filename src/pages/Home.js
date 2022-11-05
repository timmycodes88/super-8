import { useState } from "react";
import tw from "twin.macro";
import { ReactComponent as CommentIcon } from '../assets/svg/comment.svg';
import { ReactComponent as HeartIcon } from '../assets/svg/heart.svg';
import ProfileAvatar from "../components/ProfileAvatar";

export default function Home() {
  const posts = [
    {
      username: "TimmyCodes88",
      comment: "React is AMAZING!",
      likes: 3
    },
    {
      username: "DatNelly",
      comment: "I Love React",
      likes: 500
    },
  ];

  const friends = [
    {
        username: "TimmyCodes88",
    },
    {
        username: "DatNelly",
    }
  ]


  return (
    <Body>
      <Main>
        {posts.map((post) => {
          return (
            <Post>
              <ImagePost />
              <ReactButtonContainer>
                <StyledHeartIcon />
                <StyledCommentIcon/>
              </ReactButtonContainer>
              <UsernameAndComment>
                <ProfileAvatar />
                <Username>
                  <SemiBold>{post.username}:</SemiBold>&nbsp;{post.comment}
                </Username>
              </UsernameAndComment>
            </Post>
          );
        })}
      </Main>
      <Side>
        <Label>Friends</Label>
        {friends.map((friend) => {
            return (
                <FriendContainer>
                    <ProfileAvatar />
                    <h1>{friend.username}</h1>
                </FriendContainer>
            )
        })}
      </Side>
    </Body>
  );
}

const Body = tw.div`flex`;

const Main = tw.main`flex flex-col items-center gap-10 overflow-y-auto w-full p-8 min-h-screen`;
const Side = tw.aside`mt-8 flex flex-col gap-2 overflow-y-auto w-52`;

//For Main
const Post = tw.article`w-full max-w-xl rounded-3xl bg-white p-4 flex flex-col items-center gap-2 shadow-2xl`;
const ImagePost = tw.div`w-full h-[24rem] bg-blue-300 rounded`;
const ReactButtonContainer = tw.div`flex w-full gap-4`;
const UsernameAndComment = tw.div`flex gap-4 w-full items-center`;
const Username = tw.p``;

//For Side
const Label = tw.h2`mx-auto underline text-xl`
const FriendContainer = tw.div`flex gap-4 items-center hover:bg-red-500 hover:text-white cursor-pointer px-2 py-1 rounded`

//Utils
const SemiBold = tw.span`font-semibold`;

// Icons
const IconStyles = `h-6 cursor-pointer`
const StyledHeartIcon = tw(HeartIcon)`${IconStyles}`
const StyledCommentIcon = tw(CommentIcon)`${IconStyles}`
