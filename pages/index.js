import React from "react";
import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import profilePic from "../public/hero (1).png";
import logoDev from "../public/dev.svg";
import logoGraph from "../public/graph.svg";
import logoLaptop from "../public/laptop.svg";
import PhotoSectionOne from "../public/photodashboard.png";
import PhotoTestimonial from "../public/myLevel.png";
import Link from "next/link";
import SlideHome from "../components/SlideHome";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import FormTel from "../components/FormTel";
import MultiSlider from "../components/MultiSlider";
import { motion } from "framer-motion";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http:/localhost:4000/image`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function Home(props) {
  return (
    <div className="containerApp ">
      {console.log(props)}

      <Head>
        <title>DigigitYourDream</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="backgroundWebsite">
        <Navbar />
        <section className="container mx-auto  lg:ml-10 lg:px-16 mt-20 ">
          <div className="lg:mt-24 flex flex-col-reverse justify-center  lg:flex-row  pb-10 mt-8">
            <motion.div 
                initial={{x:-200, opacity:0}} 
                transition={{duration:1.2,}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true}} className="flex flex-1 flex-col items-center lg:items-start mt-28 lg:mt-10 space-y-6 lg:space-y-8 ">
              <h1 className="text-4xl px-4  lg:px-0 md:text-xl lg:text-7xl font-bold text-start text-white flex-nowrap ">
                Développement Full-Stack pour Start-up
              </h1>
              <div className="px-4 lg:px-0 lg:w-4/5">
                <p className="text-start lg:text-xl text-white  ">
                 
                  De la petite entreprise au plus importante startup nous nous
                  ocuppons de vos projets digital Application web, logiciel
                  surmesure,plateformes en ligne..
                </p>
              </div>
           <FormTel/>
            </motion.div >
            <div className="flex justify-center flex-1 hidden lg:block">
              <motion.img
          initial={{y:-200, opacity:0}} 
          transition={{duration:1.2,}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}} src="https://zupimages.net/up/22/35/rjds.png" className="lg:-mt-10 " />
            </div>
          </div>
        </section>
      </main>
   
      <SlideHome props={props.data} />
      <section className="bg-[#F9F9F9] lg:px-7 py-8 lg:py-16">
        <div className="container mx-auto flex flex-row flex-wrap justify-start  xl:justify-center  lg:p-4 items-stretch gap-2 ">
          <div className="flex flex-col m-5 lg:m-10 max-w-sm box-border  ">
            <div className="">
              <Image
                src={logoDev}
                className="lg:h-5/6"
                width={25}
                height={25}
                alt="logo design"
              />
            </div>
            <div className="mt-2">
              <p className="block-text">
                <span className="font-bold">
                  AVOIR UNE Aide pour votre projet.
                </span>
                Soyez visible à chaque étape du parcours utilisateur de vos
                prospects et transformez-les en nouveaux clients. Une stratégie
                en référencement naturel adaptée à vos objectifs Business.
              </p>
            </div>
            <div className="flex flex-row items-center text-blue-600	 hover:gap-2 mt-3">
            <p className="underline underline-offset-4"><Link href="/" >Demander un devis</Link></p> 
              <BsArrowRight />
            </div>
          </div>
          <div className="flex flex-col m-5 lg:m-10 max-w-sm box-border">
            <div className="">
              <Image
                src={logoGraph}
                className="lg:h-5/6"
                width={25}
                height={25}
                alt="logo design"
              />
            </div>
            <div className="mt-2">
              <p className="block-text tex-sm">
                <span className="font-bold">
                  Un logiciel performant et perso.
                </span>
                Soyez visible à chaque étape du parcours utilisateur de vos
                prospects et transformez-les en nouveaux clients. Une stratégie
                en référencement naturel adaptée à vos objectifs Business.
              </p>
            </div>
            <div className="flex flex-row items-center mt-3 text-blue-600	 hover:gap-2 hover:duration-1000">
             <p className="underline underline-offset-4"><Link href="/" >Demander un devis</Link></p> 
              <BsArrowRight />
            </div>
          </div>
          <div className="flex flex-col m-5 lg:m-10 max-w-sm box-border">
            <div className="">
              <Image
                src={logoLaptop}
                className="lg:h-5/6"
                width={25}
                height={25}
                alt="logo design"
              />
            </div>
            <div className="mt-2 ">
              <p className="block-text">
                <span className="font-bold">
                  Solution performante rour en réduisant le coût.
                </span>
                Soyez visible à chaque étape du parcours utilisateur de vos
                prospects et transformez-les en nouveaux clients. Une stratégie
                en référencement naturel adaptée à vos objectifs Business.
              </p>
            </div>
            <div className="flex flex-row items-center mt-3 text-blue-600	hover:gap-2 transition duration-300  ">
            <p className="underline underline-offset-4"><Link href="/" >Demander un devis</Link></p> 
              <BsArrowRight />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:p-5 p-1">
        <div className="lg:my-0 mb-6  mx-auto flex flex-col flex-wrap items-center  lg:text-start justify-center xl:flex-row xl:gap-16 p-0">
          <div className="max-w-xl px-5 lg:px-0 lg:m-10">
            <Image src={PhotoSectionOne} className="" />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:max-w-xl m-5  lg:m-10 space-y-6">
            <h2 className="text-3xl lg:text-4xl	font-semibold ">
              Titre profitez du marketing
            </h2>
            <div className="my-5 flex flex-col gap-4">
              <p className="">
                Soyez visible à chaque étape du parcours utilisateur de vos
                prospects et transformez-les en nouveaux clients.
              </p>
              <p className="">
                Une stratégie en référencement naturel adaptée à vos objectifs
                Business permettra un fort développement de votre business.
              </p>
              <p className="">
                Concernant tous les aspects techniques : rassurez-vous notre
                équipe s’en chargera !
              </p>
            </div>
            <div className="flex ">
            <button className="btn btn-blue mt-1">Contactez-nous</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] lg:p-5 p-1 ">
        <div className="lg:my-0 mb-6 lg:mb-0 mx-auto flex flex-col-reverse flex-wrap items-center justify-start xl:justify-center xl:flex-row xl:gap-16 p-0">
          <div className=" flex flex-col items-center lg:items-start max-w-xl m-4 lg:m-10  ">
            <h2 className="text-3xl lg:text-4xl	font-semibold ">
              Développer projet sur mesure
            </h2>
            <div className="my-5 flex flex-col gap-4">
              <p className="">
                Soyez visible à chaque étape du parcours utilisateur de vos
                prospects et transformez-les en nouveaux clients.
              </p>
              <p className="">
                Une stratégie en référencement naturel adaptée à vos objectifs
                Business permettra un fort développement de votre business.
              </p>
              <p className="">
                Concernant tous les aspects techniques : rassurez-vous notre
                équipe s’en chargera !
              </p>
            </div>
            <button className="btn btn-blue mt-1 ">Contactez-nous</button>
          </div>
          <div className="max-w-xl mx-1 lg:m-10">
            <Image src={PhotoSectionOne} className=""   alt="logo design"/>
          </div>
        </div>
      </section>
      <section className="lg:p-10">
        <div className="xl:py-10 xl:px-20">
          <div className="mt-10 lg:mt-5 ">
            <h2 className="text-3xl lg:text-4xl	font-semibold text-center">
              Comment Aidons-Nous Les Gens
            </h2>
            <MultiSlider props={props.data} />
          </div>
        </div>
      </section>
 <Footer/>
    
    </div>
  );
}
