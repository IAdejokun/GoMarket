import { Helmet } from 'react-helmet-async';

import { CONFIG } from '../config-global';

import PrimarySearchAppBar from '../components/navbar/nav';

//----------------------------------------------


export default function Page() {
    return (
      <>
        <Helmet>
          <title> {`Home - ${CONFIG.appName}`}</title>
          <meta
            name="description"
            content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
          />
          <meta
            name="keywords"
            content="react,material,kit,application,dashboard,admin,template"
          />
        </Helmet>

        <PrimarySearchAppBar />

        <section id='hero-ad'>

        </section>

        <section id='discountStores'>
        
        </section>

        <section id='storesLocationandCategory'>

        </section>

        <section id='companyInfo'>

        </section>

        <section id='moreInfo'>

        </section>

        <section id='faq'>

        </section>
      </>
    );
}