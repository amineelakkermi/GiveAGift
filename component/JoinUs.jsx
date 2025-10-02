"use client";
import { useLanguage } from "./LanguageProvider";
import Title from "./Title";

export default function JoinUs() {
  const { lang } = useLanguage();

  const t = lang === "en"
    ? {
        title: "Join GiveAGift Partners",
        storeName: "Store Name",
        description: "Store Description",
        storeLink: "Store Link",
        phone: "Phone Number",
        email: "Email",
        required: "*",
        submit: "Submit",
      }
    : {
        title: "انضم إلى شركاء قيف اقيفت",
        storeName: "اسم المتجر",
        description: "الوصف",
        storeLink: "رابط المتجر",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        required: "*",
        submit: "إرسال",
      };

  return (
    <section
      id="join-us"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full min-h-[100vh] flex flex-col items-center justify-center px-6 pt-12 bg-white"
    >
      {/* Titre */}
      <Title
        text={t.title}
        mt="mt-0"
        textColor="text-blue"
        svgColor="#A3262A"
      />

      {/* Formulaire */}
      <form className="w-full max-w-5xl flex flex-col gap-6">
        {/* Nom du magasin */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">
            {t.storeName} <span className="text-red-500">{t.required}</span>
          </label>
          <input
            type="text"
            required
            className="w-full rounded-lg px-4 py-3 text-gray-900 text-sm outline-none 
                       focus:ring-2 focus:ring-red-400 border border-gray-300"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">
            {t.description} <span className="text-red-500">{t.required}</span>
          </label>
          <textarea
            rows={3}
            required
            className="w-full rounded-lg px-4 py-3 text-gray-900 text-sm outline-none 
                       focus:ring-2 focus:ring-red-400 border border-gray-300"
          />
        </div>

        {/* Store Link */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">
            {t.storeLink} <span className="text-red-500">{t.required}</span>
          </label>
          <input
            type="url"
            required
            className="w-full rounded-lg px-4 py-3 text-gray-900 text-sm outline-none 
                       focus:ring-2 focus:ring-red-400 border border-gray-300"
          />
        </div>

        <div className="w-full flex gap-5 ">
        {/* Phone */}
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-gray-800 font-medium">
            {t.phone} <span className="text-red-500">{t.required}</span>
          </label>
          <input
            type="text"
            required
            className="w-full rounded-lg px-4 py-3 text-gray-900 text-sm outline-none 
                       focus:ring-2 focus:ring-red-400 border border-gray-300"
          />
        </div>

        {/* Email */}
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-gray-800 font-medium">
            {t.email} <span className="text-red-500">{t.required}</span>
          </label>
          <input
            type="email"
            required
            className="w-full rounded-lg px-4 py-3 text-gray-900 text-sm outline-none 
                       focus:ring-2 focus:ring-red-400 border border-gray-300"
          />
        </div>

        </div>

        {/* Bouton */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#1E2330] hover:bg-[#2C3244] text-white font-medium px-10 py-3 
                       rounded-full shadow-lg transition"
          >
            {t.submit}
          </button>
        </div>
      </form>
    </section>
  );
}
