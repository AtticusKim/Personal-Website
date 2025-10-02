type Props = {
  className?: string
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md" style={{ height: '60px' }}>
      <div className="container h-full flex justify-between items-center">
        <a href="/" className="text-base font-geist font-medium text-[#1a1a1a] hover:bg-[#CD7F32]/20 px-3 py-2 rounded transition-all duration-200">
          Atticus
        </a>

        <nav className="flex items-center gap-8">
          <a
            href="/#work"
            className="text-sm font-geist font-medium text-[#1a1a1a] hover:bg-[#CD7F32]/20 px-3 py-2 rounded transition-all duration-200"
          >
            Work
          </a>
          <a
            href="/fun"
            className="text-sm font-geist font-medium text-[#1a1a1a] hover:bg-[#CD7F32]/20 px-3 py-2 rounded transition-all duration-200"
          >
            Fun!
          </a>
          <a
            href="/about"
            className="text-sm font-geist font-medium text-[#1a1a1a] hover:bg-[#CD7F32]/20 px-3 py-2 rounded transition-all duration-200"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  )
}