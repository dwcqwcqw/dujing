"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  BrainCircuit,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Cpu,
  Network,
  Wand2,
  Users,
} from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import logoImage from "@/../public/assets/logo.png";
import appImage1 from "@/../public/assets/app-1.png";
import appImage2 from "@/../public/assets/app-2.png";
import appImage3 from "@/../public/assets/app-3.png";
import appImage4 from "@/../public/assets/app-4.png";

const navLinks = [
  { label: "产品介绍", href: "#product" },
  { label: "技术", href: "#tech" },
  { label: "关于我们", href: "#about" },
];

const metrics = [
  { label: "AI 阅读资产", value: "500+", detail: "多场景语音与角色模板" },
  { label: "生成速度", value: "10s", detail: "平均生成沉浸场景时间" },
  { label: "语言覆盖", value: "40+", detail: "多语种语音与字幕支持" },
];

const features = [
  {
    id: "companion",
    icon: BookOpen,
    title: "AI 伴读",
    subtitle: "「让书说话」",
    description:
      "从文字到语音，从故事到讲解，AI 生成多角色沉浸式阅读伴随体验。",
    highlights: [
      "多角色情感语音实时演绎情节",
      "重点段落智能标注与复述",
      "儿童/成人个性化阅读模式",
    ],
    gradient: "from-violet-500/25 to-sky-500/10",
  },
  {
    id: "understand",
    icon: BrainCircuit,
    title: "智能理解",
    subtitle: "「看见知识的结构」",
    description:
      "自动提炼章节结构、问题要点与知识图谱，让阅读不止于文字。",
    highlights: [
      "章节问答与自测题即时生成",
      "跨章节人物与概念关系图谱",
      "关键语句/术语 AI 释义",
    ],
    gradient: "from-sky-500/25 to-emerald-400/10",
  },
  {
    id: "immersion",
    icon: Sparkles,
    title: "沉浸生成",
    subtitle: "「文字到世界」",
    description:
      "一键生成阅读场景短片、角色对话与语音旁白，开启多感官阅读旅程。",
    highlights: [
      "AI 场景视频/海报自动合成",
      "角色对话剧本 + 语音演绎",
      "跨平台展示与分享一体化",
    ],
    gradient: "from-fuchsia-500/25 to-indigo-500/10",
  },
];

const techStacks = [
  {
    icon: BrainCircuit,
    title: "文本理解层",
    description: "OCR · 语义分析 · 知识粒度拆分",
    bullets: ["多模态 OCR 与版式还原", "LLM 语义重写与纠错", "教学目标导向的分级拆分"],
  },
  {
    icon: Cpu,
    title: "生成层",
    description: "语音 · 图像 · 视频 · 数字人",
    bullets: ["AI 语音情感调度引擎", "Stable Diffusion / RunDiffusion 场景合成", "多形态数字人演绎"],
  },
  {
    icon: Network,
    title: "交互层",
    description: "伴读 · 问答 · 私教反馈",
    bullets: ["实时对话式阅读助理", "学习路径与知识卡片", "多角色协作的课堂场景"],
  },
  {
    icon: ShieldCheck,
    title: "可信安全",
    description: "隐私合规 · 审核防护 · 数据隔离",
    bullets: ["企业级加密与访问控制", "AI 输出安全监测", "教育场景隐私合规流程"],
  },
];

const showcaseImages = [
  {
    src: appImage1,
    alt: "读境 AI 阅读伴随界面",
  },
  {
    src: appImage2,
    alt: "知识图谱与章节问答界面",
  },
  {
    src: appImage3,
    alt: "沉浸式阅读场景生成界面",
  },
  {
    src: appImage4,
    alt: "合作伙伴管理后台界面",
  },
];

const teamHighlights = [
  {
    title: "关于读境 AI",
    description:
      "我们是来自教育科技、AI 生成式内容与交互设计领域的跨学科团队，致力于让每一次阅读都是可以进入的世界。",
    points: ["核心成员来自头部教育与 AI 公司", "覆盖教学设计、声音设计与全栈研发", "服务出版、教育培训与创新校园场景"],
  },
  {
    title: "合作方向",
    description:
      "面向出版社、教育机构、文化空间与科技伙伴，提供联合策展、数字版权、AI 共创课程等多种合作模式。",
    points: ["出版教育 IP 数字化焕新", "AI 阅读产品共创与定制开发", "沉浸式阅读空间联合运营"],
  },
];

const videoSource =
  "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="aurora" aria-hidden="true" />

      <header className="sticky top-0 z-40 border-b border-blue-200/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src={logoImage}
              alt="读境 AI Logo"
              width={44}
              height={44}
              className="rounded-xl border border-blue-200/40 bg-white/60 p-1 shadow-lg shadow-blue-200/30"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-wide text-slate-800">
                读境 AI
              </span>
              <span className="text-xs text-slate-500">
                Reading · AI · World
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition-colors duration-200 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="inline-flex items-center justify-center rounded-full border border-blue-200/40 px-3 py-2 text-xs text-slate-700 md:hidden">
            菜单
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <HeroSection />
        <ProductSection />
        <ImmersionSection />
        <TechnologySection />
        <ShowcaseSection />
        <AboutSection />
        <CTASection />
      </main>

      <footer className="relative z-10 border-t border-blue-200/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-700">读境 AI — 让世界从阅读中被重新生成。</p>
            <p className="text-xs text-slate-500">
              Copyright © {new Date().getFullYear()} 读境 AI. 保留所有权利。
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <Link href="#product" className="hover:text-blue-600">产品介绍</Link>
            <Link href="#tech" className="hover:text-blue-600">技术</Link>
            <Link href="#about" className="hover:text-blue-600">关于我们</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroSection() {
  const headline = "读境，让每本书都有生命";
  const headlineChars = Array.from(headline);

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <AuroraBackground className="min-h-[90vh] py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-white/70 px-4 py-1 text-xs text-blue-600 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              「让阅读成为一次 AI 的旅程」
            </motion.div>
            <h1
              className="max-w-xl text-4xl font-semibold leading-tight text-slate-800 md:text-5xl lg:text-6xl"
              aria-label={headline}
            >
              {headlineChars.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg text-lg text-slate-600"
            >
              读境 AI 是你的智能阅读世界生成器。我们将书籍的知识与情感，通过 AI
              伴读、知识结构化与沉浸式内容生成，转化成可进入、可互动、可分享的阅读旅程。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {metrics.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="rounded-2xl border border-blue-200/40 bg-white/70 p-5 text-slate-700 backdrop-blur shadow-sm"
                >
                  <div className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                  <div className="mt-3 text-xs text-slate-500">{item.detail}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto w-full max-w-md z-10"
          >
            <div className="absolute inset-4 rounded-[36px] bg-gradient-to-br from-blue-200/40 via-sky-200/30 to-indigo-200/20 blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[32px] border border-blue-200/40 bg-white/80 p-6 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-100/80 px-3 py-1 text-xs text-blue-700">
                  读境沉浸空间
                </span>
                <span className="text-xs text-slate-500">实时生成中</span>
              </div>
              <div className="mt-6 space-y-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative rounded-3xl border border-blue-200/40 bg-gradient-to-br from-blue-50/80 to-sky-50/80 p-5"
                >
                  <span className="text-sm text-blue-600 font-medium">AI 伴读声音片段</span>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    &quot;当你翻开这本书，星辉化作了你的朗读伙伴。我们将一起走进这座会呼吸的图书馆。&quot;
                  </p>
                </motion.div>
                <motion.div
                  animate={{ y: [6, -2, 6] }}
                  transition={{ duration: 7, repeat: Infinity }}
                  className="relative overflow-hidden rounded-3xl border border-blue-200/40 bg-gradient-to-br from-sky-50/80 to-indigo-50/80 p-5"
                >
                  <span className="text-sm text-sky-600 font-medium">章节知识图谱</span>
                  <p className="mt-2 text-xs text-slate-600">
                    主题节点{" "}
                    <span className="text-slate-800 font-medium">&quot;勇气与探索&quot;</span> →
                    角色关系 →
                    情节推进
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                    <span className="rounded-full border border-blue-200/50 bg-white/60 px-3 py-1">
                      关键词：成长
                    </span>
                    <span className="rounded-full border border-blue-200/50 bg-white/60 px-3 py-1">
                      问题：如果你是主角会如何选择？
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="mt-6 rounded-2xl border border-blue-200/40 bg-white/60 p-4 text-xs text-slate-600">
                <p className="font-medium text-slate-700">AI 阅读私教建议：</p>
                <p className="mt-2 text-slate-600">
                  今晚 20:00 生成「第二章场景短片」，并邀请你的小组伙伴进行角色共读。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}

function ProductSection() {
  return (
    <section
      id="product"
      className="relative border-y border-blue-200/30 bg-white/60 py-24 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            阅读 × AI × 沉浸
          </h2>
          <p className="mt-4 text-base text-slate-600">
            用三维的方式理解阅读：当 AI
            伴读为文字赋予声音，知识结构被可视化，沉浸生成则让世界成为舞台。
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative rounded-3xl border border-blue-200/40 bg-white/80 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-400/60 shadow-sm hover:shadow-md"
            >
              <div
                className={clsx(
                  "absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100",
                  "bg-gradient-to-br",
                  "from-blue-100/50 to-sky-100/30",
                )}
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-6">
                <feature.icon className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="text-sm text-blue-600 font-medium">{feature.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {feature.highlights.map((item, itemIndex) => (
                    <li
                      key={`${feature.id}-${itemIndex}`}
                      className="flex items-start gap-2 rounded-xl border border-blue-200/40 bg-blue-50/50 px-3 py-2 leading-relaxed"
                    >
                      <Sparkles className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImmersionSection() {
  return (
    <section
      id="immersion"
      className="relative px-6 py-24 md:px-8 lg:px-12"
      aria-labelledby="immersion-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[40px] border border-blue-200/40 bg-gradient-to-br from-blue-50/80 to-sky-50/60 shadow-2xl shadow-blue-200/20">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            src={videoSource}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/70 to-sky-50/60" />
          <div className="relative z-10 flex flex-col gap-10 px-10 py-16 md:flex-row md:items-center md:gap-16 md:px-16 md:py-20">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
                ENTER DUJING
              </p>
              <h2
                id="immersion-title"
                className="mt-4 text-3xl font-semibold text-slate-800 md:text-4xl"
              >
                每一页文字，都是一个可进入的世界
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                灵感来源 Apple Vision Pro、Replika 与 Notion AI。读境 AI
                将阅读场景与动态粒子交织，营造流光科技的沉浸感，配合轻微粒子轨迹与书页展开动画，让记忆在光影中定格。
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <p>· 背景全屏视频记录 AI 生成的阅读场景</p>
                <p>· 粒子与文字同步流动，形成沉浸式光轨</p>
                <p>· 中央一句宣言引导进入读境的情绪</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl border border-blue-200/40 bg-white/80 p-6 backdrop-blur shadow-sm"
              >
                <p className="text-sm text-blue-600 font-medium">场景亮点</p>
                <p className="mt-3 text-sm text-slate-700">
                  「进入读境」落地页采用流光粒子、动态模糊渐变与玻璃拟态信息层，打造未来阅读空间感。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="rounded-2xl border border-blue-200/40 bg-white/70 p-6 backdrop-blur shadow-sm"
              >
                <p className="text-sm text-sky-600 font-medium">互动建议</p>
                <p className="mt-3 text-sm text-slate-700">
                  鼠标移动时背景粒子随之流动，Logo
                  以书页翻动动画渐显，营造&quot;阅读空间唤醒&quot;的仪式感。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section
      id="tech"
      className="relative border-t border-blue-200/30 bg-white/60 py-24 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
              AI 驱动的阅读引擎
            </h2>
            <p className="mt-4 text-base text-slate-600">
              读境引擎结构：📚 文本理解层 → 🎨 生成层 → 🧩 交互层。每一层都以教育与出版的高标准打造，并搭建可信安全体系。
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {techStacks.map((stack) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-blue-200/40 bg-white/80 p-8 backdrop-blur-xl shadow-sm"
            >
              <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
              <div className="relative flex flex-col gap-5">
                <stack.icon className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="text-sm text-blue-600 font-medium">{stack.description}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-800">
                    {stack.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {stack.bullets.map((item, itemIndex) => (
                    <li
                      key={`${stack.title}-${itemIndex}`}
                      className="flex items-start gap-2 rounded-xl border border-blue-200/40 bg-blue-50/50 px-3 py-2 leading-relaxed"
                    >
                      <Wand2 className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-3xl border border-blue-200/40 bg-gradient-to-br from-blue-50/60 to-sky-50/40 p-10 backdrop-blur shadow-sm">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-blue-200/50 bg-white/70 px-3 py-1">
              云原生微服务架构
            </span>
            <span className="rounded-full border border-blue-200/50 bg-white/70 px-3 py-1">
              Cloudflare 边缘加速
            </span>
            <span className="rounded-full border border-blue-200/50 bg-white/70 px-3 py-1">
              RunPod 推理集群
            </span>
            <span className="rounded-full border border-blue-200/50 bg-white/70 px-3 py-1">
              模型仓库安全分层管理
            </span>
          </div>
          <p className="text-sm text-slate-600">
            针对教育与出版行业需求，读境 AI
            提供灵活部署（公有云/专有云/本地化）、数据隔离、多角色协同管理与合规审批，确保创新与安全并行。
          </p>
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative px-6 py-24 md:px-8 lg:px-12"
      aria-labelledby="showcase-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="showcase-title"
            className="text-3xl font-semibold text-slate-800 md:text-4xl"
          >
            读境应用界面一览
          </h2>
          <p className="mt-4 text-base text-slate-600">
            iPad / Web / XR
            多端统一体验，玻璃拟态界面与流光粒子动效，呈现未来阅读空间。
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[32px] border border-blue-200/40 bg-white/80 p-5 backdrop-blur-xl shadow-sm"
            >
              <div className="absolute inset-0 rounded-[32px] border border-blue-300/50 opacity-0 transition duration-500 group-hover:opacity-100" />
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={1300}
                className="rounded-3xl border border-blue-200/40 shadow-2xl shadow-blue-200/30 transition duration-500 group-hover:scale-[1.015]"
              />
              <div className="mt-4 text-sm text-slate-600">{image.alt}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:px-8 lg:px-12"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-title"
          className="text-3xl font-semibold text-slate-800 md:text-4xl"
        >
          关于我们与合作愿景
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {teamHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-blue-200/40 bg-white/80 p-8 backdrop-blur-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 rounded-xl border border-blue-200/40 bg-blue-50/50 px-3 py-2 leading-relaxed"
                  >
                    <Users className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-y border-blue-200/30 bg-gradient-to-br from-blue-50/80 via-white/90 to-sky-50/80 py-24"
    >
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-blue-300/30 via-transparent to-transparent blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
          DUJING AI
        </p>
        <h2 className="sr-only">
          开启你的读境
        </h2>
        <p className="mt-4 text-base text-slate-600">
          我们提供沉浸式阅读 Demo、行业解决方案与定制化联合项目。
        </p>
        <div className="mt-10">
          <ParticleTextEffect
            words={["开启你的读境"]}
            variant="plain"
            className="mx-auto w-full max-w-3xl"
            canvasClassName="drop-shadow-[0_20px_60px_rgba(59,130,246,0.2)]"
            backgroundOpacity={0.02}
            showHint={false}
          />
        </div>
      </div>
    </section>
  );
}
