import React from 'react'
import HeroBanner from '../Component/HeroBanner'
import MultipleBanner from '../Component/MultipleBanner'
import NewCollections from '../Component/NewCollections'
import MidBanner from '../Component/MidBanner'
import TopSeller from '../Component/TopSeller'
import Features from '../Component/Features'


export default function Home() {
  return (
    <>
        <HeroBanner />
        <MultipleBanner/>
        <NewCollections/>
        <MidBanner/>
        <TopSeller/>
        <Features/>
        
    </>
  )
}
