// In-memory visitor counter (resets on cold start — fine for free tier)
let totalCount = 0;
let dailyCounts: Record<string, number> = {};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function incrementVisitor(): { today: number; total: number } {
  const key = todayKey();
  totalCount++;
  dailyCounts[key] = (dailyCounts[key] || 0) + 1;

  // Clean up old days (keep only last 7)
  const keys = Object.keys(dailyCounts).sort();
  while (keys.length > 7) {
    const old = keys.shift()!;
    delete dailyCounts[old];
  }

  return { today: dailyCounts[key], total: totalCount };
}
