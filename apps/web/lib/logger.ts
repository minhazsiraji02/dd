type LogContext = Record<string, unknown>;

function write(level: "info" | "warn" | "error", message: string, context: LogContext = {}) {
  const entry = { timestamp: new Date().toISOString(), level, message, context };
  if (level === "error") return console.error(JSON.stringify(entry));
  if (level === "warn") return console.warn(JSON.stringify(entry));
  return console.info(JSON.stringify(entry));
}

export const logger = {
  info: (message: string, context?: LogContext) => write("info", message, context),
  warn: (message: string, context?: LogContext) => write("warn", message, context),
  error: (message: string, context?: LogContext) => write("error", message, context)
};
