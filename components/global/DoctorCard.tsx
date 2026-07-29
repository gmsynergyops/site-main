// components/DoctorCard.tsx
import { DoctorPeripheralOPD } from '@/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function DoctorCard({ doctor }: { doctor: DoctorPeripheralOPD }) {
    const t=useTranslations()
    return (
        <div className="flex flex-col z-20  rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow flex-1">
            <div className="flex items-start gap-4">
                {doctor.imageUrl && (
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border">
                        <Image
                            src={doctor.imageUrl}
                            alt={doctor.name}
                            fill
                            className="object-cover "
                        />
                    </div>
                )}
                <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                    {doctor.specialization && (
                        <p className="text-sm text-primary">{doctor.specialization}</p>
                    )}
                    <p className="text-sm text-gray-600">{doctor.experience} {t("experience")}</p>
                    <div className="mt-2">
                        {doctor.qualifications.map((qual: string, index: number) => (
                            <span
                                key={index}
                                className="mr-2 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800"
                            >
                                {qual}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
