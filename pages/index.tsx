import Head from 'next/head'
import { BasicMap } from '../components/map/BasicMap';

export default function Home() {
  return (
    <div className="py-0 px-8">
      <Head>
        <title>Mapbox App</title>
        <meta name="description" content="Coder Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-16 flex-1 flex flex-col justify-center items-center">
        <div className='mt-5'>
          <BasicMap/>
        </div>
        <p className="xl:text-2xl text-xl mt-10">
          Mapbox App
        </p>

      </main>

      <footer className="flex flex-1 justify-center items-center border-t py-8">
        Developed by<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>Shahin</span>
      </footer>
    </div>
  )
}
