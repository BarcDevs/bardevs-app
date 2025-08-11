export const CODE =
    `export default function Hero() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-[#3e2f34]">
        ${'{t(\'hero_title\')}'}
      </h1>
      <p className="text-muted-foreground">
        ${'{t(\'hero_subtitle\')}'}
      </p>
      <button className="bg-[#77c6b0] text-[#3e2f34] px-4 py-2 rounded">
        ${'{t(\'hero_cta\')}'}
      </button>
    </section>
  )
}`
