import BigSparke from "@/customSvgs/BigSparke";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-3 pt-10 md:pt-20">
      <BigSparke />
      <h1 className={`mt-8 text-[32px] font-extrabold text-black md:mt-12`}>
        Explore the app
      </h1>
      <p className="flex w-[319px] justify-center text-center text-[17px] opacity-70">
        Now your finances are in one place and always under control
      </p>

      <Link
        className="mt-10 flex h-[53px] !w-[353px] items-center justify-center rounded-lg bg-black text-base font-semibold text-white"
        href={`/login`}
      >
        Log in
      </Link>
      <Link
        className="flex h-[53px] !w-[353px] items-center justify-center rounded-lg border border-solid border-[#747474] bg-transparent text-base font-semibold text-black"
        href={`#`}
      >
        Create account
      </Link>
    </section>
  );
}
