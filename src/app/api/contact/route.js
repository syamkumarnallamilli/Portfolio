export async function POST(req) {
  const body = await req.text();

  const res = await fetch(process.env.NEXT_PUBLIC_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.text();
  return new Response(data, {
    headers: { "Content-Type": "application/json" },
  });
}
