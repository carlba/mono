/**
 * Time: O(n)
 * Space: O(n)
 */
export const allUnique = (items: string[]) => {
  const uniqueItems = new Set(items);

  return uniqueItems.size === items.length;
};
