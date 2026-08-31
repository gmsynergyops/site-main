"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm as useFormspreeForm } from '@formspree/react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { useEffect, useMemo } from "react"
import { useTranslations } from "next-intl"

export default function RequestCallBackForm() {
    const t = useTranslations("footer.requestCallback");
    const [state, handleFormspreeSubmit] = useFormspreeForm("mwpoaewv");

    const formSchema = useMemo(() => z.object({
        name: z.string().min(3, t("validation.nameMin")).max(80, t("validation.nameMax")),
        number: z.string()
            .min(10, t("validation.phoneMin"))
            .max(13, t("validation.phoneMax"))
            .regex(/^[0-9]+$/, t("validation.phoneInvalid"))
    }), [t]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            number: ""
        }
    });

    useEffect(() => {
        if (state.succeeded) {
            toast.success(t("toast.success"), {
                description: t("toast.successDesc"),
            });
            form.reset();
        }
    }, [state.succeeded, t, form]);

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await handleFormspreeSubmit(data);
        } catch (error) {
            toast.error(`${t("toast.error")} ${error}`);
        }
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full px-2 sm:px-3"
        >
            <div className="grid grid-cols-1 gap-3 md:gap-4">
                {/* Name Field */}
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <div data-invalid={fieldState.invalid}>
                            <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1">
                                {t("fullName")}
                            </label>
                            <Input
                                {...field}
                                id="name"
                                placeholder={t("namePlaceholder")}
                                className="text-gray-800 placeholder:text-neutral-500 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                type="text"
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && (
                                <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                            )}
                        </div>
                    )}
                />

                {/* Number Field */}
                <Controller
                    name="number"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <div data-invalid={fieldState.invalid}>
                            <label htmlFor="number" className="block text-xs md:text-sm font-medium mb-1">
                                {t("phone")}
                            </label>
                            <Input
                                {...field}
                                id="number"
                                placeholder={t("phonePlaceholder")}
                                className="text-gray-800 placeholder:text-neutral-500 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                type="number"
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && (
                                <p className="text-xs text-red-500 mt-1">{fieldState.error?.message}</p>
                            )}
                        </div>
                    )}
                />
            </div>

            <div className="pt-1">
                <Button
                    type="submit"
                    className="w-full h-10 md:h-11 text-xs md:text-sm"
                    size="default"
                    disabled={state.submitting}
                >
                    {state.submitting ? t("submitting") : t("submit")}
                </Button>
            </div>
        </form>
    );
}
