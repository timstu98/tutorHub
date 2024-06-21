import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import clientPromise from "../../../../lib/mongodb";
import { ObjectID } from 'mongodb'
 
// export async function GET(context: { params }) { //, request: Request...... context: { params }

// request: Request,
//   { params }: { params: { slug: string } }

export async function GET(request: Request, {params}: { params: { lesson_id: string } } ) {
    // console.log(params)
    // { params }: { params: { slug: string } }

    // const {searchParams} = new URL(request.url)
    // const id = searchParams.get('lesson_id')
    // console.log(params)

    try {
      const client = await clientPromise;
      const db = await client.db("tutorHub");

      console.log(params.lesson_id)
      console.log(ObjectID(parseInt(params.lesson_id)))
      
      // const o_id = new 
      const res = await db.collection("lessons").find({"_id": ObjectID(parseInt(params.lesson_id))}).toArray()
      // const res = await db.collection("lessons").find({"_id": params.lesson_id}).toArray()
      // console.log(res.ok)
      // const print =  await res.json()
      // console.log(print)
      console.log(res)
      return NextResponse.json({lesson:res})
      // return true
      
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
      }
    }