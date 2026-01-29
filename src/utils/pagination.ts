export function getPagesArray(
  totalItems: number,
  itemsPerPage: number,
): number[] {
  if (itemsPerPage <= 0) {
    throw new Error("itemsPerPage должен быть больше 0");
  }

  if (totalItems <= 0) return [];

  const count = Math.ceil(totalItems / itemsPerPage);
  return Array.from({ length: count }, (_, index) => index + 1);
}
