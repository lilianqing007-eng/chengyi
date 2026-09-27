"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowIcon, ChevronIcon, CloseIcon, MenuIcon, SearchIcon } from "./icons";
import { siteConfig } from "./site-config";
import { siteData } from "./site-data";

type Language = "zh" | "en";
type LocalizedCategory = { name: string; summary: string };
type Category = {
  id: string;
  image: keyof typeof siteData.assets;
  zh: LocalizedCategory;
  en: LocalizedCategory;
  products: readonly string[];
};
type ProductDetails = {
  name: string;
  spec: string;
  feature: string;
  note: string;
  applications: string;
};
type Product = {
  slug: string;
  category: string;
  zh: ProductDetails;
  en: ProductDetails;
};
type Application = {
  id: string;
  zh: string;
  en: string;
  image: keyof typeof siteData.assets;
  products: readonly string[];
};

const categories = siteData.categories as readonly Category[];
const products = siteData.products as readonly Product[];
const applications = siteData.applications as readonly Application[];

export function SitePage({ lang }: { lang: Language }) {
  const copy = siteData.copy[lang];
  const isZh = lang === "zh";
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeApplication, setActiveApplication] = useState(applications[0].id);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [catalogFilter, setCatalogFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const heroMediaRef = useRef<HTMLElement>(null);

  const productMap = useMemo(() => new Map(products.map((product) => [product.slug, product])), []);
  const category = categories.find((item) => item.id === activeCategory) ?? categories[0];
  const application = applications.find((item) => item.id === activeApplication) ?? applications[0];
  const product = selectedProduct ? productMap.get(selectedProduct) : undefined;

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return products.filter((item) => {
      const matchesCategory = catalogFilter === "all" || item.category === catalogFilter;
      const searchable = `${item.zh.name} ${item.en.name} ${item[lang].applications}`.toLocaleLowerCase();
      return matchesCategory && searchable.includes(query);
    });
  }, [catalogFilter, lang, search]);

  useEffect(() => {
    document.documentElement.lang = isZh ? "zh-CN" : "en";
    document.documentElement.dataset.language = lang;
  }, [isZh, lang]);

  useEffect(() => {
    document.body.classList.toggle("overlay-open", catalogOpen);
    return () => document.body.classList.remove("overlay-open");
  }, [catalogOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedProduct && !dialog.open) dialog.showModal();
    if (!selectedProduct && dialog.open) dialog.close();
  }, [selectedProduct]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const id of ["home", "products", "applications", "about", "contact"]) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && catalogOpen) setCatalogOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [catalogOpen]);

  function openCatalog(filter = "all") {
    setCatalogFilter(filter);
    setCatalogOpen(true);
  }

  function closeProduct() {
    setSelectedProduct(null);
  }

  function productButton(slug: string, className = "product-line") {
    const item = productMap.get(slug);
    return (
      <button className={className} key={slug} data-product={slug} onClick={() => setSelectedProduct(slug)}>
        <span>{item?.[lang].name ?? slug}</span>
        <ChevronIcon />
      </button>
    );
  }

  const navIds = ["home", "products", "applications", "about", "contact"];

  return (
    <>
      <a className="skip-link" href="#main">{isZh ? "跳至主要内容" : "Skip to main content"}</a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="siteHeader">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label={isZh ? "橙益首页" : "Chengyi home"}>
            <span className="brand-rule" />
            <span className="brand-cn">橙益</span>
            <span className="brand-en">CHENGYI</span>
          </a>
          <button
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mainNav"
            aria-label={isZh ? "打开导航" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon />
          </button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} id="mainNav" aria-label={isZh ? "主导航" : "Primary navigation"}>
            {copy.nav.map((label, index) => (
              <a
                className={`nav-link${activeSection === navIds[index] ? " is-active" : ""}`}
                href={`#${navIds[index]}`}
                key={navIds[index]}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <span className="nav-separator" aria-hidden="true" />
            <a className="language-link" href={`/${isZh ? "en" : "zh"}/`}>中文 / EN</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="vertical-rule hero-rule" aria-hidden="true" />
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">{copy.browse}<ArrowIcon /></a>
              <a className="button button-secondary" href="#contact">{copy.consult}<ArrowIcon /></a>
            </div>
          </div>
          <figure
            className="hero-media"
            id="heroMedia"
            ref={heroMediaRef}
            onPointerMove={(event) => {
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
              const rect = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - 0.5;
              const y = (event.clientY - rect.top) / rect.height - 0.5;
              event.currentTarget.style.setProperty("--parallax-x", `${x * 10}px`);
              event.currentTarget.style.setProperty("--parallax-y", `${y * 8}px`);
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--parallax-x", "0px");
              event.currentTarget.style.setProperty("--parallax-y", "0px");
            }}
          >
            <Image src={siteData.assets.hero} alt={isZh ? "面粉、谷物、面团与面包组成的食品原料应用场景" : "Food ingredient application scene with flour, grain, dough and bread"} fill priority sizes="(max-width: 900px) 92vw, 52vw" />
            <figcaption>{copy.imageNotice}</figcaption>
          </figure>
          <a className="scroll-cue" href="#products" aria-label={isZh ? "继续浏览" : "Continue browsing"}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </a>
        </section>

        <section className="product-explorer section" id="products">
          <div className="section-heading reveal">
            <span className="vertical-rule" aria-hidden="true" />
            <h2>{copy.productHeading}</h2>
            <button className="text-link" onClick={() => openCatalog("all")}>{copy.allProducts}<ArrowIcon /></button>
          </div>
          <div className="product-stage reveal">
            <div className="category-list" role="list" aria-label={isZh ? "产品分类" : "Product categories"}>
              {categories.map((item, index) => (
                <button
                  className={`category-row${item.id === category.id ? " is-active" : ""}`}
                  key={item.id}
                  data-category={item.id}
                  aria-pressed={item.id === category.id}
                  onMouseEnter={() => setActiveCategory(item.id)}
                  onFocus={() => setActiveCategory(item.id)}
                  onClick={() => setActiveCategory(item.id)}
                >
                  <span className="category-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="category-name">{item[lang].name}</span>
                  <ChevronIcon />
                </button>
              ))}
            </div>
            <div className="category-detail" id="categoryDetail" aria-live="polite">
              <h3>{category[lang].name}</h3>
              <p>{category[lang].summary}</p>
              <div className="category-products">{category.products.slice(0, 6).map((slug) => productButton(slug))}</div>
              <button className="button button-primary category-cta" onClick={() => openCatalog(category.id)}>{copy.enterCategory}<ArrowIcon /></button>
            </div>
            <figure className="category-media">
              <Image src={siteData.assets[category.image]} alt={`${category[lang].name} — ${copy.imageNotice}`} fill sizes="(max-width: 900px) 92vw, 34vw" />
              <figcaption>{copy.imageNotice}</figcaption>
            </figure>
          </div>
        </section>

        <section className="applications section" id="applications">
          <div className="application-heading reveal">
            <span className="vertical-rule" aria-hidden="true" />
            <h2>{copy.appHeading}</h2>
            <p>{copy.appBody}</p>
          </div>
          <div className="application-stage reveal">
            <div className="application-tabs" role="list" aria-label={isZh ? "应用场景" : "Application scenarios"}>
              {applications.map((item) => (
                <button className={`application-tab${item.id === application.id ? " is-active" : ""}`} key={item.id} aria-pressed={item.id === application.id} onClick={() => setActiveApplication(item.id)}>
                  <span>{item[lang]}</span>
                </button>
              ))}
            </div>
            <div className="application-products">
              <h3>{copy.suitable}</h3>
              <div id="applicationProductList">{application.products.map((slug) => productButton(slug, "application-product"))}</div>
              <button className="text-link application-link" onClick={() => openCatalog(productMap.get(application.products[0])?.category ?? "all")}>{copy.related}<ArrowIcon /></button>
            </div>
            <figure className="application-media">
              <Image src={siteData.assets[application.image]} alt={`${application[lang]} — ${copy.imageNotice}`} fill sizes="(max-width: 900px) 92vw, 42vw" />
              <figcaption>{copy.imageNotice}</figcaption>
            </figure>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-copy reveal">
            <span className="vertical-rule" aria-hidden="true" />
            <h2>{copy.aboutHeading}</h2>
            <p>{copy.aboutBody}</p>
            <a className="text-link" href="#contact">{copy.learnMore}<ArrowIcon /></a>
          </div>
          <figure className="about-media reveal">
            <Image src={siteData.assets.about} alt={isZh ? "双手塑形面团的烘焙应用场景" : "Hands shaping dough in a bakery application scene"} fill sizes="(max-width: 900px) 92vw, 55vw" />
            <figcaption>{copy.imageNotice}</figcaption>
          </figure>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner reveal">
            <div className="contact-title">
              <span className="vertical-rule" aria-hidden="true" />
              <h2>{copy.contactHeading}</h2>
            </div>
            <div className="contact-item">
              <span className="contact-label">{copy.phone}</span>
              <a className="contact-phone" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}<ArrowIcon /></a>
            </div>
            <div className="contact-item contact-address">
              <span className="contact-label">{copy.address}</span>
              <p>{copy.addressValue}</p>
            </div>
            <a className="button button-dark" href={`tel:${siteConfig.phoneHref}`}>{copy.consult}<ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-brand" href="#home"><span>橙益</span> CHENGYI</a>
          <nav aria-label={isZh ? "页脚导航" : "Footer navigation"}>
            {copy.nav.slice(1).map((label, index) => <a href={`#${navIds[index + 1]}`} key={label}>{label}</a>)}
          </nav>
          <a className="footer-language" href={`/${isZh ? "en" : "zh"}/`}>中文 / EN</a>
        </div>
        <p className="source-notice">© {siteConfig.company[lang]} · {copy.sourceNotice} <a href={siteConfig.filing.href} target="_blank" rel="noreferrer">{siteConfig.filing.label}</a></p>
      </footer>

      <section className={`catalog-overlay${catalogOpen ? " is-open" : ""}`} hidden={!catalogOpen} aria-label={copy.catalogTitle} onClick={(event) => { if (event.target === event.currentTarget) setCatalogOpen(false); }}>
        <div className="catalog-shell">
          <header className="catalog-header">
            <div><h2>{copy.catalogTitle}</h2><p>{copy.catalogBody}</p></div>
            <button className="icon-button" aria-label={copy.close} onClick={() => setCatalogOpen(false)}><CloseIcon /></button>
          </header>
          <div className="catalog-tools">
            <label className="search-box"><SearchIcon /><input type="search" placeholder={copy.searchPlaceholder} autoComplete="off" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
            <div className="catalog-filters">
              <button className={`catalog-filter${catalogFilter === "all" ? " is-active" : ""}`} onClick={() => setCatalogFilter("all")}>{copy.all}</button>
              {categories.map((item) => <button className={`catalog-filter${catalogFilter === item.id ? " is-active" : ""}`} key={item.id} onClick={() => setCatalogFilter(item.id)}>{item[lang].name}</button>)}
            </div>
          </div>
          <div className="catalog-results">
            {filteredProducts.length ? filteredProducts.map((item) => {
              const parent = categories.find((candidate) => candidate.id === item.category);
              return (
                <button className="catalog-row" key={item.slug} onClick={() => setSelectedProduct(item.slug)}>
                  <span className="catalog-row-main"><span className="catalog-row-category">{parent?.[lang].name}</span><strong>{item[lang].name}</strong></span>
                  <span className="catalog-row-spec">{item[lang].spec}</span>
                  <span className="catalog-row-use">{item[lang].applications}</span>
                  <ChevronIcon />
                </button>
              );
            }) : <p className="empty-state">{copy.noResults}</p>}
          </div>
        </div>
      </section>

      <dialog className="product-dialog" ref={dialogRef} onClose={closeProduct} onClick={(event) => { if (event.target === event.currentTarget) closeProduct(); }}>
        {product && (
          <div className="dialog-shell">
            <button className="icon-button dialog-close" aria-label={copy.close} onClick={closeProduct}><CloseIcon /></button>
            <p className="dialog-category">{categories.find((item) => item.id === product.category)?.[lang].name}</p>
            <h2>{product[lang].name}</h2>
            <dl>{[product[lang].spec, product[lang].feature, product[lang].note, product[lang].applications].map((value, index) => <div key={copy.detailLabels[index]}><dt>{copy.detailLabels[index]}</dt><dd>{value || "—"}</dd></div>)}</dl>
            <a className="button button-primary" href={`tel:${siteConfig.phoneHref}`}>{copy.consult}<ArrowIcon /></a>
          </div>
        )}
      </dialog>
    </>
  );
}
