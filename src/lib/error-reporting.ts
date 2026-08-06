/** Runtime error reporting without third-party editor telemetry. */

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  if (import.meta.env.DEV) {
    console.error("[runtime]", message, context, error);
  }
}
