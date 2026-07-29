"use client";

import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";

type ContentItem = {
    type: "testimonial" | "video";
    name: string;
    title?: string;
    text?: string;
    image?: string;
    videoUrl?: string;
    thumbnail?: string;
    duration?: string;
    category?: string; // Added category for filtering
};

export const VictoryStoriesData: ContentItem[] = [
    {
        type: "testimonial",
        name: "Amit Srivastava",
        title: "Recovered from Stage II Lung Cancer",
        image: "/avatars/amit.png",
        text: "The team at Synergy Hospital truly saved my life. Their dedication and care made a tough time easier to endure. Forever grateful.",
        category: "Lung Cancer",
    },
    {
        type: "video",
        name: "Rekha's Recovery Journey",
        videoUrl: "https://www.youtube.com/embed/a1b2c3",
        thumbnail: "/thumbnails/rekha.jpg",
        duration: "4:10",
        category: "General",
    },
    {
        type: "testimonial",
        name: "Manoj Yadav",
        title: "Post-Chemotherapy Recovery",
        image: "/avatars/manoj.png",
        text: "I received world-class treatment right here in Gorakhpur. The doctors were always supportive and explained every step clearly.",
        category: "Chemotherapy",
    },
    {
        type: "video",
        name: "Kavita's Breast Cancer Survival Story",
        videoUrl: "https://www.youtube.com/embed/b3c4d5",
        thumbnail: "/thumbnails/kavita.jpg",
        duration: "3:35",
        category: "Breast Cancer",
    },
    {
        type: "testimonial",
        name: "Ramesh Pandey",
        title: "Recovered from Prostate Cancer",
        image: "/avatars/ramesh.png",
        text: "Thanks to Synergy, I got timely diagnosis and care. The staff made sure I never felt alone during the process.",
        category: "Prostate Cancer",
    },
    {
        type: "testimonial",
        name: "Seema Tiwari",
        title: "Blood Cancer Survivor - From Deoria",
        image: "/avatars/seema.png",
        text: "Traveling to Gorakhpur was the best decision for my health. The hospital's environment gave me strength and hope.",
        category: "Blood Cancer",
    },
    {
        type: "video",
        name: "Ashok's Bone Marrow Transplant Success",
        videoUrl: "https://www.youtube.com/embed/d6e7f8",
        thumbnail: "/thumbnails/ashok.jpg",
        duration: "5:22",
        category: "Bone Marrow",
    },
    {
        type: "testimonial",
        name: "Poonam Verma",
        title: "Survivor - Ovarian Cancer, Basti",
        image: "/avatars/poonam.png",
        text: "I was terrified at first, but the compassionate approach and professional treatment helped me win the fight.",
        category: "Ovarian Cancer",
    },
    {
        type: "testimonial",
        name: "Dinesh Sharma",
        title: "Recovered from Stage I Colon Cancer",
        image: "/avatars/dinesh.png",
        text: "The early detection and swift action from the Synergy team gave me a new life. Thank you for everything!",
        category: "Colon Cancer",
    },
    {
        type: "video",
        name: "Jaya's Journey Through Radiation Therapy",
        videoUrl: "https://www.youtube.com/embed/e9f0g1",
        thumbnail: "/thumbnails/jaya.jpg",
        duration: "3:48",
        category: "Radiation Therapy",
    },
    {
        type: "testimonial",
        name: "Rajeev Gupta",
        title: "Head & Neck Cancer Recovery - From Maharajganj",
        image: "/avatars/rajeev.png",
        text: "I couldn't speak for weeks. With the support from Synergy's doctors, I not only recovered, but I also regained my confidence.",
        category: "Head & Neck Cancer",
    },
    {
        type: "video",
        name: "Shalini's Cervical Cancer Victory",
        videoUrl: "https://www.youtube.com/embed/f2g3h4",
        thumbnail: "/thumbnails/shalini.jpg",
        duration: "2:59",
        category: "Cervical Cancer",
    },
    {
        type: "testimonial",
        name: "Vikram Singh",
        title: "Recovered from Liver Cancer - From Kushinagar",
        image: "/avatars/vikram.png",
        text: "We were worried about affordability, but Synergy provided us affordable and world-class care.",
        category: "Liver Cancer",
    },
    {
        type: "testimonial",
        name: "Anita Mishra",
        title: "Throat Cancer Survivor - From Siddharthnagar",
        image: "/avatars/anita.png",
        text: "Their personalized approach made me feel like family. I owe my second life to Synergy Hospital.",
        category: "Throat Cancer",
    },
    {
        type: "video",
        name: "Ravi's Hopeful Recovery",
        videoUrl: "https://www.youtube.com/embed/h5i6j7",
        thumbnail: "/thumbnails/ravi.jpg",
        duration: "4:45",
        category: "General",
    },
    {
        type: "testimonial",
        name: "Kiran Yadav",
        title: "Recovered from Skin Cancer - From Sant Kabir Nagar",
        image: "/avatars/kiran.png",
        text: "I never imagined recovery would be this smooth. The hospital truly cares for every patient.",
        category: "Skin Cancer",
    },
    {
        type: "video",
        name: "Vandana's Chemotherapy Experience",
        videoUrl: "https://www.youtube.com/embed/i8j9k0",
        thumbnail: "/thumbnails/vandana.jpg",
        duration: "3:20",
        category: "Chemotherapy",
    },
    {
        type: "testimonial",
        name: "Suresh Dubey",
        title: "Pancreatic Cancer Survivor - From Gorakhpur",
        image: "/avatars/suresh.png",
        text: "We didn't have to go to Delhi or Mumbai. Everything we needed was available right here at Synergy.",
        category: "Pancreatic Cancer",
    },
    {
        type: "testimonial",
        name: "Nirmala Devi",
        title: "Breast Cancer Recovery - From Azamgarh",
        image: "/avatars/nirmala.png",
        text: "Their women's oncology wing gave me specialized care with dignity and empathy.",
        category: "Breast Cancer",
    },
    {
        type: "video",
        name: "Rajesh's Journey to Remission",
        videoUrl: "https://www.youtube.com/embed/k1l2m3",
        thumbnail: "/thumbnails/rajesh.jpg",
        duration: "5:05",
        category: "General",
    },
];

const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    1024: 2,
    640: 1
};

export const VictoryStories = () => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<"all" | "testimonial" | "video">("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [isLoading, setIsLoading] = useState(true);
    const [visibleStories, setVisibleStories] = useState<ContentItem[]>([]);
    const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Extract unique categories from data
    useEffect(() => {
        const uniqueCategories = ["All", ...Array.from(new Set(VictoryStoriesData.map(item => item.category || "General")))];
        setCategories(uniqueCategories);

        // Simulate loading data
        setTimeout(() => setIsLoading(false), 600);
    }, []);

    // Filter stories based on current filters
    useEffect(() => {
        const filterStories = () => {
            let filtered = [...VictoryStoriesData];

            // Filter by type
            if (filter !== "all") {
                filtered = filtered.filter(item => item.type === filter);
            }

            // Filter by category
            if (selectedCategory !== "All") {
                filtered = filtered.filter(item => item.category === selectedCategory);
            }

            // Filter by search term
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                filtered = filtered.filter(item =>
                    item.name.toLowerCase().includes(term) ||
                    (item.title?.toLowerCase().includes(term)) ||
                    (item.text?.toLowerCase().includes(term))
                );
            }

            setVisibleStories(filtered);
        };

        filterStories();
    }, [filter, searchTerm, selectedCategory]);

    // Handle clicking outside video to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (playingIndex !== null) {
                const videoEl = videoRefs.current[playingIndex];
                if (videoEl && !videoEl.contains(event.target as Node)) {
                    setPlayingIndex(null);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [playingIndex]);

    // Reset playing video when filters change
    useEffect(() => {
        setPlayingIndex(null);
    }, [filter, searchTerm, selectedCategory]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Success Stories
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Real stories from real patients who found hope, healing, and a new start at Synergy Hospital
                </p>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start w-full lg:w-auto">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            filter === "all"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        All Stories
                    </button>
                    <button
                        onClick={() => setFilter("testimonial")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            filter === "testimonial"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Testimonials
                    </button>
                    <button
                        onClick={() => setFilter("video")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            filter === "video"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Videos
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search stories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                            <div className="bg-gray-200 rounded-2xl h-64 w-full mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            ) : visibleStories.length === 0 ? (
                <div className="text-center py-16">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No stories found</h3>
                    <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
                    <button
                        onClick={() => {
                            setFilter("all");
                            setSearchTerm("");
                            setSelectedCategory("All");
                        }}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Reset filters
                    </button>
                </div>
            ) : (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-6"
                    columnClassName="pl-6 space-y-6 bg-clip-padding"
                >
                    {visibleStories.map((item, idx) => (
                        <div
                            key={`${item.name}-${idx}`}
                            className="break-inside-avoid transition-all duration-300 hover:translate-y-[-4px]"
                            ref={el => {
                                if (item.type === "video") {
                                    videoRefs.current[idx] = el;
                                }
                            }}
                        >
                            {item.type === "testimonial" ? (
                                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                    <p className="text-gray-800 italic mb-4 text-sm sm:text-base leading-relaxed">&quot;{item.text}&quot;</p>
                                    <div className="flex items-center mt-6 gap-4">
                                        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-gray-100">
                                            <ImageWithFallback
                                                fallbackSrc="/fallback-image.webp"
                                                src={item.image!}
                                                fill
                                                alt={item.name}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
                                                {item.name}
                                                <span className="ml-1 flex-shrink-0 inline-block text-blue-500">
                                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </p>
                                            <p className="text-sm text-gray-500">{item.title}</p>
                                        </div>
                                    </div>
                                    {item.category && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {item.category}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-lg">
                                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                                        {playingIndex === idx ? (
                                            <iframe
                                                className="w-full h-full rounded-t-2xl"
                                                src={`${item.videoUrl}?autoplay=1&modestbranding=1&rel=0`}
                                                title={item.name}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                                <ImageWithFallback
                                                    fallbackSrc="/fallback-image.webp"
                                                    src={item.thumbnail || ""}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                                    <button
                                                        onClick={() => setPlayingIndex(idx)}
                                                        className="p-3 lg:p-4 bg-white/30 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all transform group-hover:scale-110 duration-300"
                                                        aria-label={`Play video: ${item.name}`}
                                                    >
                                                        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {item.duration && (
                                                    <span className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium z-20">
                                                        {item.duration}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <div className="p-4 sm:p-5">
                                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                                        {item.category && (
                                            <div className="mt-2">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/60 text-blue-100">
                                                    {item.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </Masonry>
            )}

            {/* Floating action button to share stories */}
            <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40">
                <button
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-105"
                    aria-label="Share your story"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="ml-2 mr-1 text-sm font-medium hidden md:inline">Share Your Story</span>
                </button>
            </div>
        </div>
    );
};
