import Products from "@/components/layouts/products";
import MotionTest from "@/components/motion_test/motion_test";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between font-[300] text-[40px] leading-none">
      <p className="mb-[1000px]">Scroll down ↓</p>
      <Products/>
    </main>
  );
}
