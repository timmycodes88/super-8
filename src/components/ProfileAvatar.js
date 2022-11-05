import React from 'react'
import tw from 'twin.macro'

export default function ProfileAvatar() {
  return (
    <Initials>TW</Initials>
  )
}

const Initials = tw.div`w-8 h-8 flex justify-center items-center border-2 border-white shadow rounded-full bg-purple-800 text-white `
