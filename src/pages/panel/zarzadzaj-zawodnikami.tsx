import { AdminstrationPanelLayout } from '@/components/Domain/panel/AdministrationPanelLayout';
import { CompetitorsTable } from '@/components/Domain/panel/CompetitorsTable';
import { NextPage } from 'next';
import Head from 'next/head';

const AdministrationPanelPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MZTS - panel - zarządzaj zawodinkami</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AdminstrationPanelLayout>
          <CompetitorsTable />
        </AdminstrationPanelLayout>
      </main>
    </>
  );
};

export default AdministrationPanelPage;