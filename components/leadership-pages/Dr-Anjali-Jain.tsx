// components/leadership-pages/Dr-Anjali-Jain.tsx
"use client";

import { anjaliLeadershipData } from "@/data/leadership-data";
import LeadershipPage from "../Modules/discover-synergy/leadership/LeadershipMessagePage";

export default function DrAnjaliJainPage() {
    return <LeadershipPage {...anjaliLeadershipData} />;
}
