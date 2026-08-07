"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { useRef, useState } from "react"
import { FaCloudUploadAlt, FaFileAlt, FaTimes } from "react-icons/fa"

const MAX_RESUME_SIZE_MB = 5;
const ACCEPTED_RESUME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(80, "Name is too long"),
    sex: z.enum(["male", "female", "other"], {
        message: "Please select an option",
    }),
    department: z.string().min(1, "Please select a department"),
    number: z.string()
        .min(10, "Number must be at least 10 digits")
        .max(13, "Number is too long")
        .regex(/^[0-9]+$/, "Must be a valid number"),
    email: z.string().email("Enter a valid email address"),
    resume: z
        .custom<FileList>()
        .refine((files) => files?.length === 1, "Resume is required")
        .refine(
            (files) => files?.[0]?.size <= MAX_RESUME_SIZE_MB * 1024 * 1024,
            `File must be under ${MAX_RESUME_SIZE_MB}MB`
        )
        .refine(
            (files) => ACCEPTED_RESUME_TYPES.includes(files?.[0]?.type),
            "Only PDF or Word documents are accepted"
        ),
});

const departments = [
    { value: "doctors", label: "Doctors" },
    { value: "operations", label: "Operations" },
    { value: "reception", label: "Reception" },
    { value: "nursing", label: "Nursing" },
    { value: "maintenance", label: "Maintenance" },
    { value: "marketing", label: "Marketing" },
    { value: "information Technology", label: "I.T." },
    { value: "tpa", label: "TPA" },
    { value: "tele-caller", label: "TeleCaller" },
    { value: "other", label: "Other" },
];

export default function CareerForm() {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            sex: undefined,
            department: "",
            number: "",
            email: "",
            resume: undefined,
        }
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("sex", data.sex);
            formData.append("department", data.department);
            formData.append("number", data.number);
            formData.append("email", data.email);
            formData.append("resume", data.resume[0]);

            // Hits our own API route (Nodemailer + Gmail) instead of Formspree,
            // so the resume goes out as a real email attachment on any plan.
            const res = await fetch("/api/career-form", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result?.error || "Submission failed");
            }

            toast.success("Application submitted successfully!", {
                description: "We'll be in touch if there's a match.",
            });
            form.reset();
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            toast.error("Failed to submit the form. Please try again.");
        }
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full px-2 sm:px-3"
        >
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-3 md:gap-4">
                <div className="flex flex-col gap-1.5 flex-1 items-stretch w-full justify-center">
                    {/* Name Field */}
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div data-invalid={fieldState.invalid} className="w-full">
                                <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <Input
                                    {...field}
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="w-full text-gray-800 placeholder:text-neutral-500 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                    type="text"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && (
                                    <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                                )}
                            </div>
                        )}
                    />

                    {/* Sex Field */}
                    <Controller
                        name="sex"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div data-invalid={fieldState.invalid} className="w-full">
                                <label htmlFor="sex" className="block text-xs md:text-sm font-medium mb-1">
                                    Sex
                                </label>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger
                                        id="sex"
                                        className="w-full text-gray-800 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {fieldState.invalid && (
                                    <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                                )}
                            </div>
                        )}
                    />

                    {/* Phone Number Field */}
                    <Controller
                        name="number"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div data-invalid={fieldState.invalid} className="w-full">
                                <label htmlFor="number" className="block text-xs md:text-sm font-medium mb-1">
                                    Phone Number
                                </label>
                                <Input
                                    {...field}
                                    id="number"
                                    placeholder="Enter 10-digit phone number"
                                    className="w-full text-gray-800 placeholder:text-neutral-500 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                    type="number"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && (
                                    <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                                )}
                            </div>
                        )}
                    />

                    {/* Email Field */}
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div data-invalid={fieldState.invalid} className="w-full">
                                <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1">
                                    Email
                                </label>
                                <Input
                                    {...field}
                                    id="email"
                                    placeholder="Enter your email address"
                                    className="w-full text-gray-800 placeholder:text-neutral-500 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                    type="email"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && (
                                    <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                                )}
                            </div>
                        )}
                    />

                    {/* Department Field */}
                    <Controller
                        name="department"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div data-invalid={fieldState.invalid} className="w-full">
                                <label htmlFor="department" className="block text-xs md:text-sm font-medium mb-1">
                                    Department
                                </label>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger
                                        id="department"
                                        className="w-full text-gray-800 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <SelectValue placeholder="Select a department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.map((dept) => (
                                            <SelectItem key={dept.value} value={dept.value}>
                                                {dept.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {fieldState.invalid && (
                                    <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                                )}
                            </div>
                        )}
                    />
                </div>

                <div className="flex-1 w-full">
                    {/* Resume Upload Field — drag & drop */}
                    <Controller
                        name="resume"
                        control={form.control}
                        render={({ field: { onChange, value }, fieldState }) => {
                            const file: File | undefined = value?.[0];

                            const handleFiles = (files: FileList | null) => {
                                if (files && files.length > 0) {
                                    onChange(files);
                                }
                            };

                            return (
                                <div data-invalid={fieldState.invalid} className="w-full h-full flex flex-col">
                                    <label htmlFor="resume" className="block text-xs md:text-sm font-medium mb-1">
                                        Upload Resume
                                    </label>

                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => {
                                            e.preventDefault();
                                            setIsDragging(true);
                                        }}
                                        onDragLeave={() => setIsDragging(false)}
                                        onDrop={(e) => {
                                            e.preventDefault();
                                            setIsDragging(false);
                                            handleFiles(e.dataTransfer.files);
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        className={`flex-1 min-h-38 md:min-h-44 w-full rounded-md border-2 border-dashed cursor-pointer
                                            flex flex-col items-center justify-center gap-2 text-center px-4 py-6 transition-colors
                                            ${isDragging ? "border-primary bg-primary/5" : "border-primary/40 hover:border-primary/70"}
                                            ${fieldState.invalid ? "border-red-400" : ""}`}
                                    >
                                        <input
                                            ref={fileInputRef}
                                            id="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            onChange={(e) => handleFiles(e.target.files)}
                                        />

                                        {file ? (
                                            <>
                                                <FaFileAlt size={22} className="text-primary" />
                                                <p className="text-xs md:text-sm font-medium text-gray-800 break-all px-2">
                                                    {file.name}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onChange(undefined);
                                                        if (fileInputRef.current) fileInputRef.current.value = "";
                                                    }}
                                                    className="inline-flex items-center gap-1 text-xs text-red-500 hover:underline mt-1"
                                                >
                                                    <FaTimes size={10} /> Remove
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <FaCloudUploadAlt size={26} className="text-primary/70" />
                                                <p className="text-xs md:text-sm font-medium text-gray-800">
                                                    Drag & drop your resume, or click to browse
                                                </p>
                                                <p className="text-[11px] text-neutral-500">
                                                    PDF or Word, up to {MAX_RESUME_SIZE_MB}MB
                                                </p>
                                            </>
                                        )}
                                    </div>

                                    {fieldState.invalid && (
                                        <p className="text-xs text-red-500 mt-1">{fieldState.error?.message as string}</p>
                                    )}
                                </div>
                            );
                        }}
                    />
                </div>
            </div>

            <div className="pt-1">
                <Button
                    type="submit"
                    className="w-full h-10 md:h-11 text-xs md:text-sm"
                    size="default"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
            </div>
        </form>
    );
}