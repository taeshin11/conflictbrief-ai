export async function postToSheets(email: string, source: string, userAgent: string): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("GOOGLE_SHEETS_WEBHOOK_URL not set — skipping data collection");
    return false;
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source, userAgent }),
  });

  if (!res.ok) return false;
  const json = await res.json();
  return json.success === true;
}
