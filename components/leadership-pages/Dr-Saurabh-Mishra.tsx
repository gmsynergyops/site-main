// components/leadership-pages/Dr-Saurabh-Mishra.tsx
"use client";

import { useSaurabhLeadershipData } from "@/data/leadership-data";
import LeadershipPage from "../Modules/discover-synergy/leadership/LeadershipMessagePage";

export default function DrSaurabhMishraPage() {
    const data = useSaurabhLeadershipData();
    return <LeadershipPage {...data} />;
}
