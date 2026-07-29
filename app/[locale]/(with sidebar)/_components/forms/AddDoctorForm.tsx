"use client"
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plus, Trash2, Calendar, User } from 'lucide-react';
import { useDepartmentData } from '@/data/departmentData';

// Form Schema
const doctorSchema = z.object({
    name: z.string().min(1, "Name is required"),
    qualification: z.string().min(1, "Qualification is required"),
    department: z.string().min(1, "Department is required"),
    experience: z.string(),
    image: z.string().min(1, "Image path is required"),
    availability: z.array(z.object({
        day: z.string().min(1, "Day is required"),
        time: z.string().min(1, "Time is required")
    })).min(1, "At least one availability slot is required"),
    isSenior: z.boolean()
});

type DoctorFormData = z.infer<typeof doctorSchema>;

interface SavedDoctorData extends DoctorFormData {
    id: number;
}

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];



export default function AddDoctorForm() {
    const [savedData, setSavedData] = useState<SavedDoctorData | null>(null);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DoctorFormData>({
        resolver: zodResolver(doctorSchema),
        defaultValues: {
            name: '',
            qualification: '',
            department: '',
            experience: '',
            image: '',
            availability: [{ day: 'Mon', time: '9:00 AM - 5:00 PM' }],
            isSenior: false
        }
    });
    const departmentData = useDepartmentData()
    const DEPARTMENTS = departmentData.map((dept) => dept.name);
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'availability'
    });

    const onSubmit = (data: DoctorFormData) => {
        // Generate a random ID for demo purposes
        const doctorData: SavedDoctorData = {
            id: Math.floor(Math.random() * 1000) + 1,
            ...data
        };

        setSavedData(doctorData);
        console.log('Doctor Data:', doctorData);
    };

    const handleReset = () => {
        reset();
        setSavedData(null);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Doctor</h1>
                <p className="text-gray-600">Fill in the doctor&apos;s information and availability schedule</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Basic Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Doctor Name *
                            </label>
                            <input
                                {...register('name')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Dr. John Doe"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Department */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Department *
                            </label>
                            <select
                                {...register('department')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Select Department</option>
                                {DEPARTMENTS.map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                            {errors.department && (
                                <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
                            )}
                        </div>

                        {/* Experience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Experience
                            </label>
                            <input
                                {...register('experience')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="10+ years"
                            />
                        </div>

                        {/* Image Path */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Image Path *
                            </label>
                            <input
                                {...register('image')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="/doctors/dr-john-doe.webp"
                            />
                            {errors.image && (
                                <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Qualification */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Qualification *
                        </label>
                        <textarea
                            {...register('qualification')}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="MBBS, MD, Specialization details..."
                        />
                        {errors.qualification && (
                            <p className="mt-1 text-sm text-red-600">{errors.qualification.message}</p>
                        )}
                    </div>

                    {/* Senior Status */}
                    <div className="mt-6">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                {...register('isSenior')}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-gray-700">Senior Doctor</span>
                        </label>
                    </div>
                </div>

                {/* Availability Schedule */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Availability Schedule
                        </h2>
                        <button
                            type="button"
                            onClick={() => append({ day: 'Mon', time: '9:00 AM - 5:00 PM' })}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Slot
                        </button>
                    </div>

                    <div className="space-y-4">
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-center gap-4 p-4 bg-white rounded-md border">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                                    <select
                                        {...register(`availability.${index}.day`)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {DAYS_OF_WEEK.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                    {errors.availability?.[index]?.day && (
                                        <p className="mt-1 text-sm text-red-600">{errors.availability[index].day.message}</p>
                                    )}
                                </div>

                                <div className="flex-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                    <input
                                        {...register(`availability.${index}.time`)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="9:00 AM - 5:00 PM"
                                    />
                                    {errors.availability?.[index]?.time && (
                                        <p className="mt-1 text-sm text-red-600">{errors.availability[index].time.message}</p>
                                    )}
                                </div>

                                {fields.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {errors.availability && (
                        <p className="mt-2 text-sm text-red-600">{errors.availability.message}</p>
                    )}
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-6 border-t">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                        Add Doctor
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                    >
                        Reset Form
                    </button>
                </div>
            </form>

            {/* Display Saved Data */}
            {savedData && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Doctor Added Successfully!</h3>
                    <pre className="bg-white p-4 rounded-md text-sm overflow-x-auto border">
                        {JSON.stringify(savedData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}
