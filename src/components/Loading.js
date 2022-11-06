import tw from "twin.macro";

export default function Loading() {
  return <Overlay>Loading...</Overlay>;
}

const Overlay = tw.div`fixed z-50 inset-0 bg-gray-300 flex justify-center items-center text-8xl`;
