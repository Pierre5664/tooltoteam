"use client";
import React, { Children } from 'react'
import Data from '../../../data/boards'
import TaskSideBar from'@/components/TaskSideBar';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Checkbox
} from "@material-tailwind/react";

const boardData = Data();

export default function BoardPage({
  params: {boardId},
} : {
  params: { boardId: string }
}) {
  
  const searchedBoardData = boardData.filter(function(id){
    return id.id === parseInt(boardId)
  })

  const boardItems = searchedBoardData.map(searchedBoardItem => 
    {
      
      return <>
        <div className="flex">
          <TaskSideBar boardId={boardId} />
          <div className="flex fixed w-4/5 p-24 left-[400px] ">
            <div className="">
                {searchedBoardItem.tasks.map(
                  task =>
                  <Card className="mt-6 w-100 bg-[#FFFDFA]" key={task.id}>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {task.content}
                    </Typography>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                    <Typography> 
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    {searchedBoardItem.team.map(
                      teamMember =>
                        <Checkbox label={teamMember.memberName} />
                    )}
                  </CardFooter>
                </Card>
                )}
            </div>
          </div>
        </div>  
      </>;
    })

  return ( 
    <div>
        { boardItems }
    </div>
  )
}
