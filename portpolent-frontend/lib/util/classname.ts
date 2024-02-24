export type Classname = string | { [key: string]: boolean } | undefined;

// const test: Classname[] = [
//   'test',
//   { 'hi zz': true, 'abc': false }
// ]

export const cn = (names: Classname[]) => {
  return names
    .filter((it) => it)
    .map((n) => {
      if (typeof n == "string") {
        return n;
      } else {
        return Object.keys(n!!)
          .map((o) => {
            if (n!![o]) return o;
          })
          .filter((it) => it)
          .join(" ");
      }
    })
    .filter((it) => it)
    .join(" ");
};
