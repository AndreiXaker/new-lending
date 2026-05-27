import React, { type ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Brain,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  LineChart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Waves,
} from "lucide-react";

type SectionLabelProps = {
  children: ReactNode;
};

const TELEGRAM_LINK = "https://t.me/CalmPandaBot";
const MAX_LINK = "#"; // заменить, когда появится ссылка на MAX

const quickStates = [
  "меня накрыло",
  "тревожно",
  "обидно",
  "злюсь",
  "одиноко",
  "не могу уснуть",
  "хочу выговориться",
  "не знаю",
];

const benefits = [
  {
    icon: Brain,
    title: "ИИ анализирует эмоциональное состояние",
    text: "Calm Panda использует технологии искусственного интеллекта для анализа пользовательских сообщений, определения эмоционального состояния и выявления проблемных жизненных сфер.",
  },
  {
    icon: LineChart,
    title: "Переводит переживания в структурированные данные",
    text: "Сервис превращает субъективные переживания в понятные и полезные данные: состояние, интенсивность, триггер, динамика и повторяющиеся паттерны.",
  },
  {
    icon: CalendarDays,
    title: "Визуализирует динамику состояния",
    text: "Платформа помогает отслеживать психоэмоциональное состояние, замечать изменения на ранней стадии и видеть прогресс в удобном формате.",
  },
  {
    icon: HeartHandshake,
    title: "Даёт персонализированные рекомендации",
    text: "После сессии пользователь получает не просто диалог, а осмысленный итог: что помогло, что повторяется и к чему стоит вернуться в следующий раз.",
  },
];

const steps = [
  {
    title: "Выбери, что сейчас ближе всего",
    text: "Пользователю не нужно идеально формулировать проблему. Можно выбрать состояние из кнопок или написать своими словами.",
  },
  {
    title: "Оцени интенсивность состояния",
    text: "Платформа предлагает отметить остроту состояния по шкале от 1 до 10, чтобы зафиксировать исходную точку.",
  },
  {
    title: "Пройди короткую управляемую сессию",
    text: "Calm Panda мягко проводит пользователя через подходящий сценарий поддержки — в Telegram-боте и mini app.",
  },
  {
    title: "Посмотри, стало ли легче",
    text: "В конце сессии пользователь снова оценивает своё состояние и видит, изменилась ли эмоциональная острота.",
  },
  {
    title: "Сохрани полезный итог",
    text: "Сервис запоминает суть: что произошло, что помогло, какой паттерн может повторяться.",
  },
];

const features = [
  "Цифровая платформа поддержки эмоционального благополучия",
  "Telegram-бот для быстрого входа в поддержку",
  "Mini app с календарём эмоциональных сессий",
  "Анализ эмоционального состояния и проблемных сфер",
  "Персональная память о том, что уже помогало",
  "Выявление повторяющихся паттернов и триггеров",
  "Инструмент регулярной саморефлексии",
  "Скоро запуск на российской площадке MAX",
];

const faq = [
  {
    q: "Calm Panda — это психолог или медицинский сервис?",
    a: "Нет. Calm Panda — это интеллектуальный цифровой сервис для эмоциональной поддержки, саморефлексии и профилактики стресса. Он не ставит диагнозы и не заменяет психолога, психотерапевта или врача.",
  },
  {
    q: "Где доступен сервис?",
    a: "Сейчас Calm Panda доступен на платформе Telegram. Также мы готовим запуск на российской площадке MAX.",
  },
  {
    q: "Зачем нужна оценка состояния от 1 до 10?",
    a: "Она помогает понять исходную точку и увидеть, изменилось ли состояние после сессии. Это делает пользу сервиса заметной и измеримой.",
  },
  {
    q: "Это просто чат с ИИ?",
    a: "Нет. Calm Panda — это не просто переписка, а управляемая эмоциональная сессия с понятным результатом, персональной памятью и возможностью отслеживать динамику состояния.",
  },
  {
    q: "Что такое mini app?",
    a: "Это удобный интерфейс внутри платформы, где пользователь может смотреть календарь эмоциональных сессий, видеть динамику состояния, повторяющиеся паттерны и возвращаться к тем техникам, которые уже помогали.",
  },
];

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

type CTAButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm md:text-base font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-200"
      : "bg-white text-slate-700 border border-pink-200 hover:bg-pink-50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function CalmPandaLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-rose-50 to-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <img
              src="/mascot.png"
              alt="Calm Panda mascot"
              className="h-12 w-12 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900">
                Calm Panda
              </div>
              <div className="text-xs text-slate-500">
                цифровая платформа эмоциональной поддержки
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-sky-600">О платформе</a>
            <a href="#how" className="hover:text-sky-600">Как работает</a>
            <a href="#platforms" className="hover:text-sky-600">Площадки</a>
            <a href="#faq" className="hover:text-sky-600">FAQ</a>
          </nav>

          <div className="hidden sm:block">
            <CTAButton href={TELEGRAM_LINK}>Открыть в Telegram</CTAButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Интеллектуальный цифровой сервис в сфере wellbeing-tech</SectionLabel>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Calm Panda — цифровая платформа для поддержки эмоционального благополучия
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Calm Panda — интеллектуальный цифровой сервис для поддержки эмоционального
              благополучия и профилактики стресса. Платформа помогает пользователю
              отслеживать психоэмоциональное состояние, выявлять негативные изменения
              на ранней стадии и получать персонализированные рекомендации по улучшению
              качества жизни.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              В основе решения лежит применение технологий искусственного интеллекта
              для анализа пользовательских сообщений, определения эмоционального
              состояния и выявления проблемных жизненных сфер.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={TELEGRAM_LINK}>
                Начать в Telegram <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
              <CTAButton href="#platforms" variant="secondary">
                Где доступен сервис
              </CTAButton>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-sky-100">
                <div className="font-bold text-slate-900">Telegram</div>
                <div className="mt-1 text-sm text-slate-600">
                  Уже доступен как бот и mini app для быстрого входа в поддержку.
                </div>
              </div>
              <div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-pink-100">
                <div className="font-bold text-slate-900">MAX</div>
                <div className="mt-1 text-sm text-slate-600">
                  Скоро появимся на российской площадке MAX, чтобы быть ближе к пользователям.
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white/80 p-4 shadow-2xl ring-1 ring-sky-100 backdrop-blur">
              <img
                src="/mascot.png"
                alt="Calm Panda"
                className="mx-auto w-full max-w-[520px] rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-sky-100/80 p-4 shadow-sm">
                <div className="text-sm font-semibold text-sky-800">Поддержка в моменте</div>
                <div className="mt-1 text-sm text-slate-700">
                  Короткие сессии, когда тревожно, тяжело или эмоционально перегрузило.
                </div>
              </div>
              <div className="rounded-3xl bg-pink-100/80 p-4 shadow-sm">
                <div className="text-sm font-semibold text-pink-800">Регулярная саморефлексия</div>
                <div className="mt-1 text-sm text-slate-700">
                  Удобный инструмент, который помогает замечать динамику состояния.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>О платформе</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Платформа, которая превращает переживания в понятную цифровую картину состояния
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Calm Panda переводит субъективные переживания в структурированные данные,
              визуализирует динамику состояния и формирует удобный инструмент регулярной
              саморефлексии. Проект ориентирован на пользователей, испытывающих стресс,
              тревожность и эмоциональную перегрузку.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <item.icon className="mb-4 h-8 w-8 text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ENTRY */}
      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-r from-sky-100 to-pink-100 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionLabel>Быстрый вход</SectionLabel>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                Не нужно идеально объяснять, что с тобой происходит
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Когда человеку тревожно, тяжело, обидно или одиноко, сложно формулировать
                длинный запрос. Поэтому Calm Panda начинает с простого входа в состояние.
              </p>
              <p className="mt-4 text-slate-600">
                Можно выбрать готовый вариант или написать своими словами.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {quickStates.map((state) => (
                <div
                  key={state}
                  className="flex h-28 items-center justify-center rounded-3xl bg-white/80 px-4 text-center text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Как работает</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Цифровая эмоциональная сессия с измеримым результатом
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Главная единица продукта- это эмоциональная сессия,
              в которой пользователь получает поддержку, фиксирует динамику и сохраняет
              полезный итог.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 to-pink-200 text-lg font-black text-slate-800">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12">
          <div className="max-w-3xl">
            <SectionLabel>Площадки</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Цифровая платформа, доступная там, где пользователю удобно
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Мы строим Calm Panda как цифровую платформу эмоционального wellbeing,
              которая будет доступна на привычных пользователю площадках.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-sky-50 p-6 ring-1 ring-sky-100">
              <div className="mb-4 flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-sky-500" />
                <h3 className="text-2xl font-bold text-slate-900">Telegram</h3>
              </div>
              <p className="leading-7 text-slate-700">
                Уже сейчас Calm Panda работает в Telegram как бот и mini app.
                Это даёт пользователю быстрый и привычный доступ к эмоциональной поддержке,
                сессиям и календарю состояния.
              </p>
              <div className="mt-6">
                <CTAButton href={TELEGRAM_LINK}>
                  Открыть в Telegram <ArrowRight className="ml-2 h-4 w-4" />
                </CTAButton>
              </div>
            </div>

            <div className="rounded-[2rem] bg-pink-50 p-6 ring-1 ring-pink-100">
              <div className="mb-4 flex items-center gap-3">
                <Smartphone className="h-8 w-8 text-pink-500" />
                <h3 className="text-2xl font-bold text-slate-900">MAX</h3>
              </div>
              <p className="leading-7 text-slate-700">
                Мы также готовим запуск Calm Panda на российской площадке MAX.
                Это позволит расширить доступность сервиса и укрепить его как
                масштабируемую цифровую платформу в сфере wellbeing-tech.
              </p>
              <div className="mt-6">
                <CTAButton href={MAX_LINK} variant="secondary">
                  Скоро в MAX
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT INSIDE */}
      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Что внутри</SectionLabel>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                Всё, что нужно для цифровой поддержки и саморефлексии
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Calm Panda сочетает быстрый эмоциональный вход, ИИ-анализ,
                персональную память и визуализацию состояния в единой платформе.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                  <p className="font-medium leading-7 text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-r from-sky-500 to-pink-400 p-8 text-white md:p-12">
          <SectionLabel>Почему Calm Panda</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Calm Panda – это цифровой сервис с практической пользой
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/15 p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Обычный ИИ-чат</h3>
              <ul className="mt-4 space-y-3 text-white/90">
                <li>• пользователь каждый раз заново объясняет контекст;</li>
                <li>• нет понятного результата сессии;</li>
                <li>• история превращается в длинную переписку;</li>
                <li>• не формируется персональная память о том, что помогло.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white/20 p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Calm Panda</h3>
              <ul className="mt-4 space-y-3 text-white/95">
                <li>• проводит пользователя через управляемую эмоциональную сессию;</li>
                <li>• измеряет динамику состояния “было / стало”;</li>
                <li>• сохраняет полезный итог, а не только переписку;</li>
                <li>• помогает выявлять паттерны и возвращаться к работающим техникам.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionLabel>Важно</SectionLabel>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                Calm Panda — не медицинский сервис
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Платформа помогает с эмоциональной самоподдержкой, саморефлексией
                и профилактикой стресса. Calm Panda не ставит диагнозы и не заменяет
                помощь специалиста.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] bg-sky-50 p-5 ring-1 ring-sky-100">
                <div className="mb-2 flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="h-5 w-5 text-sky-500" />
                  Мягкая и корректная подача
                </div>
                <p className="text-slate-700">
                  Платформа использует формулировки вроде “похоже”, “может повторяться”,
                  “в похожих ситуациях”, не навешивая ярлыки на пользователя.
                </p>
              </div>

              <div className="rounded-[2rem] bg-pink-50 p-5 ring-1 ring-pink-100">
                <div className="mb-2 flex items-center gap-2 font-bold text-slate-900">
                  <Waves className="h-5 w-5 text-pink-500" />
                  Поддержка, а не диагноз
                </div>
                <p className="text-slate-700">
                  Calm Panda помогает лучше понять своё состояние и заметить повторяющиеся
                  закономерности, но не делает медицинских выводов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-white p-8 text-center shadow-xl ring-1 ring-slate-100 md:p-14">
          <img
            src="/mascot.png"
            alt="Calm Panda mascot"
            className="mx-auto mb-6 h-24 w-24 rounded-[2rem] object-cover shadow-sm"
          />
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Начни знакомство с Calm Panda уже сейчас
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Открой сервис в Telegram, пройди короткую сессию и посмотри,
            как цифровая платформа может помочь лучше понимать своё состояние,
            отслеживать динамику и возвращаться к тому, что уже помогало раньше.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={TELEGRAM_LINK}>
              Начать в Telegram <ArrowRight className="ml-2 h-4 w-4" />
            </CTAButton>
            <CTAButton href={MAX_LINK} variant="secondary">
              Скоро на MAX
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Частые вопросы
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-12 pt-4 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/mascot.png"
              alt="Calm Panda"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <span>© Calm Panda</span>
          </div>
          <div className="max-w-3xl leading-6">
            Calm Panda — интеллектуальный цифровой сервис поддержки эмоционального
            благополучия и профилактики стресса. Не является медицинским сервисом,
            не ставит диагнозы и не заменяет помощь специалиста.
          </div>
        </div>
      </footer>
    </main>
  );
}
