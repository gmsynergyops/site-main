"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm as useFormspreeForm } from '@formspree/react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(80, "Name is too long"),
    number: z.string()
        .min(10, "Number must be at least 10 digits")
        .max(13, "Number is too long")
        .regex(/^[0-9]+$/, "Must be a valid number")
});

export default function RequestCallBackForm() {
    const [state, handleFormspreeSubmit] = useFormspreeForm("mwpoaewv");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            number: ""
        }
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await handleFormspreeSubmit(data);
            if(state.succeeded){
                toast.success("Callback request submitted successfully!", {
                    description: "We'll contact you shortly.",
                });
                form.reset();
            }
        } catch (error) {
            toast.error("Failed to submit the form. Please try again.");
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
                                Full Name
                            </label>
                            <Input
                                {...field}
                                id="name"
                                placeholder="Enter your full name"
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
                                Phone Number
                            </label>
                            <Input
                                {...field}
                                id="number"
                                placeholder="Enter 10-digit phone number"
                                className="text-gray-800 placeholder:text-neutral-500 font-medium h-10 md:h-11 text-xs md:text-sm border-primary"
                                type="tel"
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
                    {state.submitting ? "Submitting..." : "Request Callback"}
                </Button>
            </div>
        </form>
    );
}
