/* eslint-disable react-hooks/refs */
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
import { useMemo, useRef, useState } from "react"
import { FaCloudUploadAlt, FaFileAlt, FaTimes } from "react-icons/fa"
import { useTranslations } from "next-intl"

const MAX_RESUME_SIZE_MB = 5;
const ACCEPTED_RESUME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type FormValues = {
    name: string;
    sex: "male" | "female" | "other";
    department: string;
    number: string;
    email: string;
    resume: FileList;
};

export default function CareerForm() {
    const t = useTranslations("CareerForm");
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const formSchema = useMemo(() => z.object({
        name: z.string().min(3, t("validation.nameMin")).max(80, t("validation.nameMax")),
        sex: z.enum(["male", "female", "other"], {
            message: t("validation.sexRequired"),
        }),
        department: z.string().min(1, t("validation.deptRequired")),
        number: z.string()
            .min(10, t("validation.phoneMin"))
            .max(13, t("validation.phoneMax"))
            .regex(/^[0-9]+$/, t("validation.phoneInvalid")),
        email: z.string().email(t("validation.emailInvalid")),
        resume: z
            .custom<FileList>()
            .refine((files) => files?.length === 1, t("validation.resumeRequired"))
            .refine(
                (files) => files?.[0]?.size <= MAX_RESUME_SIZE_MB * 1024 * 1024,
                t("validation.resumeSize")
            )
            .refine(
                (files) => ACCEPTED_RESUME_TYPES.includes(files?.[0]?.type),
                t("validation.resumeType")
            ),
    }), [t]);

    const departments = useMemo(() => [
        { value: "doctors", label: t("departments.doctors") },
        { value: "operations", label: t("departments.operations") },
        { value: "reception", label: t("departments.reception") },
        { value: "nursing", label: t("departments.nursing") },
        { value: "maintenance", label: t("departments.maintenance") },
        { value: "marketing", label: t("departments.marketing") },
        { value: "information Technology", label: t("departments.it") },
        { value: "tpa", label: t("departments.tpa") },
        { value: "tele-caller", label: t("departments.teleCaller") },
        { value: "other", label: t("departments.other") },
    ], [t]);

    const form = useForm<FormValues>({
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

    const onSubmit = async (data: FormValues) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("sex", data.sex);
            formData.append("department", data.department);
            formData.append("number", data.number);
            formData.append("email", data.email);
            formData.append("resume", data.resume[0]);

            const res = await fetch("/api/career-form", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result?.error || "Submission failed");
            }

            toast.success(t("toast.success"), {
                description: t("toast.successDesc"),
            });
            form.reset();
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            toast.error(`${t("toast.error")} ${error}`);
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
                                    {t("fullName")}
                                </label>
                                <Input
                                    {...field}
                                    id="name"
                                    placeholder={t("namePlaceholder")}
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
                                    {t("sex")}
                                </label>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger
                                        id="sex"
                                        className="w-full text-gray-800 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <SelectValue placeholder={t("sexPlaceholder")} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">{t("sexOptions.male")}</SelectItem>
                                        <SelectItem value="female">{t("sexOptions.female")}</SelectItem>
                                        <SelectItem value="other">{t("sexOptions.other")}</SelectItem>
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
                                    {t("phone")}
                                </label>
                                <Input
                                    {...field}
                                    id="number"
                                    placeholder={t("phonePlaceholder")}
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
                                    {t("email")}
                                </label>
                                <Input
                                    {...field}
                                    id="email"
                                    placeholder={t("emailPlaceholder")}
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
                                    {t("department")}
                                </label>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger
                                        id="department"
                                        className="w-full text-gray-800 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <SelectValue placeholder={t("deptPlaceholder")} />
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
                                        {t("uploadResume")}
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
                                                    <FaTimes size={10} /> {t("remove")}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <FaCloudUploadAlt size={26} className="text-primary/70" />
                                                <p className="text-xs md:text-sm font-medium text-gray-800">
                                                    {t("dragDrop")}
                                                </p>
                                                <p className="text-[11px] text-neutral-500">
                                                    {t("fileHint")}
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
                    {form.formState.isSubmitting ? t("submitting") : t("submit")}
                </Button>
            </div>
        </form>
    );
}