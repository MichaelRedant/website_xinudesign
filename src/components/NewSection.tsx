import GlassPane from "./GlassPane";

export default function NewSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.4),transparent),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.4),transparent),radial-gradient(circle_at_60%_80%,rgba(236,72,153,0.4),transparent)] opacity-70 blur-3xl" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-white dark:to-black" />
      <div className="relative max-w-3xl px-4 mx-auto">
        <GlassPane className="p-8 text-center">
          <h2 className="text-3xl font-semibold">Nieuw bij Xinudesign</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Introductie van <span className="font-medium">Vibe Coding</span>:
            een speelse maar strategische aanpak waarmee we met Xinudesign
            praktisch alles kunnen maken — the sky is the limit. Deze eigen
            website werd in slechts enkele dagen gebouwd via deze methode.
          </p>
          <h3 className="mt-8 text-2xl font-semibold">Windows and modals</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Windows adopt rounder corners to fit controls and navigation
            elements. In iPadOS, apps show window controls en support continuous
            window resizing. Instead of transitioning between specific preset
            sizes, windows resize fluidly down to a minimum size.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Support arbitrary window sizes. Allow people to resize their window
            to the width and height that works for them, and adjust your content
            accordingly.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Use split views to allow fluid resizing of columns. To support
            continuous window resizing, split views automatically reflow content
            for every size using beautiful, fluid transitions. Make sure to use
            standard system APIs for split views to get these animations with
            minimal code.
          </p>
        </GlassPane>
      </div>
    </section>
  );
}
