import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";
 
export async function GET(request: Request) {

    try {
      const client = await clientPromise;
      const db = client.db("tutorHub");
  
      const res = await db.collection("lessons").find({}).limit(20).toArray();
      console.log(typeof res)
      const lessons = res.json();
      console.log(typeof res)
      console.log(NextResponse.json({ lessons }))

      return NextResponse.json({ lessons });
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
      }
    }



//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()
 
//   return NextResponse.json({ data })
// }

// export default async (req, res) => {
//     try {
//       const client = await clientPromise;
//       const db = client.db("tutorHub");
  
//       const posts = await db.collection("lessons").find({}).limit(20).toArray();
  
//       res.json(posts);
//     } catch (e) {
//       console.error(e);
//       throw new Error(e).message;
//     }
//   };