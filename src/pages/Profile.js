import tw from "twin.macro";
import EditProfile from "../features/profile/EditProfile";

export default function Profile() {
  return (
    <Body>
      <EditProfile />
    </Body>
  );
}

const Body = tw.div`p-8 flex flex-col items-center min-h-screen`;
