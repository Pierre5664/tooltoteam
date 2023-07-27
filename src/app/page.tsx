'use client'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

export default function Home() {

const router = useRouter()

return (
      <><div className="container mx-auto">
        <Logo />
      </div>
      
      <div className="container flex flex-row py-48 w-500  mx-auto gap-24 align-middle justify-center">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded basis-1/3"
        onClick={() => router.push('/newDasch')}>
        Create a new Dashboard
      </button>
      <button
        type="button"
        className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded basis-1/3"
        onClick={() => router.push('/dashboars/0')}>
        Open a Dashboard
      </button>
      </div></>
    )
}
