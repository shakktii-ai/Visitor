import {useState,useEffect} from 'react'
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import CombinedChart from '../../components/CombinedChart';
import CountUp from "react-countup";
import { useRouter } from 'next/router';




function index() {
    const router = useRouter();

    useEffect(() => {
      const userRole = localStorage.getItem("userRole");
      if (userRole !== "admin") {
        router.push("/login"); // Redirect to login if not an admin
      }
    }, [router]);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [otpSent, setOtpSent] = useState(false);  // Track if OTP has been sent
    const [isVerifying, setIsVerifying] = useState(false); // Track if OTP is being verified
  
    // Handle phone number submission to send OTP
    const handlePhoneNumberSubmit = async (e) => {
      e.preventDefault();
      setMessage("");
      
      if (!phoneNumber) {
        setMessage("Phone number is required!");
        return;
      }
  
      try {
        // Call your API endpoint to send OTP
        const response = await fetch("/api/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber }),
        });
  
        const data = await response.json();
        
        if (data.success) {
          setOtpSent(true);
          setMessage("OTP sent! Please check your phone.");
        } else {
          setMessage("Failed to send OTP.");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again.");
      }
    };
  
    // Handle OTP verification
    const handleVerifyOtp = async (e) => {
      e.preventDefault();
      setMessage("");
      setIsVerifying(true);
  
      if (!otp) {
        setMessage("OTP is required!");
        setIsVerifying(false);
        return;
      }
  
      try {
        // Call your API endpoint to verify OTP
        const response = await fetch("/api/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber, otp }),
        });
  
        const data = await response.json();
        
        if (data.success) {
          setMessage("OTP Verified!");
        } else {
          setMessage("Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again.");
      } finally {
        setIsVerifying(false);
      }
    };

    
    const counters = [
        { id: 1, value: 9, label: "YEARS", suffix: "+" },
        { id: 2, value: 150, label: "BRANDS", suffix: "+" },
        { id: 3, value: 3, label: "COUNTRIES" },
        { id: 4, value: 120, label: "Total visitor", suffix: "+" },
      ];
    
  return (<>    <a href='/admin/visitorList'>form</a>
    
     <div className="grid grid-cols-2 gap-6 md:grid-cols-4 ml-64 text-center">
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
    {/* <div className="min-h-screen bg-gray-100 p-8 ml-64">
       <h1 className="text-3xl font-bold mb-8 text-center">Charts in Next.js with Tailwind CSS</h1> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <PieChart />
        </div>
        <div className="flex justify-center">
          <BarChart />
        </div>
        <div className="col-span-2 flex justify-center">
          <CombinedChart />
        </div>
      </div>
    </div>
          */}
         <div className="container mx-auto p-6 ml-72">
      <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
      
      {/* Step 1: Phone Number Form */}
      {!otpSent ? (
        <form onSubmit={handlePhoneNumberSubmit} className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Send OTP
          </button>
        </form>
      ) : (
        // Step 2: OTP Form
        <form onSubmit={handleVerifyOtp} className="mb-4">
          <label htmlFor="otp" className="block mb-2">Enter OTP</label>
          <input
            id="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <button
            type="submit"
            className={`mt-2 p-2 ${isVerifying ? 'bg-gray-500' : 'bg-green-500'} text-white rounded`}
            disabled={isVerifying}
          >
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}

      {/* Message Display */}
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
</>

  )
}

export default index