import { Accordion } from '@/components/Accordion/Accordion';
import { ContactForm } from '@/components/ContactForm';
import { AdminstrationPanelLayout } from '@/components/Domain/panel/AdministrationPanelLayout';
import { PanelSection } from '@/components/Domain/panel/PanelSection';
import {
  PANEL_SECTION_COMPONENT,
  PANEL_SECTION_HEADING,
  PANEL_SECTION_VARIANT,
} from '@/components/Domain/panel/PanelSection/PanelSection.data';
import {
  panelAccordionContent,
  panelContactSectionMessage,
} from '@/data/panel.data';
import { NextPage } from 'next';
import Head from 'next/head';

const AdministrationPanelPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MZTS - panel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AdminstrationPanelLayout>
          <PanelSection
            headingComponent={PANEL_SECTION_HEADING.H2}
            component={PANEL_SECTION_COMPONENT.SECTION}
            heading="FAQ"
            variant={PANEL_SECTION_VARIANT.WITHOUT_IMG}
          >
            <Accordion content={panelAccordionContent} />
          </PanelSection>

          <PanelSection
            headingComponent={PANEL_SECTION_HEADING.H2}
            heading="Kontakt"
            component={PANEL_SECTION_COMPONENT.SECTION}
            variant={PANEL_SECTION_VARIANT.WITHOUT_IMG}
          >
            {panelContactSectionMessage}

            <ContactForm />
          </PanelSection>
        </AdminstrationPanelLayout>
      </main>
    </>
  );
};

export default AdministrationPanelPage;
