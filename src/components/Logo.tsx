import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-900 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4 lg:dark:bg-zinc-800/30 ">
      <Image
        src="/ToolToTeam.png"
        className= ""
        alt="ToolToTeam Logo"
        width={200}
        height={48}
      />
    </div>
  )
}
