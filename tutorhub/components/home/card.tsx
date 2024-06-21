import Link from "next/Link"

export default async function Card({size="1"}) {
    const twsize = await (size==="2")?"col-span-2":"col-span-1";
return ( <div className={`border-solid border-2 border-sky-500 hover:bg-slate-50 ${twsize} m-5 p-5`}>
<h1 className="text-2xl"> Some information</h1>
<p> More Description </p>
</div>
)
}