export const SUPPORTED_TYPES = ['en', 'el'] as const;
export const AVAILABLE_CITIES = ["paris", "london", "brussels", "tokyo", "new-york", "sydney"] as const;

export type SupportedLanguage = typeof SUPPORTED_TYPES[number];
export type Cities = typeof AVAILABLE_CITIES[number];