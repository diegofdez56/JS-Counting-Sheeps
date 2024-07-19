export function countSheeps(list) {
  const count = list.filter(Boolean).length;
  return count > 0
    ? `There are ${count} sheep in total`
    : "UPS!!! Wolfs eaten Sheeps";
}
