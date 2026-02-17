import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, name, email, contextQuestion, contextAnswer, message } =
      body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Gold Health <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `[Gold Health] ${topic}`,
      html: `
        <h2>${topic}</h2>
        <p><strong>From:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${contextQuestion ? `<p><strong>${contextQuestion}</strong><br/>${contextAnswer || "Not provided"}</p>` : ""}
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
