'use client';

import { CalendarCheck, Hospital, MapPin, Search as SearchIcon, Star, Stethoscope, Syringe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GiFirstAidKit } from 'react-icons/gi';

type SearchCategory = 'all' | 'doctors' | 'departments' | 'services' | 'locations' | 'health-packages';
type SortBy = 'relevance' | 'rating' | 'experience' | 'availability';

interface SearchResult {
    id: number;
    type: SearchCategory;
    title: string;
    specialty?: string;          // Doctors
    experience?: number;         // Doctors
    rating?: number;             // Doctors/Departments
    availability?: string;       // Doctors
    location?: string;           // Locations
    services?: string[];         // Departments
    description: string;
    imageUrl?: string;
    url: string;
    price?: number;              // Health Packages
    testsIncluded?: number;      // Health Packages
}

const HospitalSearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [category, setCategory] = useState<SearchCategory>('all');
    const [sortBy, setSortBy] = useState<SortBy>('relevance');
    const [selectedLocation, setSelectedLocation] = useState('all');

    // Mock data for hospital
    const hospitalData: SearchResult[] = [
        {
            id: 1,
            type: 'doctors',
            title: 'Dr. Ankit Sharma',
            specialty: 'Cardiologist',
            experience: 15,
            rating: 4.9,
            availability: '24x7 Emergency',
            description: 'Specialist in Heart Bypass Surgery and Invasive Cardiology',
            imageUrl: '/doctors/dr-ankit-sharma.jpg',
            url: '/doctors/cardiology/ankit-sharma'
        },
        {
            id: 2,
            type: 'departments',
            title: 'Cardiology Department',
            rating: 4.8,
            services: ['Echocardiography', 'Angioplasty', 'Heart Catheterization'],
            description: 'Advanced cardiac care with 24/7 cath lab facility',
            imageUrl: '/departments/cardiology.jpg',
            url: '/departments/cardiology'
        },
        {
            id: 3,
            type: 'health-packages',
            title: 'Premium Health Checkup',
            price: 4999,
            testsIncluded: 72,
            description: 'Comprehensive health assessment and specialist consultation',
            url: '/health-packages/premium-checkup'
        },
        {
            id: 4,
            type: 'services',
            title: '24x7 Emergency Service',
            description: 'Dedicated trauma care unit and ambulance service',
            url: '/services/emergency'
        },
        {
            id: 5,
            type: 'locations',
            title: 'Saket Branch',
            location: 'New Delhi',
            description: '300-bed super-specialty hospital in Saket',
            imageUrl: '/locations/saket.jpg',
            url: '/locations/saket'
        }
    ];

    // Search filtering logic
    const performSearch = () => {
        let filtered = hospitalData.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = category === 'all' || item.type === category;
            const matchesLocation = selectedLocation === 'all' ||
                (item.type === 'locations' ? item.location === selectedLocation : true);

            return matchesSearch && matchesCategory && matchesLocation;
        });

        // Sorting
        switch (sortBy) {
            case 'rating':
                filtered = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'experience':
                filtered = filtered.sort((a, b) => (b.experience || 0) - (a.experience || 0));
                break;
            case 'availability':
                filtered = filtered.sort((a) => a.availability ? -1 : 1);
                break;
        }

        setResults(filtered);
    };

    // UI component
    const CategoryIcon = ({ type }: { type: SearchCategory }) => {
        const iconMap: Record<SearchCategory, React.ReactElement> = {
            'all': <Hospital size={20} />,
            'doctors': <Stethoscope size={20} />,
            'departments': <GiFirstAidKit size={20} />,
            'services': <Syringe size={20} />,
            'locations': <MapPin size={20} />,
            'health-packages': <CalendarCheck size={20} />
        };

        return (
            <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
                {iconMap[type]}
            </div>
        );
    };

    const ResultCard = ({ item }: { item: SearchResult }) => (
        <Link href={item.url} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="p-6 flex gap-4 items-start">
                {item.imageUrl && (
                    <div className="relative w-24 h-24">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                )}
                {!item.imageUrl && <CategoryIcon type={item.type} />}

                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        {item.rating && (
                            <span className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
                                <Star size={16} className="mr-1" /> {item.rating}
                            </span>
                        )}
                    </div>

                    {item.specialty && (
                        <p className="text-indigo-600 font-medium mb-2">{item.specialty}</p>
                    )}

                    <p className="text-gray-600 mb-3">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {item.experience && (
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                                {item.experience}+ years experience
                            </span>
                        )}
                        {item.availability && (
                            <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">
                                {item.availability}
                            </span>
                        )}
                        {item.testsIncluded && (
                            <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
                                {item.testsIncluded} tests included
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-indigo-600  py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-black mb-6 text-white font-display -tracking-tighter ">Find Healthcare Support</h1>

                    <div className="bg-white rounded-xl p-2 shadow-lg">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for doctors, departments, or services..."
                                className="flex-1 p-4 text-lg border-none rounded-xl focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={performSearch}
                                className="bg-indigo-600 text-white px-8 rounded-lg hover:bg-indigo-700 flex items-center"
                            >
                                <SearchIcon size={24} className="mr-2" />
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Quick Filters */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        {(['all', 'doctors', 'departments', 'services', 'locations', 'health-packages'] as SearchCategory[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => setCategory(type)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full ${category === type ? 'bg-white text-indigo-600' : 'bg-indigo-700/20 text-white'
                                    }`}
                            >
                                <CategoryIcon type={type} />
                                {{
                                    'all': 'All',
                                    'doctors': 'Doctors',
                                    'departments': 'Departments',
                                    'services': 'Services',
                                    'locations': 'Locations',
                                    'health-packages': 'Health Packages'
                                }[type]}
                            </button>
                        ))}
                    </div>

                    {/* Location Filter */}
                    <div className="mt-4">
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="bg-white border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="all">All Locations</option>
                            {['New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'].map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Results Header */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {results.length} results found for &ldquo;{searchQuery}&rdquo;
                    </h2>

                    <div className="flex gap-4">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortBy)}
                            className="bg-white border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="relevance">Relevance</option>
                            <option value="rating">Rating</option>
                            <option value="experience">Experience</option>
                            <option value="availability">Availability</option>
                        </select>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {results.map((item) => (
                        <ResultCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Emergency Help Banner */}
                {category === 'services' && (
                    <div className="mt-12 bg-rose-50 border-l-4 border-rose-600 p-6 rounded-lg">
                        <div className="flex items-center gap-4">
                            <GiFirstAidKit size={32} className="text-rose-600" />
                            <div>
                                <h3 className="text-xl font-semibold text-rose-800">Emergency Help</h3>
                                <p className="text-rose-700">Call for immediate assistance: 1066</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HospitalSearchPage;
