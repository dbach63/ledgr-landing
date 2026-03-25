export const runtime = "edge";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface WaitlistBody {
  email: unknown;
  firstName?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  let body: WaitlistBody;

  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return Response.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const firstName =
    typeof body.firstName === "string" ? body.firstName.trim() : undefined;

  if (!email || !EMAIL_REGEX.test(email)) {
    return Response.json(
      { success: false, error: "Invalid email address." },
      { status: 400 }
    );
  }

  // ---------------------------------------------------------------------------
  // TODO: integrate a real email / CRM service here
  //
  // Option A — Resend (transactional email + audience management)
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.contacts.create({
  //     email,
  //     firstName,
  //     audienceId: process.env.RESEND_AUDIENCE_ID!,
  //   });
  //
  // Option B — ConvertKit (creator-focused email platform)
  //   await fetch(`https://api.convertkit.com/v3/forms/${process.env.CK_FORM_ID}/subscribe`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       api_key: process.env.CK_API_KEY,
  //       email,
  //       first_name: firstName,
  //     }),
  //   });
  //
  // Option C — Mailchimp (enterprise list management)
  //   const listId = process.env.MC_LIST_ID;
  //   const apiKey = process.env.MC_API_KEY!;
  //   const dc = apiKey.split("-")[1]; // datacenter prefix, e.g. "us21"
  //   await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
  //     },
  //     body: JSON.stringify({
  //       email_address: email,
  //       status: "subscribed",
  //       merge_fields: { FNAME: firstName ?? "" },
  //     }),
  //   });
  //
  // Required env vars per option (add to .env.local and Cloudflare Pages dashboard):
  //   Resend:     RESEND_API_KEY, RESEND_AUDIENCE_ID
  //   ConvertKit: CK_API_KEY, CK_FORM_ID
  //   Mailchimp:  MC_API_KEY, MC_LIST_ID
  // ---------------------------------------------------------------------------

  console.log("[waitlist] new submission", {
    email,
    firstName: firstName ?? "(not provided)",
    timestamp: new Date().toISOString(),
  });

  return Response.json(
    { success: true, message: "You're on the list!" },
    { status: 200 }
  );
}
