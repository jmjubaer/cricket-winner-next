"use client"
import Announce from '@/Page/Home/Announce'
import Match from '@/Page/Home/Match'
import NewsSection from '@/Page/Home/NewsSection'
import TrendingNews from '@/Page/Home/TrendingNews'

export default function Home() {
  return (
        <>
          <Match></Match>
          <NewsSection></NewsSection>
          <TrendingNews></TrendingNews>
          <Announce></Announce>
        </>
  )
}
