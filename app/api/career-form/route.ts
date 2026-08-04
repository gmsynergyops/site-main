import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Where all career applications should land.
const HR_EMAIL = "hrdsynergy1@gmail.com";

// Same limits the client already enforces — re-checked here because the
// client-side check can always be bypassed (devtools, direct API calls, etc).
const MAX_RESUME_SIZE_MB = 2;
const ACCEPTED_RESUME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get("name")?.toString() ?? "";
        const sex = formData.get("sex")?.toString() ?? "";
        const department = formData.get("department")?.toString() ?? "";
        const number = formData.get("number")?.toString() ?? "";
        const email = formData.get("email")?.toString() ?? "";
        const resume = formData.get("resume") as File | null;

        // Basic server-side validation (mirrors the zod schema on the client).
        if (!name || !sex || !department || !number || !email) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        if (!resume) {
            return NextResponse.json(
                { error: "Resume file is required." },
                { status: 400 }
            );
        }

        if (!ACCEPTED_RESUME_TYPES.includes(resume.type)) {
            return NextResponse.json(
                { error: "Only PDF or Word documents are accepted." },
                { status: 400 }
            );
        }

        if (resume.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
            return NextResponse.json(
                { error: `File must be under ${MAX_RESUME_SIZE_MB}MB.` },
                { status: 400 }
            );
        }

        const resumeBuffer = Buffer.from(await resume.arrayBuffer());

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password, not the account password
            },
        });

        await transporter.sendMail({
            from: `"Synergy Careers" <${process.env.GMAIL_USER}>`,
            to: HR_EMAIL,
            replyTo: email,
            subject: `New Career Application — ${name} (${department})`,
            html: `
                <h2>New Career Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Sex:</strong> ${sex}</p>
                <p><strong>Department:</strong> ${department}</p>
                <p><strong>Phone:</strong> ${number}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>Resume attached.</p>
            `,
            attachments: [
                {
                    filename: resume.name,
                    content: resumeBuffer,
                    contentType: resume.type,
                },
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Career form submission error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}