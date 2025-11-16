export default function PortfolioExpertise(): React.ReactNode {
  return (
    <section className="bg-muted dark:bg-muted-dark px- mx-auto w-full px-6 py-24">
      <div className="">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Additional Expertise
          </h2>
          <p className="text-text-color/70 mx-auto mt-3 max-w-2xl">
            Bridging the gap between technology and traditional agriculture,
            complemented by essential interpersonal abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-primary mb-6 flex items-center gap-3 text-2xl font-semibold">
              <span className="material-symbols-outlined">eco</span>Agricultural
              Expertise
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
          </div>
          <div>
            <h3 className="text-primary mb-6 flex items-center gap-3 text-2xl font-semibold">
              <span className="material-symbols-outlined">groups</span>Soft
              Skills
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-background/50 border-border-color flex items-center gap-3 rounded-lg border p-4">
                <span>Creative &amp; Critical Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
