import tw from "twin.macro";
import Friends from "../features/home/Friends";
import Posts from "../features/home/Posts";

export default function Home() {
  return (
    <Body>
      <Main>
        <Posts />
      </Main>
      <Side>
        <Label>Friends</Label>
        <Friends />
      </Side>
    </Body>
  );
}

const Body = tw.div`flex`;

const Main = tw.main`flex flex-col items-center gap-10 overflow-y-auto w-full p-8 min-h-screen`;
const Side = tw.aside`mt-8 flex flex-col gap-2 overflow-y-auto w-52`;

//For Side
const Label = tw.h2`mx-auto underline text-xl`;
