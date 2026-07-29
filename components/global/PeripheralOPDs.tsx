"use client"
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useOPD_Data } from '@/data';
import { districts } from '@/types';
import { useState } from 'react';
import { DoctorCard } from './DoctorCard';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Helper function to get day order for sorting
const dayOrder: Record<string, number> = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 7
};

export function PeripheralOPD() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [sortConfig, setSortConfig] = useState<{
        key: 'day';
        direction: 'ascending' | 'descending';
    } | null>(null);

    const t = useTranslations('peripheralOPD');
    const opdData = useOPD_Data();

    const handleSort = () => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === 'day' && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key: 'day', direction });
    };

    const filteredData = opdData.filter(opd => {
        const matchesSearch =
            opd.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opd.doctors.some(doctor => doctor.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            opd.place.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDistrict =
            selectedDistrict === 'All' || opd.district === selectedDistrict;

        return matchesSearch && matchesDistrict;
    });

    // Apply sorting if sortConfig is not null
    const sortedData = [...filteredData];
    if (sortConfig !== null) {
        sortedData.sort((a, b) => {
            const dayA = dayOrder[a.day];
            const dayB = dayOrder[b.day];
            if (dayA < dayB) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (dayA > dayB) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {t('title')}
                </h1>
                <p className="text-gray-600">
                    {t('subtitle')}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                />

                <Select onValueChange={(value) => setSelectedDistrict(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={t('filterPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                        {districts.map(district => (
                            <SelectItem key={district} value={district}>
                                {district}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="rounded-md border overflow-hidden">
                <Table>
                    <TableCaption>
                        {t('tableCaption', { count: filteredData.length })}
                    </TableCaption>
                    <TableHeader className="bg-gray-50">
                        <TableRow>
                            <TableHead>{t('tableHeaders.place')}</TableHead>
                            <TableHead>{t('tableHeaders.hospitalName')}</TableHead>
                            <TableHead>{t('tableHeaders.doctors')}</TableHead>
                            <TableHead>
                                <Button
                                    variant="ghost"
                                    onClick={handleSort}
                                    className="p-0 hover:bg-transparent"
                                >
                                    {t('tableHeaders.day')}
                                    <ArrowUpDown className="ml-2 h-4 w-4" />
                                </Button>
                            </TableHead>
                            <TableHead>{t('tableHeaders.time')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedData.map((opd) => (
                            <TableRow key={opd.id}>
                                <TableCell className="font-medium">{opd.place}</TableCell>
                                <TableCell className='flex flex-col gap-3'>
                                    <span className='text-xl font-semibold'>{opd.hospitalName}</span>
                                    {opd.hospitalAddressLink && (
                                        <Link href={opd.hospitalAddressLink} target='_blank' className='text-violet-700 hover:underline transition-all duration-500 underline-offset-2 ease-in-out'>
                                            {opd.hospitalAddress}
                                        </Link>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-row gap-2">
                                        {opd.doctors.map((doctor, index) => (
                                            <DoctorCard key={index} doctor={doctor} />
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>{opd.day}</TableCell>
                                <TableCell>{opd.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {sortedData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    {t('noResults')}
                </div>
            )}
        </div>
    );
}
