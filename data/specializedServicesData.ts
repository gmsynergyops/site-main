import { useTranslations } from "next-intl";
import {
  Activity,
  BedDouble,
  HeartPulse,
  PersonStanding,
  Scissors,
  ShieldCheck,
  Siren,
  Syringe,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceKey = "ICU" | "OT" | "PHYSIOTHERAPY";

export type StatItem = { value: string; label: string };
export type ChecklistItem = { kind: "line"; text: string } | { kind: "card"; title: string; desc: string };
export type Block = { title: string; icon: LucideIcon; type: "check" | "tag"; items: string[] };

export type Service = {
    label: string;
    shortLabel: string;
    title: string;
    subtitle: string;
    description: string;
    secondaryDescription: string;
    icon: LucideIcon;
    stats: StatItem[];
    servicesTitle: string;
    serviceItems: ChecklistItem[];
    blocks: Block[];
    whyTitle: string;
    why: string[];
    commitment?: string;
    images: string[];
};

export const serviceKeys: ServiceKey[] = ["ICU", "OT", "PHYSIOTHERAPY"];

const line = (text: string): ChecklistItem => ({ kind: "line", text });

export const useSpecializedServicesData = (): Record<ServiceKey, Service> => {
    const t = useTranslations("specializedServicesPage");

    return {
        ICU: {
            label: t("services.ICU.label"),
            shortLabel: t("services.ICU.shortLabel"),
            title: t("services.ICU.title"),
            subtitle: t("services.ICU.subtitle"),
            description: t("services.ICU.description"),
            secondaryDescription: t("services.ICU.secondaryDescription"),
            icon: HeartPulse,
            stats: [
                { value: t("services.ICU.stats.0.value"), label: t("services.ICU.stats.0.label") },
                { value: t("services.ICU.stats.1.value"), label: t("services.ICU.stats.1.label") },
                { value: t("services.ICU.stats.2.value"), label: t("services.ICU.stats.2.label") },
            ],
            servicesTitle: t("services.ICU.servicesTitle"),
            serviceItems: (t.raw("services.ICU.serviceItems") as string[]).map(line),
            blocks: [
                {
                    title: t("services.ICU.blocks.0.title"),
                    icon: Siren,
                    type: "tag",
                    items: t.raw("services.ICU.blocks.0.items") as string[],
                },
                {
                    title: t("services.ICU.blocks.1.title"),
                    icon: BedDouble,
                    type: "check",
                    items: t.raw("services.ICU.blocks.1.items") as string[],
                },
            ],
            whyTitle: t("services.ICU.whyTitle"),
            why: t.raw("services.ICU.why") as string[],
            commitment: t("services.ICU.commitment"),
            images: ["/specializations/icu/1.jpeg", "/specializations/icu/2.jpeg", "/specializations/icu/3.jpeg"],
        },
        OT: {
            label: t("services.OT.label"),
            shortLabel: t("services.OT.shortLabel"),
            title: t("services.OT.title"),
            subtitle: t("services.OT.subtitle"),
            description: t("services.OT.description"),
            secondaryDescription: t("services.OT.secondaryDescription"),
            icon: Syringe,
            stats: [
                { value: t("services.OT.stats.0.value"), label: t("services.OT.stats.0.label") },
                { value: t("services.OT.stats.1.value"), label: t("services.OT.stats.1.label") },
                { value: t("services.OT.stats.2.value"), label: t("services.OT.stats.2.label") },
                { value: t("services.OT.stats.3.value"), label: t("services.OT.stats.3.label") },
            ],
            servicesTitle: t("services.OT.servicesTitle"),
            serviceItems: [
                {
                    kind: "card",
                    title: t("services.OT.serviceItems.0.title"),
                    desc: t("services.OT.serviceItems.0.desc"),
                },
                {
                    kind: "card",
                    title: t("services.OT.serviceItems.1.title"),
                    desc: t("services.OT.serviceItems.1.desc"),
                },
                {
                    kind: "card",
                    title: t("services.OT.serviceItems.2.title"),
                    desc: t("services.OT.serviceItems.2.desc"),
                },
            ],
            blocks: [
                {
                    title: t("services.OT.blocks.0.title"),
                    icon: Activity,
                    type: "check",
                    items: t.raw("services.OT.blocks.0.items") as string[],
                },
                {
                    title: t("services.OT.blocks.1.title"),
                    icon: Scissors,
                    type: "tag",
                    items: t.raw("services.OT.blocks.1.items") as string[],
                },
                {
                    title: t("services.OT.blocks.2.title"),
                    icon: ShieldCheck,
                    type: "check",
                    items: t.raw("services.OT.blocks.2.items") as string[],
                },
                {
                    title: t("services.OT.blocks.3.title"),
                    icon: Users,
                    type: "check",
                    items: t.raw("services.OT.blocks.3.items") as string[],
                },
            ],
            whyTitle: t("services.OT.whyTitle"),
            why: t.raw("services.OT.why") as string[],
            images: ["/specializations/ot/1.jpeg", "/specializations/ot/2.jpeg", "/specializations/ot/3.jpeg"],
        },
        PHYSIOTHERAPY: {
            label: t("services.PHYSIOTHERAPY.label"),
            shortLabel: t("services.PHYSIOTHERAPY.shortLabel"),
            title: t("services.PHYSIOTHERAPY.title"),
            subtitle: t("services.PHYSIOTHERAPY.subtitle"),
            description: t("services.PHYSIOTHERAPY.description"),
            secondaryDescription: t("services.PHYSIOTHERAPY.secondaryDescription"),
            icon: PersonStanding,
            stats: [
                { value: t("services.PHYSIOTHERAPY.stats.0.value"), label: t("services.PHYSIOTHERAPY.stats.0.label") },
                { value: t("services.PHYSIOTHERAPY.stats.1.value"), label: t("services.PHYSIOTHERAPY.stats.1.label") },
                { value: t("services.PHYSIOTHERAPY.stats.2.value"), label: t("services.PHYSIOTHERAPY.stats.2.label") },
            ],
            servicesTitle: t("services.PHYSIOTHERAPY.servicesTitle"),
            serviceItems: (t.raw("services.PHYSIOTHERAPY.serviceItems") as string[]).map(line),
            blocks: [
                {
                    title: t("services.PHYSIOTHERAPY.blocks.0.title"),
                    icon: Activity,
                    type: "check",
                    items: t.raw("services.PHYSIOTHERAPY.blocks.0.items") as string[],
                },
            ],
            whyTitle: t("services.PHYSIOTHERAPY.whyTitle"),
            why: t.raw("services.PHYSIOTHERAPY.why") as string[],
            images: ["/specializations/physio/1.jpeg", "/specializations/physio/2.jpeg", "/specializations/physio/3.jpeg"],
        },
    };
};
