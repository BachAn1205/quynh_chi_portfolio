export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroImage: string;
  challenge: string;
  solutions: string[];
  results: {
    value: string;
    label: string;
  }[];
  moreImages?: string[];
  role?: string;
  organization?: string;
  timeline?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cafloop-circular-coffee-husk",
    title: "CAFLOOP: Circular Coffee Husk Venture & Traceability",
    subtitle:
      "Transforming CO2-emitting agricultural waste in Dak Lak into commercial Cascara tea with end-to-end QR code supply chain traceability.",
    tags: ["Circular Economy", "Product Strategy", "Supply Chain"],
    heroImage: "/images/quynhchi/cafloop-cascara.jpg",
    role: "Founder & Product Strategist",
    organization: "CAFLOOP Vietnam",
    timeline: "Sep 2024 . Present",
    challenge:
      "Vietnam produces over 1.6 million tons of agricultural coffee waste annually, the majority of which is incinerated along highways in Dak Lak, generating 1.8 million tons of CO2. Farmers suffer from depressed margins while stripping the local community of potential carbon credit rewards. The core challenge was to design a viable circular model that turns discarded coffee husks into premium commercial Cascara tea while validating traceability for eco-conscious consumers.",
    solutions: [
      "Bootstrapped product development by establishing rigorous cost-of-goods-sold (COGS) tracking, structured budgeting, and value-based consumer pricing.",
      "Engineered an integrated QR-code traceability system on retail packaging, giving buyers verified data on batch origins, moisture levels, and farm partners.",
      "Grounded startup operations through an internship at SI CAFE Dak Lak, analyzing supply-chain operations and managing facility data entry.",
      "Co-developed revenue forecasting models and simulated CAC/LTV unit economics during the Harvard Crimson Business Case competition.",
    ],
    results: [
      { value: "1.6M", label: "tons of annual agricultural waste addressed by the circular framework" },
      { value: "100%", label: "batch traceability achieved via integrated package QR codes" },
      { value: "77+", label: "bicycles funded for rural children via reinvested venture profits" },
      { value: "Top 30", label: "global finalist ranking at Harvard Crimson Business Case 2025" },
    ],
    moreImages: [
      "/images/quynhchi/hero-coffee-farm.jpg",
      "/images/quynhchi/about-analyst.jpg",
    ],
  },
  {
    slug: "predictive-econometrics-sustainable-careers",
    title: "Revealing Disparities: Econometrics & Sustainable Career Choices",
    subtitle:
      "Stratified cross-sectional research uncovering rural-urban access disparities in green career adoption using SPSS ANOVA & Logistic Regression.",
    tags: ["Quantitative Research", "Econometrics", "Binary Logistic Regression"],
    heroImage: "/images/quynhchi/about-analyst.jpg",
    role: "Lead Researcher",
    organization: "Independent Academic Study (Dak Lak)",
    timeline: "2024",
    challenge:
      "While sustainable development is heavily emphasized in metropolitan centers, high school students in agricultural provinces like Dak Lak often lack access to structured green career pathways. Without empirical data, educators and policymakers cannot pinpoint whether career choices are driven by economic necessity, curriculum gaps, or fundamental disparities in sustainability awareness.",
    solutions: [
      "Designed and executed an urban-rural stratified cross-sectional survey sampling 200 high school students across Dak Lak province.",
      "Processed dataset through SPSS, executing Analysis of Variance (ANOVA) and Binary Logistic Regression to establish statistically sound behavioral predictors.",
      "Formulated a predictive model achieving 83.5% classification accuracy, isolating awareness coefficients against socioeconomic status.",
      "Disseminated findings highlighting the rural-urban information asymmetry to local educators and educational development groups.",
    ],
    results: [
      { value: "83.5%", label: "predictive model accuracy across stratified student cohorts" },
      { value: "3.482x", label: "increase in odds of selecting green careers per 1-unit awareness rise" },
      { value: "200", label: "high school student survey participants across rural and urban districts" },
      { value: "p < .01", label: "statistical significance demonstrating the urban-rural access divide" },
    ],
    moreImages: [
      "/images/quynhchi/hero-coffee-farm.jpg",
      "/images/quynhchi/cafloop-cascara.jpg",
    ],
  },
  {
    slug: "trung-cultural-heritage-education",
    title: "T'rưng Cultural Preservation & Educational Initiative",
    subtitle:
      "Systemic revitalization of Central Highlands indigenous bamboo musical heritage through 12+ school curricula and digital archiving.",
    tags: ["Cultural Preservation", "Educational Outreach", "Arts Advocacy"],
    heroImage: "/images/quynhchi/trung-heritage.jpg",
    role: "Founder, Organizer & Soloist",
    organization: "T'rưng Cultural Project",
    timeline: "Nov 2024 . Present",
    challenge:
      "Rapid modernization and lack of viable cultural economies have led indigenous T'rưng artisans across the Central Highlands to abandon their craft. Preserving oral heritage through passive nostalgia is unsustainable; the music risks fading from community consciousness unless modernized into accessible educational curricula and contemporary cultural platforms.",
    solutions: [
      "Synthesized indigenous oral music traditions into a structured, age-appropriate educational workshop curriculum for youth.",
      "Coordinated live demonstrations, hands-on workshops, and lecture-performances across 12+ schools in Dak Lak and Ho Chi Minh City.",
      "Built a digital preservation footprint, managing a community hub with 5,000+ followers and curating high-definition performance archives on YouTube with 10,000+ views.",
      "Bridged rural traditions with urban audiences as lead soloist at 'Thanh Am Dat Viet' and international art exhibitor at Museo ning Angeles, Philippines.",
    ],
    results: [
      { value: "2,300+", label: "students actively engaged across 12+ schools and community workshops" },
      { value: "10,000+", label: "views on digitized YouTube traditional music performances" },
      { value: "5,000+", label: "cultural followers engaged on digital preservation platforms" },
      { value: "150+", label: "urban attendees reached at 'Thanh Am Dat Viet' showcase in HCMC" },
    ],
    moreImages: [
      "/images/quynhchi/hero-coffee-farm.jpg",
      "/images/quynhchi/about-analyst.jpg",
    ],
  },
];
