import { describe, expect, it, vi } from "vitest";
import { logger } from "./logger";

describe("logger", () => {
  it("writes structured JSON", () => {
    const spy = vi.spyOn(console, "info").mockImplementation(() => undefined);
    logger.info("foundation.ready", { requestId: "test-request" });
    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0][0]).toContain('"message":"foundation.ready"');
    spy.mockRestore();
  });
});
