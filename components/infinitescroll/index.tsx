import { TEXTSTYPE } from "@/constants/scrolltext";

interface HorizontalScrollTextProps {
  texts: TEXTSTYPE[];
  speed: number;
}

const HorizontalScrollText: React.FC<HorizontalScrollTextProps> = ({
  texts,
  speed,
}) => {
  return (
    <div className="loaderwrapper overflow-hidden flex py-2">
      <section
        className="flex"
        style={{ "--speed": `${speed}ms` } as React.CSSProperties}
      >
        {texts.map(({ id, text }) => (
          <div className="px-10" key={id}>
            {text}
          </div>
        ))}
      </section>
      <section
        className="flex"
        style={{ "--speed": `${speed}ms` } as React.CSSProperties}
      >
        {texts.map(({ id, text }) => (
          <div className="px-10" key={id}>
            {text}
          </div>
        ))}
      </section>
      <section
        className="flex"
        style={{ "--speed": `${speed}ms` } as React.CSSProperties}
      >
        {texts.map(({ id, text }) => (
          <div className="px-10" key={id}>
            {text}
          </div>
        ))}
      </section>
    </div>
  );
};

export default HorizontalScrollText;
