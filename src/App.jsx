import Header from "./components/Header"
import BaseSection from "./components/BaseSection"
import EducationsSection from "./components/EducationsSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"


export default function App() {
  const [tab, setTab]=useState('effect')

  return (
    <>
      <Header/>
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current)=>setTab(current)} />

        {tab == 'main' && (
        <>
        <BaseSection />
        <h1>Satbayev University-нде оқу</h1>
        <EducationsSection />
        </>
        )}

        {tab == 'feedback' && <FeedbackSection />}
        
        {tab == 'effect' && <EffectSection />}
      </main>
    </>
  )
}

