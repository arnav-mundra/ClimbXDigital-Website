import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border border-white/10 md:h-[500px] md:w-[500px]">
              <Image 
                src="/office.png" 
                alt="ClimbX Digital" 
                fill 
                className="object-cover opacity-80" 
              />
            </div>
            
            <div className="absolute -bottom-10 right-0 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[#1A1A1A] shadow-2xl md:-right-4 md:bottom-10 border border-white/5">
              <h3 className="mb-4 text-xl font-bold lowercase text-white">follow us</h3>
              <div className="flex gap-4 text-white/70">
                <a href="#" className="hover:text-[#F5A623]">IG</a>
                <a href="#" className="hover:text-[#F5A623]">FB</a>
                <a href="#" className="hover:text-[#F5A623]">IN</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-6xl font-black lowercase text-white">get in touch</h1>
            <p className="mb-12 text-lg text-white/70 lowercase">take the first step and get in touch with us today</p>
            
            <form className="flex w-full max-w-lg flex-col gap-8">
              <div>
                <input 
                  type="text" 
                  placeholder="your name" 
                  className="w-full border-b border-white/30 bg-transparent py-3 text-white placeholder-white/40 focus:border-[#F5A623] focus:outline-none"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="w-full border-b border-white/30 bg-transparent py-3 text-white placeholder-white/40 focus:border-[#F5A623] focus:outline-none"
                />
              </div>
              <div>
                <textarea 
                  placeholder="your message" 
                  rows={4}
                  className="w-full resize-none border-b border-white/30 bg-transparent py-3 text-white placeholder-white/40 focus:border-[#F5A623] focus:outline-none"
                ></textarea>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button 
                  type="button" 
                  className="rounded-full border border-white px-8 py-3 font-semibold lowercase transition-colors hover:bg-white hover:text-black"
                >
                  submit
                </button>
              </div>
            </form>

            <div className="mt-16 border-t border-white/10 pt-8">
              <h2 className="text-3xl font-bold lowercase text-transparent" style={{ WebkitTextStroke: "1px white" }}>nagpur</h2>
              <p className="mt-2 flex items-center gap-2 text-lg font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]"></span>
                Maharashtra
              </p>
              <div className="mt-4 space-y-1 text-white/70">
                <p>+91 87671 98554</p>
                <p>climbxdigital@gmail.com</p>
                <p>Nagpur, Maharashtra 440001</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
