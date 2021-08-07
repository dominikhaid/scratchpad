import he from "he";

export function praseHtmlSpecialChars(e) {
  if (e === undefined) e = " ";
  let res = he.decode(e);
  return res;
}

export function normalizeHTMLtoText(e) {
  if (e === undefined) e = " ";
  e = e.replace(
    /<?!(h\d|a|div|p|span|b|sub|sup|em|strong).*?>|<\/?(h\d|div|a|p|span|b|sub|sup|em|strong).*?>|(\[Weiterlesen\])/gm,
    ""
  );
  let res = he.decode(e);
  return res;
}
export const returnHTML = (element) => {
  return { __html: element };
};
