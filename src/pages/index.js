import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { useRef } from 'react';

export default function Home() {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const footerRef = useRef(null);

    const handleScrollTo = (section) => {
        const sectionRefs = {
            hero: heroRef,
            services: servicesRef,
            footer: footerRef,
        };

        const targetRef = sectionRefs[section];
        if (targetRef && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head>
                <title>Вари Арт</title>
                <meta name="description" content="Наша команда ВариАрт* - это художники, скульпторы, бутафоры, декораторы и инженеры, воплощающие любые самые смелые творческие идеи!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="min-h-screen bg-cream">
                <Navbar onScrollTo={handleScrollTo} />
                <section ref={heroRef}>
                    <Hero />
                </section>
                <About />
                <section ref={servicesRef}>
                    <Services />
                </section>
                <section ref={footerRef}>
                    <Footer />
                </section>
            </div>
        </>
    );
}
