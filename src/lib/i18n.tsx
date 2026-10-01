"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "vi";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => { },
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

// ─── TRANSLATIONS ────────────────────────────────────────────
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.mind": "The Mind",
    "nav.heart": "The Heart",
    "nav.competitor": "The Competitor",
    "nav.contact": "Connect",
    "nav.resume": "Resume",

    // Hero
    "hero.subtitle": "Curious by nature. Strategic by thought. Driven to create.",
    "hero.cta.explore": "Explore My Work",
    "hero.cta.resume": "Download Full Resume",
    "hero.badge.field": "Central Highlands Field Research",
    "hero.badge.sub": "Audited econometric & field data . Dak Lak Province",
    "hero.slide0.title": "CIRCULAR SYSTEMS & CAFLOOP",
    "hero.slide0.category": "Circular Innovation",
    "hero.slide0.tag": "1.6M Tons Ag Waste",
    "hero.slide0.stat": "$80M Market Potential",
    "hero.slide0.desc": "Transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea and decentralized carbon credits (C4F).",
    "hero.slide1.title": "PREDICTIVE ECONOMETRICS",
    "hero.slide1.category": "Quantitative Research",
    "hero.slide1.tag": "SPSS ANOVA & Logistic Regression",
    "hero.slide1.stat": "83.5% Model Accuracy",
    "hero.slide1.desc": "Cross-sectional survey of 200 high school students proving a 3.482x odds increase in green career choices with statistical significance.",
    "hero.slide2.title": "T'RƯNG CULTURAL PRESERVATION",
    "hero.slide2.category": "Cultural Advocacy & Soloist",
    "hero.slide2.tag": "12+ Schools Reached",
    "hero.slide2.stat": "2,300+ Students Impacted",
    "hero.slide2.desc": "Synthesizing oral Central Highlands heritage into structured school curricula, digital archives, and urban concert showcases.",

    // About
    "about.title": "ABOUT ME",
    "about.headline": "The Mind of an Analyst. The Heart of the Highlands.",
    "about.p1": "Growing up in Dak Lak, the coffee capital of Vietnam, my childhood was defined by two distinct sensory memories: the resonant echoes of the indigenous T'rưng instrument fading through neighborhood loudspeakers, and the acrid smell of coffee husks burning along the highways. For a long time, I accepted these simply as the background of my hometown.",
    "about.p2": "But as I grew older, the data began to tell a different, more urgent story. I learned that the 1.6 million tons of agricultural waste burned annually in Vietnam generated 1.8 million tons of CO2, stripping farmers of over $80 million in potential carbon market value simply because they lacked the Data Science tools for Measurement, Reporting, and Verification (MRV). Similarly, behind the stage lights, T'rưng artisans were abandoning their craft because cultural nostalgia alone could not sustain a livelihood without a viable economic ecosystem.",
    "about.p3": "These harsh realities taught me a vital lesson: empathy is merely a starting point. To protect what I love, I need empirical tools. Economics provides me with the systems-thinking required to design sustainable value chains, while Data Science equips me with the evidence needed to transform invisible assets, from a musical note to a carbon credit, into measurable, equitable impact. I don't just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.",
    "about.quote": "“I don't just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.”",
    "about.methods": "Core Methodologies & Research Focus",
    "about.photo.caption": "Translating Highland Realities Into Empirical Models",
    "about.photo.label": "Grounded Quantitative Research",
    "about.card1.label": "ECOLOGICAL CRISIS",
    "about.card1.metric": "Tons Agricultural Waste Analyzed",
    "about.card1.desc": "Addressing 1.8M tons of CO2 generated annually along Central Highlands highways by modeling decentralized circular Cascara & carbon credits.",
    "about.card2.label": "PREDICTIVE ANALYTICS",
    "about.card2.metric": "SPSS Predictive Model Accuracy",
    "about.card2.desc": "Independent quantitative survey across 200 high school students in Dak Lak, establishing a 3.482x odds multiplier for sustainable career choices.",
    "about.card3.label": "CULTURAL REVITALIZATION",
    "about.card3.metric": "Students Across 12+ Schools",
    "about.card3.desc": "Empowering the next generation with indigenous T'rưng oral music curricula, digitized YouTube archives, and community road safety actions.",

    // The Mind
    "mind.title": "THE MIND",
    "mind.sub.title": "Quantitative Research & Enterprise",
    "mind.sub.desc": "Leveraging data to drive circular economies and bridge societal gaps.",
    "mind.tab.all": "All Initiatives (4)",
    "mind.tab.research": "Quantitative Research",
    "mind.tab.startup": "CAFLOOP & Operations",
    "mind.tab.lab": "NSYSU Taiwan Lab",
    "mind.tab.pedagogy": "Economic Pedagogy",
    "mind.badge.verified": "Peer-Reviewed & Globally Recognized",
    "mind.badge.desc": "Every initiative pairs rigorous empirical research with real stakeholder actions across Dak Lak and international stages.",
    "mind.field": "Field Evidence",

    // The Heart
    "heart.title": "THE HEART",
    "heart.showcase.badge": "Featured Traditional T'rưng Soloist",
    "heart.showcase.title": "Echoes of the Central Highlands",
    "heart.showcase.desc": "Refusing to let indigenous music become a museum relic, I synthesized oral traditions into interactive curricula across 12+ schools for 2,300+ students, performing as featured soloist in Ho Chi Minh City to bridge highland culture with metropolitan audiences.",
    "heart.showcase.stat1": "Digital Archive: 10,000+ Views",
    "heart.showcase.stat2": "5,000+ Community Followers",
    "heart.showcase.live": "Live Showcase . Thanh Âm Đất Việt",
    "heart.showcase.views": "10,000+ YouTube Archive Views",

    // The Competitor
    "competitor.title": "THE COMPETITOR",
    "competitor.section.label": "Section 05 . Comprehensive Resume & Honors",
    "competitor.sub.title": "Global Excellence & Academic Profile",
    "competitor.sub.desc": "A proven track record of excellence across academics, business strategy, public policy, and the arts.",
    "competitor.tab0": "1. Academic Profile & Testing",
    "competitor.tab1": "2. Economics & Business Olympiads",
    "competitor.tab2": "3. Debate, MUN & Arts",
    "competitor.tab3": "4. Technical Skills & Interests",
    "competitor.open": "Open Dossier View",

    // Footer
    "footer.badge": "Section 6 . Vision & Partnership",
    "footer.headline": "Building Transparent Ecosystems.",
    "footer.p1": "When I hold my degree in Business Analytics and Information Systems, my first destination will be the agricultural supply chains of the Central Highlands. My vision is to build systemic data architectures that make agricultural data transparent, accessible, and actionable, ensuring that local resources and the people who cultivate them are accurately valued and equitably rewarded.",
    "footer.p2": "Whether you are a university admissions committee seeking a data-driven innovator, a professor looking for a dedicated quantitative researcher, or a partner passionate about circular economies, I would love to connect.",
    "footer.cta.resume": "Download Full Resume PDF",
    "footer.cta.email": "Send an Email",
    "footer.nav.title": "Navigation",
    "footer.nav.about": "About Quỳnh Chi",
    "footer.nav.mind": "The Mind",
    "footer.nav.heart": "The Heart",
    "footer.nav.competitor": "The Competitor",
    "footer.nav.contact": "Contact & Dialogue",
    "footer.connect.title": "Connect Directly",
    "footer.connect.linkedin": "LinkedIn Profile",
    "footer.connect.dossier": "View Verified Dossier (PDF)",
    "footer.location": "Dak Lak & Ho Chi Minh City, Vietnam",
    "footer.bio": "Curious by nature. Strategic by thought. Driven to create. Bridging Vietnam's Central Highlands cultural heritage with predictive analytics, economic systems, and circular innovation.",
    "footer.copyright": "Copyright © 2026 Phan Hoàng Quỳnh Chi. All rights reserved.",

    // Page Nav
    "pagenav.upnext": "Up Next",
  },

  vi: {
    // Navbar
    "nav.home": "Trang chủ",
    "nav.about": "Về tôi",
    "nav.mind": "Tư Duy",
    "nav.heart": "Trái Tim",
    "nav.competitor": "Thành Tích",
    "nav.contact": "Liên hệ",
    "nav.resume": "Hồ sơ",

    // Hero
    "hero.subtitle": "Tò mò là bản năng. Chiến lược là tư duy. Sáng tạo là động lực.",
    "hero.cta.explore": "Khám phá công trình của tôi",
    "hero.cta.resume": "Tải CV đầy đủ",
    "hero.badge.field": "Nghiên cứu thực địa Tây Nguyên",
    "hero.badge.sub": "Dữ liệu kinh tế lượng & thực địa kiểm chứng . Tỉnh Đắk Lắk",
    "hero.slide0.title": "HỆ THỐNG TUẦN HOÀN & CAFLOOP",
    "hero.slide0.category": "Đổi mới tuần hoàn",
    "hero.slide0.tag": "1,6 triệu tấn phế phụ phẩm",
    "hero.slide0.stat": "Tiềm năng thị trường $80 triệu",
    "hero.slide0.desc": "Chuyển hóa vỏ cà phê thải CO2 tại Đắk Lắk thành trà Cascara thương mại và tín chỉ carbon phi tập trung (C4F).",
    "hero.slide1.title": "KINH TẾ LƯỢNG DỰ BÁO",
    "hero.slide1.category": "Nghiên cứu định lượng",
    "hero.slide1.tag": "ANOVA & Hồi quy Logistic SPSS",
    "hero.slide1.stat": "Độ chính xác mô hình 83,5%",
    "hero.slide1.desc": "Khảo sát cắt ngang 200 học sinh THPT chứng minh xác suất chọn nghề xanh tăng 3,482 lần với mức ý nghĩa thống kê.",
    "hero.slide2.title": "BẢO TỒN ĐÀN T'RƯNG",
    "hero.slide2.category": "Đại sứ văn hóa & Nghệ sĩ",
    "hero.slide2.tag": "12+ trường học tiếp cận",
    "hero.slide2.stat": "2.300+ học sinh được truyền cảm hứng",
    "hero.slide2.desc": "Hệ thống hóa di sản truyền khẩu Tây Nguyên thành chương trình giảng dạy, lưu trữ kỹ thuật số và biểu diễn hòa nhạc đô thị.",

    // About
    "about.title": "VỀ TÔI",
    "about.headline": "Tư Duy của Nhà Phân Tích. Trái Tim của Vùng Cao.",
    "about.p1": "Lớn lên ở Đắk Lắk, thủ phủ cà phê của Việt Nam, tuổi thơ tôi gắn liền với hai ký ức cảm quan: tiếng vang vọng của đàn T'rưng bản địa qua loa phát thanh xóm nhỏ, và mùi vỏ cà phê cháy dọc các con đường. Trong một thời gian dài, tôi chỉ coi đó là phông nền quen thuộc của quê hương.",
    "about.p2": "Nhưng khi lớn lên, dữ liệu bắt đầu kể một câu chuyện khác, cấp bách hơn. Tôi nhận ra rằng 1,6 triệu tấn phế phụ phẩm nông nghiệp bị đốt hàng năm tại Việt Nam tạo ra 1,8 triệu tấn CO2, tước đoạt của nông dân hơn 80 triệu đô la giá trị thị trường carbon tiềm năng chỉ vì thiếu công cụ Đo lường, Báo cáo và Xác minh (MRV). Tương tự, các nghệ nhân T'rưng đang bỏ nghề vì hoài niệm văn hóa không thể nuôi sống họ mà không có hệ sinh thái kinh tế bền vững.",
    "about.p3": "Những thực tế nghiệt ngã đó dạy tôi một bài học quan trọng: đồng cảm chỉ là điểm khởi đầu. Để bảo vệ những gì tôi yêu thương, tôi cần công cụ thực nghiệm. Kinh tế học cho tôi tư duy hệ thống để thiết kế chuỗi giá trị bền vững, còn Khoa học Dữ liệu trang bị cho tôi bằng chứng cần thiết để biến các tài sản vô hình, từ một nốt nhạc đến một tín chỉ carbon, thành tác động đo lường được và công bằng.",
    "about.quote": "“Tôi không chỉ tính toán những con số; tôi lập trình những giải pháp bảo vệ đất mẹ và nâng tầm tâm hồn Tây Nguyên.”",
    "about.methods": "Phương pháp & Trọng tâm nghiên cứu",
    "about.photo.caption": "Chuyển hóa Thực tế Tây Nguyên thành Mô hình Thực nghiệm",
    "about.photo.label": "Nghiên cứu định lượng thực địa",
    "about.card1.label": "KHỦNG HOẢNG SINH THÁI",
    "about.card1.metric": "Tấn phế phụ phẩm nông nghiệp đã phân tích",
    "about.card1.desc": "Xử lý 1,8 triệu tấn CO2 phát sinh hàng năm dọc các tuyến đường Tây Nguyên bằng mô hình Cascara tuần hoàn và tín chỉ carbon.",
    "about.card2.label": "PHÂN TÍCH DỰ BÁO",
    "about.card2.metric": "Độ chính xác mô hình dự báo SPSS",
    "about.card2.desc": "Khảo sát định lượng độc lập trên 200 học sinh THPT tại Đắk Lắk, xác lập hệ số nhân xác suất 3,482 lần cho lựa chọn nghề nghiệp bền vững.",
    "about.card3.label": "PHỤC HƯNG VĂN HÓA",
    "about.card3.metric": "Học sinh tại 12+ trường",
    "about.card3.desc": "Trao quyền cho thế hệ tiếp theo thông qua chương trình âm nhạc T'rưng truyền khẩu, kho lưu trữ YouTube số hóa và hành động an toàn giao thông cộng đồng.",

    // The Mind
    "mind.title": "TƯ DUY",
    "mind.sub.title": "Nghiên cứu Định lượng & Kinh doanh",
    "mind.sub.desc": "Ứng dụng dữ liệu để thúc đẩy kinh tế tuần hoàn và thu hẹp khoảng cách xã hội.",
    "mind.tab.all": "Tất cả (4)",
    "mind.tab.research": "Nghiên cứu Định lượng",
    "mind.tab.startup": "CAFLOOP & Vận hành",
    "mind.tab.lab": "Lab NSYSU Đài Loan",
    "mind.tab.pedagogy": "Giáo dục Kinh tế",
    "mind.badge.verified": "Đã bình duyệt & Được công nhận quốc tế",
    "mind.badge.desc": "Mỗi sáng kiến đều kết hợp nghiên cứu thực nghiệm nghiêm ngặt với hành động thực tế của các bên liên quan tại Đắk Lắk và trên trường quốc tế.",
    "mind.field": "Bằng chứng thực địa",

    // The Heart
    "heart.title": "TRÁI TIM",
    "heart.showcase.badge": "Nghệ sĩ độc tấu T'rưng truyền thống",
    "heart.showcase.title": "Vang Vọng Tây Nguyên",
    "heart.showcase.desc": "Từ chối để âm nhạc bản địa trở thành hiện vật bảo tàng, tôi hệ thống hóa các truyền thống truyền khẩu thành chương trình giảng dạy tương tác tại 12+ trường cho 2.300+ học sinh, biểu diễn như nghệ sĩ chính tại TP.HCM để gắn kết văn hóa cao nguyên với khán giả đô thị.",
    "heart.showcase.stat1": "Lưu trữ kỹ thuật số: 10.000+ lượt xem",
    "heart.showcase.stat2": "5.000+ người theo dõi cộng đồng",
    "heart.showcase.live": "Biểu diễn trực tiếp . Thanh Âm Đất Việt",
    "heart.showcase.views": "10.000+ lượt xem YouTube",

    // The Competitor
    "competitor.title": "THÀNH TÍCH",
    "competitor.section.label": "Mục 05 . Hồ sơ & Danh hiệu toàn diện",
    "competitor.sub.title": "Xuất sắc Toàn cầu & Hồ sơ Học thuật",
    "competitor.sub.desc": "Thành tích đã được chứng minh trên nhiều lĩnh vực: học thuật, chiến lược kinh doanh, chính sách công và nghệ thuật.",
    "competitor.tab0": "1. Hồ sơ Học thuật & Kiểm tra",
    "competitor.tab1": "2. Olympic Kinh tế & Kinh doanh",
    "competitor.tab2": "3. Tranh biện, MUN & Nghệ thuật",
    "competitor.tab3": "4. Kỹ năng Kỹ thuật & Sở thích",
    "competitor.open": "Xem Hồ sơ đầy đủ",

    // Footer
    "footer.badge": "Mục 6 . Tầm nhìn & Hợp tác",
    "footer.headline": "Xây dựng Hệ sinh thái Minh bạch.",
    "footer.p1": "Khi cầm tấm bằng Phân tích Kinh doanh và Hệ thống Thông tin, điểm đến đầu tiên của tôi sẽ là chuỗi cung ứng nông nghiệp Tây Nguyên. Tầm nhìn của tôi là xây dựng kiến trúc dữ liệu hệ thống giúp dữ liệu nông nghiệp trở nên minh bạch, dễ tiếp cận và khả thi, đảm bảo các nguồn tài nguyên địa phương và người canh tác được định giá chính xác và đền bù công bằng.",
    "footer.p2": "Dù bạn là hội đồng tuyển sinh đại học tìm kiếm nhà đổi mới dựa trên dữ liệu, giáo sư tìm kiếm nhà nghiên cứu định lượng tận tâm, hay đối tác đam mê kinh tế tuần hoàn, tôi rất muốn được kết nối.",
    "footer.cta.resume": "Tải CV PDF đầy đủ",
    "footer.cta.email": "Gửi Email",
    "footer.nav.title": "Điều hướng",
    "footer.nav.about": "Về Quỳnh Chi",
    "footer.nav.mind": "Tư Duy",
    "footer.nav.heart": "Trái Tim",
    "footer.nav.competitor": "Thành Tích",
    "footer.nav.contact": "Liên hệ & Đối thoại",
    "footer.connect.title": "Kết nối trực tiếp",
    "footer.connect.linkedin": "Hồ sơ LinkedIn",
    "footer.connect.dossier": "Xem Hồ sơ xác thực (PDF)",
    "footer.location": "Đắk Lắk & TP. Hồ Chí Minh, Việt Nam",
    "footer.bio": "Tò mò là bản năng. Chiến lược là tư duy. Sáng tạo là động lực. Kết nối di sản văn hóa Tây Nguyên Việt Nam với phân tích dự báo, hệ thống kinh tế và đổi mới tuần hoàn.",
    "footer.copyright": "Bản quyền © 2026 Phan Hoàng Quỳnh Chi. Bảo lưu mọi quyền.",

    // Page Nav
    "pagenav.upnext": "Tiếp theo",
  },
};

// ─── PROVIDER ────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en" || saved === "vi") setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["en"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
