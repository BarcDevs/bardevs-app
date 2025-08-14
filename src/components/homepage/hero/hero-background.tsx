const HeroBackground = ({}) => (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9f7f3] to-white"/>
        <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#77c6b0]/30 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#3e2f34]/10 blur-3xl"/>
        <div className="absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(0,0,0,0.02))]"/>
    </div>
)

export default HeroBackground
