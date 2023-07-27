"use client";
import React from 'react'
import Data from '@/data/boards'
import Link from 'next/link';
import Image from 'next/image';
import { List, ListItem, ListItemPrefix, Avatar, Typography} from "@material-tailwind/react";

const boardData = Data();

export default function TaskSideBar({boardId}) {

  const searchedBoardData = boardData.filter(function(id){
    return id.id === parseInt(boardId)
  })
  
  const dataItems = searchedBoardData.map(data =>  
    
    <div key={data.id} className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
     
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <h1 className="font-bold text-gray-200 text-[20px] ml-3">{data.name}</h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
        <p className="font-semibold text-left text-gray-200 text-[16px] ml-3">{data.description}</p>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
      </div>
              
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4  text-white">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Tasks</span>  
      </div>
      
      <div className="p-2.5 mt-3 rounded-md px-4 text-white text-left">
      {data.tasks.map(task => 
          <li className="list-decimal py-2">{task.content}</li>)}
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold"></span>
          <span className="text-sm rotate-180" id="arrow">
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
          id="submenu">
      </div>

      <div className="my-2 bg-gray-600 h-[1px]"></div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4  text-white">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Team</span>  
      </div>
      <div className="p-2.5 mt-3 rounded-md px-4 text-white text-left" >
      {data.team.map(teamMember => 
          <List>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src= {teamMember.avatar} />
              </ListItemPrefix>
              <div>
            <Typography variant="h6" color="gray">
            {teamMember.memberName}
            </Typography>
              </div>
            </ListItem>
          </List>
          )}
      </div>
      <div className="my-2 bg-gray-600 h-[1px]"></div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <div className="flex justify-between w-full items-center">
          <Link href="/dashboars/0">
            <span className="text-[15px] ml-4 text-gray-200 font-bold py-3">Back to Boards
            </span>
          </Link>
        </div>
      </div>
      <Image
        src="/ToolToTeam.png"
        className="absolute bottom-0 left-5 right-0"
        alt="ToolToTeam Logo"
        width={250}
        height={24} />
    </div>
  ) 
  return (
    (dataItems)
    )   
}
