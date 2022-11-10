import tw from "twin.macro";
//Hooks
import usePosts from "./hooks/usePosts";
//SVG
import { ReactComponent as CommentIcon } from "../../assets/svg/comment.svg";
import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import ProfileAvatar from "../../components/ProfileAvatar";

export default function Posts() {
  const posts = usePosts();

  return (
    <>
      {posts.map(post => {
        return (
          <Post>
            <ImagePost />
            <ReactButtonContainer>
              <StyledHeartIcon />
              <StyledCommentIcon />
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
    </>
  );
}

const Post = tw.article`w-full max-w-xl rounded-3xl bg-white p-4 flex flex-col items-center gap-2 shadow-2xl`;
const ImagePost = tw.div`w-full h-[24rem] bg-blue-300 rounded`;
const ReactButtonContainer = tw.div`flex w-full gap-4`;
const UsernameAndComment = tw.div`flex gap-4 w-full items-center`;
const Username = tw.p``;

const SemiBold = tw.span`font-semibold`;

//SVG
const IconStyles = `h-6 cursor-pointer`;
const StyledHeartIcon = tw(HeartIcon)`${IconStyles}`;
const StyledCommentIcon = tw(CommentIcon)`${IconStyles}`;
