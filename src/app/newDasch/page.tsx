'use client';
import React from "react"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Page() {
    return (
      <div className="mt-8 p-1 w-96 mx-auto">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Create a board
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter board details.
          </Typography>
        <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-80 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Title" />
            <Input size="lg" label="Description" />
          </div>
          
            
            {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography> */}
        </form>
        <Typography variant="h4" color="blue-gray" className="py-4">
            Create a team
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Enter team details.
          </Typography>
        <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-80 mx-auto">
          <Input size="lg" label="Team member" />
          
          <Button className="mt-6" fullWidth>
            Create Board
            </Button>
        </form>
        </Card>
      </div>
      
      
    )
      
    
    
    
  }