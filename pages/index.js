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
        <p className="mb-10 w-4/5 max-w-screen-sm">im a software dev & founder of <a target="_blank" href="https://mazurylabs.com" className="underline">mazury labs</a>, a collaborative effort for building decentralized professional identities & enabling global web3 talent</p>
        <p className="mb-10">in my web2 life I was <a target="_blank" href="https://www.toptal.com/resume/wojciech-kulikowski" className="underline">freelancing</a> and cofounded a <a target="_blank" href="https://www.deltologic.com/" className="underline">software agency</a></p>
        <p className="mb-10">i used to live in berlin & warsaw, now im based in paris 🇫🇷</p>
        <a target="_blank" href="https://twitter.com/wojtekwtf" className="underline mb-4">twitter</a>
        <a target="_blank" href="https://app.ens.domains/name/wojtek.eth" className="underline mb-10">ens</a>
        <figure className="mb-20">
          <img src="/wojtek.jpeg" className="w-4/5 mx-auto md:w-80" />
          <figcaption className="text-xs mt-2">this is me. photo taken at irl <a target="_blank" href="https://en.wikipedia.org/wiki/Masuria" className="underline">Mazury</a></figcaption>
        </figure>
      </main>
    </div>
  )
}
