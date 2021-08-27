import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-gray-900">
      <Head>
        <title>wojtek</title>
        <link rel="icon" href="/lion.png" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-8 md:px-20 text-center font-mono">
        <h1 className="text-6xl md:text-5xl font-semibold mt-20 mb-4 md:mb-2">hi im wojtek</h1>
        <p className="text-sm md:text-xs mb-10">(it's a polish name pronounced voytech 🇵🇱)</p>
        <p className="mb-10">im a software dev & founder of Mazury, a decentralized p2p referral network on ethereum</p>
        <p className="mb-10">in my web2 life i used to <a target="_blank" href="https://www.toptal.com/resume/wojciech-kulikowski" className="underline">freelance</a> and founded a <a target="_blank" href="https://www.deltologic.com/" className="underline">software agency</a></p>
        <p className="mb-10">i used to live in berlin & warsaw, now im based in paris 🇫🇷</p>
        <a target="_blank" href="https://twitter.com/wojtekwtf" className="underline mb-4">twitter</a>
        <a target="_blank" href="https://app.ens.domains/name/wojtek.eth" className="underline">ens</a>
      </main>
    </div>
  )
}
