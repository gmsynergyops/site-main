import React from 'react';

const UnderMaintenance = () => {
  return (
    // Clean wrapper inheriting the global website background and text colors
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-6 font-sans">
        
        {/* Accent glows matching your brand colors (from your original snippet) */}
        <div className="absolute rounded-full blur-[100px] bg-synergy-blue h-56 w-56 bottom-20 right-0 scale-[3] opacity-40 pointer-events-none" />
        <div className="absolute rounded-full blur-[90px] bg-synergy-pink h-42 w-42 bottom-10/12 left-30 scale-[2] opacity-30 pointer-events-none" />

        {/* Content Card with backdrop blur and subtle borders instead of an explicit background color */}
        <div className="relative z-10 bg-background max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center backdrop-blur-xl p-8 lg:p-16 rounded-3xl border border-current/10 shadow-2xl">
            
            {/* Left Column: Warm & Friendly Copy Text */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-pink-500 font-bold tracking-widest uppercase text-xs mb-3">
                        Synergy Super Specialty Hospital & Cancer Institute
                    </h2>
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                        Pardon Our Dust! <br />
                        <span className="text-blue-500">
                            We’re Upgrading Our Website.
                        </span>
                    </h1>
                    <p className="text-lg opacity-90 leading-relaxed mb-2">
                        While this page is getting a little TLC, our medical team is here and ready to care for you. 
                    </p>
                    <p className="opacity-70 leading-relaxed">
                        We are currently performing routine maintenance to make our online experience smoother. Don't worry, this doesn't affect our hospital operations—we are fully open and available to assist you.
                    </p>
                </div>

                {/* Get In Touch Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider opacity-60">
                        Get In Touch With Us:
                    </h3>

                    {/* Call Us Box */}
                    <div className="p-5 rounded-2xl border border-current/10 flex items-start gap-4 transition-transform hover:scale-[1.02]">
                        <div className="text-blue-500 shrink-0 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Call Us</h4>
                            <p className="opacity-70 text-sm mb-3">For appointments, billing, or general queries, please reach out to our patient support line:</p>
                            <a href="tel:+917234006595" className="text-3xl font-bold text-blue-500 hover:underline block tracking-tight">
                                +91 7234006595
                            </a>
                        </div>
                    </div>

                    {/* Visit Us Box */}
                    <div className="p-5 rounded-2xl border border-current/10 flex items-start gap-4">
                        <div className="text-pink-500 shrink-0 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Visit Us</h4>
                            <p className="opacity-70 text-sm">
                                Our main facility is open 24/7. Stop by the front desk for in-person assistance at any time.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-sm italic opacity-50 animate-pulse">
                    We’ll be back online shortly!
                </p>
            </div>

            {/* Right Column: Illustration */}
            <div className="flex justify-center items-center relative">
                <img 
                    src="./assets/maintenance.png" 
                    alt="Our medical team is ready to care for you" 
                    className="w-full max-w-md lg:max-w-lg object-contain relative z-10 drop-shadow-xl"
                />
            </div>

        </div>
    </div>
  );
}

export default UnderMaintenance;