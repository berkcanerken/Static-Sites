import Head from 'next/head';
import { Inter } from '@next/font/google';
import { CooperationSection } from '@/components/Domain/cooperation/CooperationSection';

const inter = Inter({ subsets: ['latin'] });

const Cooperation: React.FC = () => {
  return (
    <>
      <Head>
        <title>MZTS - Współpraca</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <article>
          <CooperationSection />
        </article>
      </main>
    </>
  );
};

export default Cooperation;
