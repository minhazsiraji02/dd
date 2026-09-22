import { describe, expect, it } from "vitest";
import { getSupabasePublicConfig } from "./env";

describe("getSupabasePublicConfig", () => {
  it("returns the public Supabase configuration", () => {
    expect(
      getSupabasePublicConfig({
        NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "public-key"
      })
    ).toEqual({
      url: "https://example.supabase.co",
      anonKey: "public-key"
    });
  });

  it("fails closed when configuration is missing", () => {
    expect(() => getSupabasePublicConfig({})).toThrow(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  });
});
