// components/leadership-pages/Dr-Anjali-Jain.tsx
"use client";

import { useAnjaliLeadershipData } from "@/data/leadership-data";
import LeadershipPage from "../Modules/discover-synergy/leadership/LeadershipMessagePage";

export default function DrAnjaliJainPage() {
    const data = useAnjaliLeadershipData();
    return <LeadershipPage {...data} />;
}
