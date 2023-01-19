import Head from 'next/head'

const cover = (
  <div className="w-screen h-screen flex flex-col">
    <div id="logo" className="">
      <h1>Isabella Captured</h1>
    </div>
    <div className="flex-grow grid place-items-center">
      <div className="flex flex-row border border-slate-800 space-x-8">
        <h1>Create.</h1>
        <h1>Capture.</h1>
        <h1>Forever.</h1>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Isabella Captured</title>
        <meta name="description" content="Isabella Captured photography site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {cover}
      </main>
    </>
  )
}
