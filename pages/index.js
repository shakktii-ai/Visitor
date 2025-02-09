


import Head from "next/head";
import localFont from "next/font/local";
import Script from "next/script";
import CountUp from "react-countup";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "user") {
      router.push("/login"); // Redirect to login if not a user
    }
  }, [router]);


  const counters = [
    // { id: 1, value: 9, label: "YEARS", suffix: "+" },
    { id: 2, value: 150, label: "Pending", suffix: "+" },
    { id: 3, value: 3, label: "Complete" },
    { id: 4, value: 120, label: "Total Visitor", suffix: "+" },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 ml-64 text-center mt-10">
      {counters.map((counter) => (
        <div key={counter.id} className="text-center">
          <h2 className="text-4xl font-bold text-rose-500">
            <CountUp
              end={counter.value}
              duration={2.5}
              suffix={counter.suffix || ""}
            />
          </h2>
          <p className="text-lg font-medium text-gray-700">{counter.label}</p>
        </div>
      ))}
    </div>




    
<div class="ta-c padT150 padB150">
{/* <button class="button cancel-btn"  onclick="addAnimation()">
Cancel
</button> */}<a href="/form">
<button class="button accept-btn" onclick="addAnimation2()">
New Visitor
</button></a>
</div>




     
    </>
  );
}
