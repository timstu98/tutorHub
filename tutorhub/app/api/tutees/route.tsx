import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb";
 
export async function GET(request: Request) {

    try {
      const client = await clientPromise;
      const db = await client.db("tutorHub");
  
      const res = await db.collection("")

      
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
      }
    }