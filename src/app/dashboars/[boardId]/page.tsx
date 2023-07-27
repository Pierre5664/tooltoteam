"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import Logo from '@/components/Logo';
import Data from '../../../data/boards'

const boardDatas = Data();

export default function BoardsPage({
  params,
  searchParams,
}: {
  params: { boardId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const router = useRouter();

    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-between p-80 ">
          <div className="space-y-0">
          <Logo />
          <h1 className="text-2xl px-2 text-center font-semi-bold">Choose a dashboard</h1>
          {/* <p>{params.boardId}</p> */}
          </div>
          <div className="flex flex-row gap-4 justify-center px-24">
            {boardDatas.map((data) => {
              return (
                <div className="">
                  <Card className="mt-6 w-80 basis-1/4 bg-[#FFFDFA]" key={data.id}>
                    <CardBody>
                      <Typography variant="h5" color="blue-gray" className="mb-2">
                        {data.name}
                      </Typography>
                      <Typography>
                        {data.description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <button className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow">
                        <Link href={`/dashboard/${encodeURIComponent(data.id)}`}>
                          View Board
                        </Link>
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
      </main>
      </>
    )
  }