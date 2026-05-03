import Image from "next/image";

export default function FeaturesBanner() {
  return (
    <section className="relative pb-24">
      <div className="relative">
        <Image
          src="/Features-BG.jpg"
          alt=""
          width={2400}
          height={1600}
          className="w-full h-auto block"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
