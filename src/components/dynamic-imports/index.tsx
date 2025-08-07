import dynamic from "next/dynamic";

export const InfiniteScroll = dynamic(
  () => import("@/components/animations/image-infinite-scroll"),
  {
    loading: () => <p>Loading partners...</p>,
    ssr: false,
  }
);
export const BlurAndGradient = dynamic(
  () => import("@/components/animations/blur-and-gradient"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
export const HowItWorks = dynamic(
  () => import("@/components/animations/how-it-works"),
  {
    loading: () => <p>Loading how it works...</p>,
    ssr: true,
  }
);
export const RequestADemoButton = dynamic(
  () => import("@/components/buttons/request-a-demo"),
  {
    loading: () => <p>Loading request demo...</p>,
    ssr: false,
  }
);
export const EmbedYouTube = dynamic(
  () => import("@/components/youtube/embed"),
  {
    loading: () => <p>Loading YouTube...</p>,
    ssr: false,
  }
);
export const AutomotateStats = dynamic(
  () => import("@/components/animations/automate-stats"),
  {
    loading: () => <p>Loading atuomations statistics...</p>,
    ssr: true,
  }
);
export const DesignedFor = dynamic(
  () => import("@/components/animations/designed-for"),
  {
    loading: () => <p>Loading designed for...</p>,
    ssr: false,
  }
);

export const PatientCounterAnimation = dynamic(
  () => import("@/components/animations/patient-count"),
  {
    loading: () => <p>Loading patient counter...</p>,
    ssr: false,
  }
);

export const OurJourneyAnimation = dynamic(
  () => import("@/components/animations/our-jouney"),
  {
    loading: () => <p>Loading our journey...</p>,
    ssr: true,
  }
);

export const SkewedInfiniteScroll = dynamic(
  () => import("@/components/animations/skewed-infinite-scroll"),
  {
    loading: () => <p>Loading our implementations...</p>,
    ssr: false,
  }
);

export const FAQSearch = dynamic(() => import("@/components/faq-search"), {
  loading: () => <p>Loading search support...</p>,
  ssr: false,
});
