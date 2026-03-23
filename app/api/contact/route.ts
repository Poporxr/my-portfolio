import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  emailAddress: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),
  phoneNo: z.string().trim().min(1, "Phone number is required."),
  message: z.string().trim().min(1, "Message is required."),
  projectType: z.string().trim().optional(),
  budget: z.string().trim().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = contactSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          fieldErrors: parsedBody.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
        },
        { status: 500 }
      );
    }

    const { fullName, emailAddress, phoneNo, message, projectType, budget } =
      parsedBody.data;

    const resendResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New portfolio message from ${fullName}`,
      replyTo: emailAddress,
      text: [
        `Full name: ${fullName}`,
        `Email address: ${emailAddress}`,
        `Phone number: ${phoneNo}`,
        `Project type: ${projectType || "Not provided"}`,
        `Budget or timeline: ${budget || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (resendResponse.error) {
      return NextResponse.json(
        {
          error:
            resendResponse.error.message ||
            "Email delivery failed while sending your inquiry.",
        },
        { status: resendResponse.error.statusCode || 502 }
      );
    }

    return NextResponse.json({ success: true, id: resendResponse.data?.id });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}
