// components/leadership-pages/Dr-Alok-Tiwari.tsx
"use client";

import { useAlokLeadershipData } from "@/data/leadership-data";
import LeadershipPage from "../Modules/discover-synergy/leadership/LeadershipMessagePage";

export default function DrAlokTiwariPage() {
    const data = useAlokLeadershipData();
    return <LeadershipPage {...data} />;
}
