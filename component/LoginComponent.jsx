"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"; // icône de fermeture react-icons

// Exemple logo (remplace par ton image)
import redLogo from "../public/images/redLogo.png";

export default function LoginComponent({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Ici tu pourras ajouter ta logique API login
  };

  if (!isOpen) return null; // si fermé, rien n’est affiché

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white rounded-2xl shadow-xl w-[90%] lg:w-[650px] xl:w-[772px] p-8">
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
        <h2 className="text-2xl font-bold text-center mb-2">تسجيل الدخول</h2>
        <p className="text-gray-600 text-center mb-8">
          مرحباً بعودتك! الرجاء إدخال بياناتك للوصول إلى حسابك.
        </p>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-right"
          dir="rtl"
        >
          {/* Champ Email */}
          <div>
            <label className="block text-gray-700 mb-2">
              البريد الإلكتروني <span className="text-red-500">*</span>
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
          <div>
            <label className="block text-gray-700 mb-2">
              كلمة المرور <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="w-full flex justify-center items-center">
          {/* Bouton */}
           <button
            type="submit"
            className="w-[152px] bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-black transition">
            تسجيل الدخول
          </button>

          </div>
        </form>
      </div>
    </div>
  );
}
