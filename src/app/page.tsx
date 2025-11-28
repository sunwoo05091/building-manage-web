import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "/icons/notice_filled.svg",
      title: "민원 관리",
      description: "입주민 민원을 실시간으로 접수하고 처리 현황을 한눈에 확인하세요.",
    },
    {
      icon: "/icons/calendar_check_filled.svg",
      title: "출퇴근 관리",
      description: "담당자의 출퇴근을 간편하게 기록하고 월별 근무 현황을 조회하세요.",
    },
    {
      icon: "/icons/users_filled.svg",
      title: "입주민 관리",
      description: "건물 입주민 정보를 체계적으로 관리하고 소통하세요.",
    },
    {
      icon: "/icons/lightning_filled.svg",
      title: "공지사항",
      description: "중요한 공지를 빠르게 전달하고 모든 입주민과 공유하세요.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/whiteLogo.png"
              alt="엄지 로고"
              width={32}
              height={32}
              className="invert"
            />
            <span className="font-bold text-xl text-gray-900">엄지</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              주요 기능
            </Link>
            <Link href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">
              다운로드
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#0f1f33]">
          <Image
            src="/images/home.png"
            alt="건물 배경"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              내 손안의<br />
              건물 파트너,<br />
              <span className="text-blue-400">엄지</span> 입니다.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              건물 관리의 새로운 기준.<br />
              민원부터 출퇴근까지, 한 번에 해결하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <Image src="/images/appleSplash.png" alt="App Store" width={24} height={24} />
                App Store
              </a>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <Image src="/images/googleSplash.png" alt="Google Play" width={24} height={24} />
                Google Play
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] md:w-[320px]">
              <Image
                src="/images/webDesign/iMockup - iPhone 14.png"
                alt="엄지 앱 화면"
                width={320}
                height={650}
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              엄지와 함께라면 건물 관리가 쉬워집니다.<br />
              다양한 기능으로 효율적인 관리를 경험하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              앱 미리보기
            </h2>
            <p className="text-lg text-gray-600">
              직관적인 UI로 누구나 쉽게 사용할 수 있습니다.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
            {[
              "iMockup - iPhone 14.png",
              "iMockup - iPhone 14-8.png",
              "iMockup - iPhone 14-2.png",
              "iMockup - iPhone 14-7.png",
            ].map((img, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <Image
                  src={`/images/webDesign/${img}`}
                  alt={`앱 화면 ${index + 1}`}
                  width={240}
                  height={480}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            엄지와 함께 스마트한 건물 관리를 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Image src="/images/appleSplash.png" alt="App Store" width={28} height={28} />
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Image src="/images/googleSplash.png" alt="Google Play" width={28} height={28} />
              <div className="text-left">
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/images/whiteLogo.png"
                alt="엄지 로고"
                width={28}
                height={28}
              />
              <span className="font-bold text-lg text-white">엄지</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                이용약관
              </Link>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2025 엄지. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
