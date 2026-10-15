const { Client } = require("pg");

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres.ergehbkqrrtvgkurwnqg:Khanhancoi1205@aws-0-ap-south-1.pooler.supabase.com:6543/postgres";

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const sql = `
CREATE TABLE IF NOT EXISTS public.honors_cards (
  id TEXT PRIMARY KEY,
  slot_id TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT '',
  subtitle TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  display_order INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.honors_cards ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Honors Cards" ON public.honors_cards;
CREATE POLICY "Public Read Honors Cards" ON public.honors_cards FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Upsert Honors Cards" ON public.honors_cards;
CREATE POLICY "Public Upsert Honors Cards" ON public.honors_cards FOR ALL USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS public.honors_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.honors_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Honors Settings" ON public.honors_settings;
CREATE POLICY "Public Read Honors Settings" ON public.honors_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Upsert Honors Settings" ON public.honors_settings;
CREATE POLICY "Public Upsert Honors Settings" ON public.honors_settings FOR ALL USING (true) WITH CHECK (true);
`;

async function main() {
  try {
    await client.connect();
    console.log("Connected to Supabase Postgres via pooler!");
    await client.query(sql);
    console.log("honors_cards and honors_settings tables created successfully with RLS!");

    // Check table info
    const tables = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public';"
    );
    console.log("Public tables:", tables.rows.map((r) => r.table_name));

    await client.end();
  } catch (err) {
    console.error("Migration error:", err);
    process.exit(1);
  }
}

main();
