import tw from "twin.macro";
import useProfile from "./hooks/useProfile";

export default function EditProfile() {
  const {
    profile: { username },
    usernameValue,
    setUsernameValue,
    setUsername,
  } = useProfile();

  return (
    <Body>
      <Row>
        <Label>Username:</Label>
        <Input
          placeholder={username}
          value={usernameValue}
          onChange={e => setUsernameValue(e.target.value)}
        />
        <Button onClick={setUsername}>Save</Button>
      </Row>
    </Body>
  );
}

const Body = tw.div`flex flex-col gap-10`;
const Row = tw.span`flex items-center gap-4 max-w-lg`;
const Label = tw.p``;
const InputStyles = `w-full outline-none rounded-lg py-1 px-2`;
const Input = tw.input`${InputStyles}`;
const Button = tw.button`bg-green-500 px-2 py-1 rounded-xl text-white hover:bg-green-400`;
