// components/FloatingBarWrapper.tsx
"use client";
import { useActions } from "@/data";
import { FloatingActionBar } from "./FloatingActionBar";

type Props = {
    isOnFooter?: boolean;
    isOnHomePage?: boolean;
};

export const FloatingBarWrapper = ({ isOnFooter, isOnHomePage }: Props) => {
    const actions = useActions();
    return <FloatingActionBar isOnFooter={isOnFooter} isOnHomePage={isOnHomePage} items={actions} />;
};
