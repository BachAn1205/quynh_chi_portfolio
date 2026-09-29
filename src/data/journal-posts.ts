export interface JournalSectionBlock {
  heading: string;
  paragraphs: string[];
}

export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: JournalSectionBlock[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "circular-credits-for-farmers-c4f-harvard-prize",
    title: "Circular Credits for Farmers (C4F): Decentralizing Carbon Value in Dak Lak",
    category: "// Economic Systems",
    date: "Jan 2026",
    readTime: "6 min read",
    image: "/images/quynhchi/hero-coffee-farm.jpg",
    intro:
      "Awarded the Global Outstanding Writing Content Prize by the Harvard International Review, this paper investigates who truly owns agricultural carbon data in developing nations. When 1.6 million tons of coffee husks are incinerated annually, the resulting 1.8M tons of CO2 represent not only environmental degradation, but an $80 million market failure stripping smallholders of sovereign economic equity.",
    sections: [
      {
        heading: "The Carbon Asymmetry in the Central Highlands",
        paragraphs: [
          "In the highlands of Dak Lak and Gia Lai, smallholder farmers generate immense ecological value through agroforestry practices, soil conservation, and biomass management. Yet under traditional carbon offset architectures, intermediary auditing entities absorb up to 80% of carbon credit revenues.",
          "Farmers are relegated to raw data contributors without ownership rights or access to MRV (Measurement, Reporting, and Verification) technology, perpetuating an extractive cycle disguised as green finance.",
        ],
      },
      {
        heading: "The C4F Architectural Blueprint",
        paragraphs: [
          "The Circular Credits for Farmers (C4F) framework proposes a conceptual blockchain-anchored ledger that decentralizes carbon tracking directly to cooperative farmer levels.",
          "By employing low-cost mobile sensors, localized QR traceability, and verifiable smart contracts, carbon sequestration metrics can be audited without prohibitively expensive Western consultants.",
        ],
      },
      {
        heading: "Empirical Policy Implications",
        paragraphs: [
          "True sustainability cannot exist without equity. If carbon accounting tools remain centralized within multinational corporations, climate finance will exacerbate rural inequality.",
          "Our research advocates for open-source MRV standards and cooperative-owned carbon registries, empowering Vietnamese agricultural communities to claim direct economic sovereignty over their environmental impact.",
        ],
      },
    ],
  },
  {
    slug: "revealing-disparities-through-econometrics",
    title: "Revealing Disparities: What SPSS ANOVA & Logistic Regression Taught Me About Rural Youth",
    category: "// Predictive Analytics",
    date: "Dec 2024",
    readTime: "5 min read",
    image: "/images/quynhchi/about-analyst.jpg",
    intro:
      "Can statistical rigor expose invisible societal divides? Through a stratified survey of 200 high school students in Dak Lak, I constructed a predictive model (83.5% accuracy) evaluating the determinants of sustainable career choices. Here is what the numbers proved.",
    sections: [
      {
        heading: "Methodology and Stratified Sampling",
        paragraphs: [
          "To capture meaningful variations between urban centers and rural agricultural communes, the study surveyed 200 high school students utilizing a stratified cross-sectional sampling methodology across Dak Lak province.",
          "We quantified four core dimensions: Environmental Awareness Index (EAI), Perceived Economic Feasibility (PEF), Information Channel Density (ICD), and Career Choice Propensity (CCP).",
        ],
      },
      {
        heading: "The 3.482x Odds Multiplier",
        paragraphs: [
          "Binary logistic regression models yielded a critical discovery: a single-unit increase on the sustainability awareness scale increases the probability of choosing a sustainable career pathway by 3.482 times (p < 0.001).",
          "Crucially, rural students exhibited an identical intrinsic interest in green vocations as urban peers, yet scored 42% lower on information access channels. The divide is not one of motivation, but of infrastructure.",
        ],
      },
      {
        heading: "Translating Data into Educational Policy",
        paragraphs: [
          "Data science transforms subjective assumptions into undeniable policy imperatives. By presenting these findings to student organizations and regional educators, we proved that targeted digital literacy programs can close the rural-urban green gap within a single academic cycle.",
        ],
      },
    ],
  },
  {
    slug: "cultural-preservation-meets-economic-systems",
    title: "Preserving the T’rưng: Why Indigenous Art Demands Sustainable Economic Ecosystems",
    category: "// Cultural Advocacy",
    date: "Aug 2025",
    readTime: "5 min read",
    image: "/images/quynhchi/trung-heritage.jpg",
    intro:
      "Cultural nostalgia alone cannot pay an artisan’s living expenses. Preserving the ancient bamboo echoes of the Central Highlands requires merging traditional artistry with structured educational curricula and modern digital distribution channels.",
    sections: [
      {
        heading: "Beyond the Museum Relic Trap",
        paragraphs: [
          "For decades, well-intentioned cultural preservation in Vietnam has treated ethnic minority instruments as museum artifacts or ceremonial novelties for tourist showcases. Behind the stage lights, master craftsmen abandon bamboo woodworking because their sons cannot make a living.",
          "When an art form relies exclusively on state subsidies or intermittent charity, it is fragile. To survive across generations, an indigenous tradition must have an active, self-sustaining economic ecosystem.",
        ],
      },
      {
        heading: "Systemic Pedagogy Across 12+ Schools",
        paragraphs: [
          "Through the T'rưng Cultural Education Project, we synthesized traditional oral polyrhythms into structured curricula that secondary students could interact with directly. Reaching ~2,300 students in Dak Lak and Ho Chi Minh City, we turned passive listeners into active practitioners.",
          "Digitizing live recitals through YouTube archives (10,000+ views) and social channels (5,000+ followers) created organic audience demand, proving that authentic cultural assets flourish when made accessible to the digital generation.",
        ],
      },
      {
        heading: "The Artist as Bridge",
        paragraphs: [
          "Performing as the soloist for 'Thanh Am Dat Viet' in Saigon and exhibiting visual art at the Museo ning Angeles in the Philippines taught me that art is the most visceral medium for empathy. But data and economics provide the backbone that keeps that empathy alive.",
        ],
      },
    ],
  },
  {
    slug: "nsysu-computational-materials-lab-learnings",
    title: "Avoiding the 'Black Box': Reflections from the NSYSU Computational Lab",
    category: "// Computational Science",
    date: "Jul 2026",
    readTime: "4 min read",
    image: "/images/quynhchi/cafloop-cascara.jpg",
    intro:
      "Representing Vietnam on a full scholarship at the NSYSU Computational Materials Lab in Taiwan, I collaborated with international faculty on density functional theory (DFT) and high-performance computing.learning why data models must always answer to physical reality.",
    sections: [
      {
        heading: "High-Performance Computing from Scratch",
        paragraphs: [
          "Stepping into the lab with zero formal C++ programming background was an intense crucible. Within days, alongside international mentors, I learned Linux HPC environment commands, basic C++, and crystal lattice visualization in VESTA.",
          "Running DFT simulations taught me that computation is not an abstract game; every line of code represents actual atomic forces and thermodynamic constraints.",
        ],
      },
      {
        heading: "Auditing Data Against Ground Truth",
        paragraphs: [
          "The greatest danger in both material science and economic modeling is falling in love with synthetic simulations while ignoring real-world boundary conditions. If an algorithm generates a perfect output that violates physical laws, the model is useless.",
          "This insight deeply shaped my approach to economics: whether calculating carbon sequestration or consumer demand, data scientists must audit their datasets against physical ground truths.",
        ],
      },
      {
        heading: "Wastewater Innovation Pitch",
        paragraphs: [
          "Synthesizing these insights, I pitched a conceptual wastewater purification startup using novel computational filter materials to university faculty. The experience cemented my desire to bridge data analytics with systemic environmental problem solving.",
        ],
      },
    ],
  },
];
