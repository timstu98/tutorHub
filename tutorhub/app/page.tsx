// import Link from "next/Link"
import Header from "@/components/layout/header"
import Balancer from 'react-wrap-balancer'
import clientPromise from "../lib/mongodb";
import {useState} from 'react';


// type Props = {
//   lessons: [Lesson]
// }

// type Lesson = {
//   _id: String;
//   title: String;
//   content: String;
// }

export async function getData() {
  const res = await fetch("http://localhost:3000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) { throw new Error("Failed to fetch data")}
  let lessons = await res.json();
  console.log(lessons)

  return lessons
}


export default function Home() {
  const lessons = getData();
  // console.log(lessons);

  return ( <>
    <ul>  
      <li key={lessons.id}>{lessons.title}</li>
  </ul>
  <Header />
  <div className="w-full max-w-xl px-5 xl:px-0">
  <Balancer>
    Hi
  </Balancer>
  </div>

  </>
  )
}