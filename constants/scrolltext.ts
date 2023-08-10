export type TEXTSTYPE = {
  id: string;
  text: string;
};

const TEXTS: TEXTSTYPE[] = ["LOREM", "LOREM", "LOREM", "LOREM", "LOREM"].map(
  (text) => ({
    id: crypto.randomUUID(),
    text,
  })
);

export { TEXTS };
