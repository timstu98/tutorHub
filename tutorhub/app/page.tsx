// import Link from "next/Link"
import Header from "@/components/layout/header"
import Balancer from 'react-wrap-balancer'

export default function Home() {
  return ( <>
  <Header />
  <div className="w-full max-w-xl px-5 xl:px-0">
  <Balancer>
    Hi
  </Balancer>
  </div>

  </>
  )
}
