export interface StringBuilder {
  append: (value: string) => StringBuilder;
  appendLine: (value: string) => StringBuilder;
  clear: () => StringBuilder;
  toString: () => string;
}

export const createStringBuilder = (): StringBuilder => {
  let strings: string[] = [];

  const append = (value: string): StringBuilder => {
    strings.push(value);
    return builder;
  };

  const appendLine = (value: string): StringBuilder => {
    strings.push(value + "\n");
    return builder;
  };

  const clear = (): StringBuilder => {
    strings = [];
    return builder;
  };

  const toString = (): string => {
    return strings.join("");
  };

  const builder: StringBuilder = {
    append,
    appendLine,
    clear,
    toString,
  };

  return builder;
};
