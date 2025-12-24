export async function POST(req) {
  const body = await req.text();

  const res = await fetch(process.env.SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:new URLSearchParams(body).toString(),
  });

  const data = await res.text();
  return new Response(data, {
    headers: { "Content-Type": "text/plain" },
  });
}
