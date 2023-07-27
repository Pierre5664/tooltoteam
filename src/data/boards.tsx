import React from 'react'

const dashs = [{
    id: 0,
    name: "Myriam's Birthday",
    description: "Globale organization plan for Myriam's Birthday !",
    tasks:[{
      id: 0,
      content: "Buy Gift",
     }, {
      id: 1,
      content: "Find a good place",
     }, {
      id: 2,
      content:  "Food",
     }, {
      id: 3,
      content: "Drinks",
     }
    ],
    team:[{
      id: 0,
      memberName: "Tania",
      avatar: "/avatars/avatar1.png",
      hasdone: false
    }, {
      id: 1,
      memberName: "Alexandr",
      avatar: "/avatars/avatar2.png",
      hasdone: false
    },{
      id: 2,
      memberName: "Sam",
      avatar: "/avatars/avatar3.png",
      hasdone: false
    }
  ],
    done: false,
  }, {
    id: 1,
    name: 'Summer Holydays',
    description: "Summer is coming ! We've to plan it! Hurry up !",
    tasks:[{
      id: 0,
      content: "Find a good Destination",
     }, {
      id: 1,
      content: "Check van motor",
     }, {
      id: 2,
      content:  "From 12 July to 8 September",
     },
    ],
    team:[{
      id: 0,
      memberName: "Robert",
      avatar: "/avatars/avatar4.png",
      hasdone: false
    }, {
      id: 1,
      memberName: "Mei",
      avatar: "/avatars/avatar5.png",
      hasdone: false
    }
  ],
    done: false,
  }, {
    id: 2,
    name: 'School Furnitures',
    description: 'I know, I know ... But We have to! List of furnitures to buy',
    tasks:[{
      id: 0,
      content: "Check your own furnitures",
     }, {
      id: 1,
      content: "Compare to the new list",
     }, {
      id: 2,
      content:  "Underline missing items in red",
     }, {
      id: 3,
      content: "And get the list back to me before the vacations are over!",
     }
    ],
    team:[{
      id: 0,
      memberName: "Max",
      avatar: "/avatars/avatar6.png",
      hasdone: false
    }, {
      id: 1,
      memberName: "Jane",
      avatar: "/avatars/avatar1.png",
      hasdone: false
    }
  ],
    done: false,
  }];
  
export default function boards() {
  return (
    dashs
  )
}
