import g1 from "@/assets/gallery-engineers.jpg";
import g2 from "@/assets/gallery-switchgear.jpg";
import g3 from "@/assets/gallery-streetlights.jpg";
import g4 from "@/assets/gallery-hvac.jpg";
import g5 from "@/assets/gallery-mechanical.jpg";
import g6 from "@/assets/gallery-cables.jpg";
import sub from "@/assets/hero-substation.jpg";
import gov from "@/assets/project-government.jpg";

const images = [
  { src: g1, label: "مهندسون" },
  { src: g2, label: "لوحات" },
  { src: g3, label: "إنارة" },
  { src: g4, label: "تكييف" },
  { src: g5, label: "ميكانيكا" },
  { src: g6, label: "كابلات" },
  { src: sub, label: "محطات" },
  { src: gov, label: "حكومي" },
];

export function CircularGallery() {
  const count = images.length;
  const radius = 240; // px
  return (
    <div className="circular-paused relative mx-auto hidden md:block" style={{ width: 640, height: 640 }}>
      {/* Decorative ring */}
      <div className="absolute inset-12 rounded-full border border-dashed border-gold/30" />
      <div className="absolute inset-24 rounded-full border border-gold/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center ring-[10px] ring-background z-10">
        <div className="text-center text-navy-deep px-2">
          <div className="font-brand font-bold text-[26px] leading-tight">المتحدة</div>
          <div className="font-brand font-bold text-[26px] leading-tight">اليكتريك</div>
          <div className="mt-1 text-[9px] font-bold tracking-[0.25em]">UNITED ELECTRIC</div>
        </div>
      </div>

      <div className="absolute inset-0 circular-rotate">
        {images.map((img, i) => {
          const angle = (i / count) * 360;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 circular-rotate-counter">
                <div className="group relative h-28 w-28 lg:h-32 lg:w-32 rounded-2xl overflow-hidden border-2 border-gold/40 shadow-elegant hover:scale-110 hover:border-gold transition-all duration-300 bg-card">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-2">
                    <span className="text-[11px] font-bold text-gold">{img.label}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CircularGalleryMobile() {
  return (
    <div className="md:hidden -mx-6 overflow-hidden">
      <div className="flex gap-3 overflow-x-auto px-6 snap-x snap-mandatory pb-4">
        {images.map((img, i) => (
          <div key={i} className="snap-center shrink-0 w-56 h-56 rounded-2xl overflow-hidden border border-gold/30 shadow-elegant relative">
            <img src={img.src} alt={img.label} loading="lazy" width={400} height={400} className="h-full w-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep to-transparent p-3">
              <span className="text-xs font-bold text-gold">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
