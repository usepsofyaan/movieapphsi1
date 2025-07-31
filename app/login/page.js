"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/backlogin.jpg')" }}>
      <div className="bg-[#181A1CD6] rounded-[8px] shadow-xl p-[24px] w-full max-w-md m-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-cols items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={44} />
            <Link href="/page" className="md:inline text-[28px] md:text-[50px]">
              CHILL
            </Link>
          </div>
        </div>

        {/* Teks Selamat Datang */}
        <div className="text-center mb-6">
          <h3 className="text-[18px] md:text-[32px] font-bold text-[#ffffff] mb-[5px]">Masuk</h3>
          <h3 className="text-[16px] font-normal text-[#ffffff]">Selamat Datang Kembali!</h3>
        </div>

        {/* Form Login */}
        <form>
          <div className="mb-4 flex flex-col space-y-[6px]">
            <label className="font-medium text-[#ffffff]">Username</label>
            <input type="text" className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff]" placeholder="Masukkan username" />
          </div>

          {/* Kata sandi*/}
          <div className="mb-4 flex flex-col space-y-[12px]">
            <label className="block font-medium text-[#ffffff]">Kata Sandi</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff] pr-10 bg-transparent" placeholder="Masukkan kata sandi" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Link Daftar & Lupa Sandi */}
          <div className="flex justify-between text-sm mb-4">
            <Link href="/daftar" className="text-[#ffffff]">
              Belum punya akun? Daftar
            </Link>
            <Link href="/lupa-password" className="text-[#ffffff]">
              Lupa kata sandi?
            </Link>
          </div>

          {/* Tombol Masuk */}
          <button type="submit" className="w-full bg-[#3D4142] border border-[#E7E3FC3B] text-white py-2 rounded-[24px] font-semibold">
            Masuk
          </button>

          {/* Atau Masuk dengan Google */}
          <div className="text-center mt-4 text-sm text-gray-600">atau</div>
          <button type="button" className="w-full border border-[#E7E3FC3B] mt-2 py-2 rounded-[24px] flex items-center justify-center hover:bg-gray-100">
            <Image src="/google.png" alt="Google" width={20} height={20} className="mr-2" />
            Masuk dengan Google
          </button>
        </form>
      </div>
    </div>
  );
}
