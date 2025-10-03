"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import redLogo from "../public/images/redLogo.png";
import { useLanguage } from "./LanguageProvider";

export default function LoginComponent({ isOpen, setIsOpen }) {
  // Utilise la langue depuis ton provider
  const { lang, setLang } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Traduction
  const t =
    lang === "en"
      ? {
          title: "Login",
          paragraph:
            "Welcome back! Please enter your details to access your account.",
          email: "Email",
          password: "Password",
          button: "Login",
        }
      : {
          title: "تسجيل الدخول",
          paragraph: "مرحباً بعودتك! الرجاء إدخال بياناتك للوصول إلى حسابك.",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          button: "تسجيل الدخول",
        };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white rounded-2xl shadow-xl h-[491px] w-[90%] lg:w-[650px] xl:w-[772px] p-8">
        {/* Bouton Fermer */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-gray-700 hover:text-black"
        >
          <AiOutlineClose size={24} />
        </button>

        

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={redLogo} alt="Logo" width={100} height={100} />
        </div>

        {/* Titre */}
        <h2 className="text-2xl font-bold text-center mb-2">{t.title}</h2>
        <p className="text-gray-600 text-center mb-8">{t.paragraph}</p>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {/* Champ Email */}
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <label className="block text-gray-700 mb-2">
              {t.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Champ Mot de passe */}
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <label className="block text-gray-700 mb-2">
              {t.password} <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Bouton */}
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="w-[152px] bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-black transition"
            >
              {t.button}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
