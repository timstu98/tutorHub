// import Link from "next/Link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Card from "@/components/home/card"
import Balancer from 'react-wrap-balancer'

export async function getLessons() {
  const res = await fetch("http://localhost:3000/api/lessons", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) { throw new Error("Failed to fetch data")}

  let lessons =  await res.json();
  console.log(lessons)
  return lessons.lessons
}

export async function getLesson(lesson_id:string) {
  const res = await fetch(`http://localhost:3000/api/lessons/${lesson_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // if (!res.ok) { throw new Error("Failed to fetch data")}

  // let lesson =  await res.json();
  // console.log(lesson)
  console.log("help")
  return res
  // return true
}

{/* <ul>  
{lessons?.map(lesson => (
  <li key={lesson._id}>{lesson.title} with {lesson.content}</li>
))}
</ul> */}

export default async function Home() {
  // const lessons = await getLessons();
  const lesson = await getLesson("64a04409d6bac1756a8b6387");
  console.log("something")
  return ( 
  <>
  <body>
  <div className="flex flex-col h-screen justify-between">
  <Header />
  {/* Main body*/}
  <div className="w-full mb-auto px-5 xl:px-0">
    {/*Top section*/}
    <div className="grid grid-cols-3 bg-slate-800 text-slate-100">

      <div className="col-span-2 flex flex-col items-center my-20">
        <div>Free bit</div>
        <h1 className="text-2xl">What's going on?</h1>
        <p>Description</p>
        <div>GCSE ..... A Level ..... Internships</div>
      </div>
      <div className="col-span-1">
        Image on RHS
      </div>
      
    </div>
    {/*Cards*/}
    <div className="w-full ">
      <div className="bg-red-300">
        Title part of the squares
      </div>
      {/*Cards*/}
      <div className="grid grid-cols-3">
        <Card size="2"></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="h-screen">hi</div>
    {/* <Balancer>
      Hi
    </Balancer> */}
    </div>
  </div>
  <Footer />
  </div>
  </body>
  </>
  )
}