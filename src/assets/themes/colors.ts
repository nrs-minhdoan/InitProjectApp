export const Colors = {};

export function withOpacity(color: string, opacity: number): string {
  if ((__DEV__ && color.length !== 7) || opacity < 0 || opacity > 1) {
    return color;
  }
  const opacityToString = Math.round(
    Math.min(Math.max(opacity || 1, 0), 1) * 255,
  );
  return color + opacityToString.toString(16).toUpperCase();
}
