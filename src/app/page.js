import MainNav from '@/Page/Home/MainNav'
import TopNav from '@/Page/Home/TopNav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
        <header>
          <TopNav></TopNav>
          <MainNav></MainNav>
        </header>
    </main>
  )
}
