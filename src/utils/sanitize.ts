// src/utils/sanitize.ts

export function sanitizeData<T extends Record<string, any>>(data: T): T {
  const cleaned: Record<string, any> = {};

  for (const key in data) {
    const value = data[key];

    // ---- Numbers ----
    if (typeof value === "number") {
      cleaned[key] = isNaN(value) ? 0 : value;
      continue;
    }

    // ---- Strings ----
    if (typeof value === "string") {
      cleaned[key] = value ?? "";
      continue;
    }

    // ---- Booleans ----
    if (typeof value === "boolean") {
      cleaned[key] = value ?? false;
      continue;
    }

    // ---- Arrays ----
    if (Array.isArray(value)) {
      cleaned[key] = value ?? [];
      continue;
    }

    // ---- Null / Undefined ----
    if (value === undefined || value === null) {
      cleaned[key] = "";
      continue;
    }

    // ---- Fallback ----
    cleaned[key] = value;
  }

  return cleaned as T;
}
