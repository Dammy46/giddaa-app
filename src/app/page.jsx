import {
  Analytics,
  Footer,
  GetStarted,
  Hero,
  How,
  Navbar,
  PurchaseOptions,
  Section,
  TrustedBy,
  Why,
} from "@/components";
import {
  diaspora,
  investors,
  privateSector,
  publicSector,
  remoteWorker,
} from "@/utils/data";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { circle } from "@/utils/icons";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const diasporaData = diaspora;
  const naijaData = remoteWorker;
  const privateData = privateSector;
  const publicData = publicSector;
  const investorsData = investors;
  return (
    <div className="overflow-x-hidden relative">
      <Navbar session={session}></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <TrustedBy></TrustedBy>
      <PurchaseOptions></PurchaseOptions>
      <Why></Why>
      <Section
        bg={diasporaData.bg}
        icon={diasporaData.icon}
        image={diasporaData.image}
        title={diasporaData.title}
        desc={diasporaData.desc}
        section={diasporaData.section}
        features={diasporaData.features}
        iconBg={diasporaData.iconBg}
        clasBg={diasporaData.classBg}
      ></Section>
      <Section
        bg={naijaData.bg}
        icon={naijaData.icon}
        image={naijaData.image}
        title={naijaData.title}
        desc={naijaData.desc}
        features={naijaData.features}
        iconBg={naijaData.iconBg}
        titleColor={naijaData.titleColor}
      ></Section>
      <Section
        bg={privateData.bg}
        icon={privateData.icon}
        image={privateData.image}
        title={privateData.title}
        desc={privateData.desc}
        features={privateData.features}
        iconBg={privateData.iconBg}
        clasBg={diasporaData.classBg}
      ></Section>
      <Section
        bg={publicData.bg}
        icon={publicData.icon}
        image={publicData.image}
        title={publicData.title}
        desc={publicData.desc}
        features={publicData.features}
        iconBg={publicData.iconBg}
        titleColor={publicData.titleColor}
      ></Section>
      <Section
        bg={investorsData.bg}
        icon={investorsData.icon}
        image={investorsData.image}
        title={investorsData.title}
        desc={investorsData.desc}
        features={investorsData.features}
        iconBg={investorsData.iconBg}
        clasBg={diasporaData.classBg}
      ></Section>
      <How></How>
      <GetStarted></GetStarted>
      <Footer></Footer>

      <button className="h-[130px] w-[130px] border-4 border-[#335F32] fixed right-0 z-30 bottom-0 m-[20px] rounded-full bg-[url('../../public/assets/images/first-man.png')] bg-no-repeat bg-contain p-3 text-[12px] font-semibold text-[#FCFCFC] after:absolute after:top-0 after:bg-[#0000007d] after:-z-[1] after:h-full after:w-full  overflow-hidden after:left-0 after:right-0 after:bottom-0">
        <p className="z-[1]">
          Have Questions?
          <br /> Let&apos;s Chat
        </p>
      </button>
    </div>
  );
}
