"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash2, Upload } from 'lucide-react';
import React from 'react';
import { useFieldArray, useForm, Path } from 'react-hook-form';
import { z } from 'zod';

// Zod schema for validation
const departmentSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    index: z.number().min(0, 'Index must be non-negative'),
    name: z.string().min(1, 'Name is required'),
    slug: z.string().min(1, 'Slug is required'),
    heroImage: z.string().min(1, 'Hero image is required'),
    bannerImage: z.string().min(1, 'Banner image is required'),
    heroTitle: z.string().min(1, 'Hero title is required'),
    heroSubtitle: z.string().min(1, 'Hero subtitle is required'),
    isFeatured: z.boolean(),
    overview: z.object({
        title: z.string().min(1, 'Overview title is required'),
        description: z.array(z.object({ value: z.string().min(1, 'Description cannot be empty') })).min(1, 'At least one description is required'),
        whyChooseUs: z.array(z.object({ value: z.string().min(1, 'Why choose us item cannot be empty') })).min(1, 'At least one why choose us item is required')
    }),
    treatments: z.object({
        title: z.string().min(1, 'Treatments title is required'),
        items: z.array(z.object({
            title: z.string().min(1, 'Treatment title is required'),
            description: z.string().min(1, 'Treatment description is required')
        })).min(1, 'At least one treatment is required')
    }),
    stats: z.object({
        title: z.string().min(1, 'Stats title is required'),
        items: z.array(z.object({
            value: z.string().min(1, 'Stat value is required'),
            label: z.string().min(1, 'Stat label is required')
        })).min(1, 'At least one stat is required')
    }),
    team: z.object({
        title: z.string().min(1, 'Team title is required'),
        members: z.array(z.object({
            name: z.string().min(1, 'Member name is required'),
            role: z.string().min(1, 'Member role is required'),
            credentials: z.string().min(1, 'Member credentials are required'),
            image: z.string().min(1, 'Member image is required'),
            specialty: z.string().min(1, 'Member specialty is required')
        })).min(1, 'At least one team member is required')
    }),
    facilities: z.object({
        title: z.string().min(1, 'Facilities title is required'),
        description: z.string().min(1, 'Facilities description is required'),
        features: z.array(z.object({ value: z.string().min(1, 'Feature cannot be empty') })).min(1, 'At least one feature is required'),
        image: z.string().min(1, 'Facilities image is required')
    }),
    research: z.object({
        title: z.string().min(1, 'Research title is required'),
        items: z.array(z.object({
            title: z.string().min(1, 'Research item title is required'),
            content: z.string().min(1, 'Research item content is required'),
            icon: z.string().min(1, 'Research item icon is required')
        })).min(1, 'At least one research item is required')
    }),
    testimonials: z.object({
        title: z.string().min(1, 'Testimonials title is required'),
        items: z.array(z.object({
            quote: z.string().min(1, 'Quote is required'),
            author: z.string().min(1, 'Author is required'),
            image: z.string().min(1, 'Testimonial image is required')
        })).min(1, 'At least one testimonial is required')
    }),
    cta: z.object({
        title: z.string().min(1, 'CTA title is required'),
        subtitle: z.string().min(1, 'CTA subtitle is required'),
        buttons: z.array(z.object({
            text: z.string().min(1, 'Button text is required'),
            isPrimary: z.boolean()
        })).min(1, 'At least one button is required')
    })
});

type DepartmentFormData = z.infer<typeof departmentSchema>;

export default function AddDepartmentForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<DepartmentFormData>({
        resolver: zodResolver(departmentSchema),
        defaultValues: {
            id: '',
            index: 0,
            name: '',
            slug: '',
            heroImage: '',
            bannerImage: '',
            heroTitle: '',
            heroSubtitle: '',
            isFeatured: false,
            overview: {
                title: '',
                description: [{ value: '' }],
                whyChooseUs: [{ value: '' }]
            },
            treatments: {
                title: '',
                items: [{ title: '', description: '' }]
            },
            stats: {
                title: '',
                items: [{ value: '', label: '' }]
            },
            team: {
                title: '',
                members: [{ name: '', role: '', credentials: '', image: '', specialty: '' }]
            },
            facilities: {
                title: '',
                description: '',
                features: [{ value: '' }],
                image: ''
            },
            research: {
                title: '',
                items: [{ title: '', content: '', icon: '' }]
            },
            testimonials: {
                title: '',
                items: [{ quote: '', author: '', image: '' }]
            },
            cta: {
                title: '',
                subtitle: '',
                buttons: [{ text: '', isPrimary: false }]
            }
        }
    });

    // Field arrays
    const { fields: descriptionFields, append: appendDescription, remove: removeDescription } = useFieldArray({
        control,
        name: 'overview.description' as const
    });

    const { fields: whyChooseUsFields, append: appendWhyChooseUs, remove: removeWhyChooseUs } = useFieldArray({
        control,
        name: 'overview.whyChooseUs' as const
    });

    const { fields: treatmentFields, append: appendTreatment, remove: removeTreatment } = useFieldArray({
        control,
        name: 'treatments.items'
    });

    const { fields: statFields, append: appendStat, remove: removeStat } = useFieldArray({
        control,
        name: 'stats.items'
    });

    const { fields: teamFields, append: appendTeamMember, remove: removeTeamMember } = useFieldArray({
        control,
        name: 'team.members'
    });

    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
        control,
        name: 'facilities.features' as const
    });

    const { fields: researchFields, append: appendResearch, remove: removeResearch } = useFieldArray({
        control,
        name: 'research.items'
    });

    const { fields: testimonialFields, append: appendTestimonial, remove: removeTestimonial } = useFieldArray({
        control,
        name: 'testimonials.items'
    });

    const { fields: buttonFields, append: appendButton, remove: removeButton } = useFieldArray({
        control,
        name: 'cta.buttons'
    });

    const handleFileUpload = (
        fieldName: Path<DepartmentFormData>,
        event: React.ChangeEvent<HTMLInputElement>,
        index?: number
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            // In a real application, you would upload the file and get a URL
            // For this example, we'll use a placeholder URL
            const fileURL = URL.createObjectURL(file);

            if (index !== undefined) {
                // Handle nested array fields
                if (fieldName.startsWith('team.members')) {
                    setValue(`team.members.${index}.image` as Path<DepartmentFormData>, fileURL);
                } else if (fieldName.startsWith('testimonials.items')) {
                    setValue(`testimonials.items.${index}.image` as Path<DepartmentFormData>, fileURL);
                }
            } else {
                // Handle top-level fields
                setValue(fieldName, fileURL);
            }
        }
    };

    const onSubmit = (data: DepartmentFormData) => {
        console.log('Form Data:', data);
        alert('Form submitted! Check console for data.');
    };

    const isFeatured = watch('isFeatured');

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Department Data Form</h1>
                <p className="text-gray-600">Fill out all required information for the department</p>
            </div>

            <div className="space-y-8">
                {/* Basic Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="id">ID *</Label>
                                <Input {...register('id')} id="id" className='border-black' />
                                {errors.id && <p className="text-red-500 text-sm mt-1">{errors.id.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="index">Index *</Label>
                                <Input {...register('index', { valueAsNumber: true })} type="number" id="index" className='border-black' />
                                {errors.index && <p className="text-red-500 text-sm mt-1">{errors.index.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Name *</Label>
                                <Input {...register('name')} id="name" className='border-black' />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="slug">Slug *</Label>
                                <Input {...register('slug')} id="slug" className='border-black' />
                                {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="heroTitle">Hero Title *</Label>
                            <Input {...register('heroTitle')} id="heroTitle" className='border-black' />
                            {errors.heroTitle && <p className="text-red-500 text-sm mt-1">{errors.heroTitle.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="heroSubtitle">Hero Subtitle *</Label>
                            <Textarea {...register('heroSubtitle')} id="heroSubtitle" className='border-black' />
                            {errors.heroSubtitle && <p className="text-red-500 text-sm mt-1">{errors.heroSubtitle.message}</p>}
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isFeatured"
                                checked={isFeatured}
                                onCheckedChange={(checked) => setValue('isFeatured', !!checked)}
                                className='border-black'
                            />
                            <Label htmlFor="isFeatured">Featured Department</Label>
                        </div>
                    </CardContent>
                </Card>

                {/* Images */}
                <Card>
                    <CardHeader>
                        <CardTitle>Images</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="heroImage">Hero Image *</Label>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileUpload('heroImage', e)}
                                    className="flex-1 border-black"
                                />
                                <Upload className="w-4 h-4" />
                            </div>
                            {errors.heroImage && <p className="text-red-500 text-sm mt-1">{errors.heroImage.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="bannerImage">Banner Image *</Label>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileUpload('bannerImage', e)}
                                    className="flex-1 border-black"
                                />
                                <Upload className="w-4 h-4" />
                            </div>
                            {errors.bannerImage && <p className="text-red-500 text-sm mt-1">{errors.bannerImage.message}</p>}
                        </div>
                    </CardContent>
                </Card>

                {/* Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="overviewTitle">Overview Title *</Label>
                            <Input {...register('overview.title')} id="overviewTitle" className='border-black' />
                            {errors.overview?.title && <p className="text-red-500 text-sm mt-1">{errors.overview.title.message}</p>}
                        </div>

                        <div>
                            <Label>Description *</Label>
                            {descriptionFields.map((field, index) => (
                                <div key={field.id} className="flex items-center space-x-2 mt-2">
                                    <Textarea {...register(`overview.description.${index}.value`)} placeholder="Description paragraph" className='border-black' />
                                    {descriptionFields.length > 1 && (
                                        <Button type="button" variant="outline" size="sm" onClick={() => removeDescription(index)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendDescription({ value: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Description
                            </Button>
                            {errors.overview?.description && <p className="text-red-500 text-sm mt-1">At least one description is required</p>}
                        </div>

                        <div>
                            <Label>Why Choose Us *</Label>
                            {whyChooseUsFields.map((field, index) => (
                                <div key={field.id} className="flex items-center space-x-2 mt-2">
                                    <Input {...register(`overview.whyChooseUs.${index}.value`)} placeholder="Why choosclassName='border-black'e us point" className='border-black' />
                                    {whyChooseUsFields.length > 1 && (
                                        <Button type="button" variant="outline" size="sm" onClick={() => removeWhyChooseUs(index)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendWhyChooseUs({ value: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Point
                            </Button>
                            {errors.overview?.whyChooseUs && <p className="text-red-500 text-sm mt-1">At least one why choose us point is required</p>}
                        </div>
                    </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                    <CardHeader>
                        <CardTitle>Treatments</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="treatmentsTitle">Treatments Title *</Label>
                            <Input {...register('treatments.title')} id="treatmentsTitle" className='border-black' />
                            {errors.treatments?.title && <p className="text-red-500 text-sm mt-1">{errors.treatments.title.message}</p>}
                        </div>

                        <div>
                            <Label>Treatment Items *</Label>
                            {treatmentFields.map((field, index) => (
                                <Card key={field.id} className="mt-2">
                                    <CardContent className="pt-4">
                                        <div className="space-y-2">
                                            <Input {...register(`treatments.items.${index}.title`)} placeholder="Treatment title" className='border-black' />
                                            <Textarea {...register(`treatments.items.${index}.description`)} placeholder="Treatment description" className='border-black' />
                                        </div>
                                        {treatmentFields.length > 1 && (
                                            <Button type="button" variant="outline" size="sm" onClick={() => removeTreatment(index)} className="mt-2">
                                                <Trash2 className="w-4 h-4 mr-1" /> Remove Treatment
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendTreatment({ title: '', description: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Treatment
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats */}
                <Card>
                    <CardHeader>
                        <CardTitle>Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="statsTitle">Stats Title *</Label>
                            <Input {...register('stats.title')} id="statsTitle" className='border-black' />
                            {errors.stats?.title && <p className="text-red-500 text-sm mt-1">{errors.stats.title.message}</p>}
                        </div>

                        <div>
                            <Label>Stat Items *</Label>
                            {statFields.map((field, index) => (
                                <div key={field.id} className="flex items-center space-x-2 mt-2">
                                    <Input {...register(`stats.items.${index}.value`)} placeholder="Value (e.g., 5,000+)" className='border-black' />
                                    <Input {...register(`stats.items.${index}.label`)} placeholder="Label (e.g., Patients Treated)" className='border-black' />
                                    {statFields.length > 1 && (
                                        <Button type="button" variant="outline" size="sm" onClick={() => removeStat(index)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendStat({ value: '', label: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Stat
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Team */}
                <Card>
                    <CardHeader>
                        <CardTitle>Team Members</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="teamTitle">Team Title *</Label>
                            <Input {...register('team.title')} id="teamTitle" className='border-black' />
                            {errors.team?.title && <p className="text-red-500 text-sm mt-1">{errors.team.title.message}</p>}
                        </div>

                        <div>
                            <Label>Team Members *</Label>
                            {teamFields.map((field, index) => (
                                <Card key={field.id} className="mt-2">
                                    <CardContent className="pt-4">
                                        <div className="grid grid-cols-2 gap-2">
                                            <Input {...register(`team.members.${index}.name`)} placeholder="Name" className='border-black' />
                                            <Input {...register(`team.members.${index}.role`)} placeholder="Role" className='border-black' />
                                            <Input {...register(`team.members.${index}.credentials`)} placeholder="Credentials" className='border-black' />
                                            <Input {...register(`team.members.${index}.specialty`)} placeholder="Specialty" className='border-black' />
                                        </div>
                                        <div className="mt-2">
                                            <Label>Member Image *</Label>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleFileUpload(`team.members.${index}.image`, e, index)}
                                                className='border-black'
                                            />
                                        </div>
                                        {teamFields.length > 1 && (
                                            <Button type="button" variant="outline" size="sm" onClick={() => removeTeamMember(index)} className="mt-2">
                                                <Trash2 className="w-4 h-4 mr-1" /> Remove Member
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendTeamMember({ name: '', role: '', credentials: '', image: '', specialty: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Team Member
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Facilities */}
                <Card>
                    <CardHeader>
                        <CardTitle>Facilities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="facilitiesTitle">Facilities Title *</Label>
                            <Input {...register('facilities.title')} id="facilitiesTitle" className='border-black' />
                            {errors.facilities?.title && <p className="text-red-500 text-sm mt-1">{errors.facilities.title.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="facilitiesDescription">Facilities Description *</Label>
                            <Textarea {...register('facilities.description')} id="facilitiesDescription" className='border-black' />
                            {errors.facilities?.description && <p className="text-red-500 text-sm mt-1">{errors.facilities.description.message}</p>}
                        </div>
                        <div>
                            <Label>Facilities Image *</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload('facilities.image', e)}
                            />
                            {errors.facilities?.image && <p className="text-red-500 text-sm mt-1">{errors.facilities.image.message}</p>}
                        </div>

                        <div>
                            <Label>Features *</Label>
                            {featureFields.map((field, index) => (
                                <div key={field.id} className="flex items-center space-x-2 mt-2">
                                    <Input {...register(`facilities.features.${index}.value`)} placeholder="Feature description" className='border-black' />
                                    {featureFields.length > 1 && (
                                        <Button type="button" variant="outline" size="sm" onClick={() => removeFeature(index)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendFeature({ value: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Feature
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Research */}
                <Card>
                    <CardHeader>
                        <CardTitle>Research</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="researchTitle">Research Title *</Label>
                            <Input {...register('research.title')} id="researchTitle" className='border-black' />
                            {errors.research?.title && <p className="text-red-500 text-sm mt-1">{errors.research.title.message}</p>}
                        </div>

                        <div>
                            <Label>Research Items *</Label>
                            {researchFields.map((field, index) => (
                                <Card key={field.id} className="mt-2">
                                    <CardContent className="pt-4">
                                        <div className="space-y-2">
                                            <Input {...register(`research.items.${index}.title`)} placeholder="Research title" className='border-black' />
                                            <Textarea {...register(`research.items.${index}.content`)} placeholder="Research content" className='border-black' />
                                            <Input {...register(`research.items.${index}.icon`)} placeholder="Icon name (e.g., flask, dna, heart)" className='border-black' />
                                        </div>
                                        {researchFields.length > 1 && (
                                            <Button type="button" variant="outline" size="sm" onClick={() => removeResearch(index)} className="mt-2">
                                                <Trash2 className="w-4 h-4 mr-1" /> Remove Research Item
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendResearch({ title: '', content: '', icon: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Research Item
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Testimonials */}
                <Card>
                    <CardHeader>
                        <CardTitle>Testimonials</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="testimonialsTitle">Testimonials Title *</Label>
                            <Input {...register('testimonials.title')} id="testimonialsTitle" className='border-black' />
                            {errors.testimonials?.title && <p className="text-red-500 text-sm mt-1">{errors.testimonials.title.message}</p>}
                        </div>

                        <div>
                            <Label>Testimonial Items *</Label>
                            {testimonialFields.map((field, index) => (
                                <Card key={field.id} className="mt-2">
                                    <CardContent className="pt-4">
                                        <div className="space-y-2">
                                            <Textarea {...register(`testimonials.items.${index}.quote`)} placeholder="Quote" className='border-black' />
                                            <Input {...register(`testimonials.items.${index}.author`)} placeholder="Author name" className='border-black' />
                                            <div>
                                                <Label>Author Image *</Label>
                                                <Input
                                                    type="file"
                                                    className='border-black'
                                                    accept="image/*"
                                                    onChange={(e) => handleFileUpload(`testimonials.items.${index}.image`, e, index)}
                                                />
                                            </div>
                                        </div>
                                        {testimonialFields.length > 1 && (
                                            <Button type="button" variant="outline" size="sm" onClick={() => removeTestimonial(index)} className="mt-2">
                                                <Trash2 className="w-4 h-4 mr-1" /> Remove Testimonial
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendTestimonial({ quote: '', author: '', image: '' })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Testimonial
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Call to Action */}
                <Card>
                    <CardHeader>
                        <CardTitle>Call to Action</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="ctaTitle">CTA Title *</Label>
                            <Input {...register('cta.title')} id="ctaTitle" className='border-black' />
                            {errors.cta?.title && <p className="text-red-500 text-sm mt-1">{errors.cta.title.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="ctaSubtitle">CTA Subtitle *</Label>
                            <Textarea {...register('cta.subtitle')} id="ctaSubtitle" className='border-black' />
                            {errors.cta?.subtitle && <p className="text-red-500 text-sm mt-1">{errors.cta.subtitle.message}</p>}
                        </div>

                        <div>
                            <Label>CTA Buttons *</Label>
                            {buttonFields.map((field, index) => (
                                <div key={field.id} className="flex items-center space-x-2 mt-2">
                                    <Input {...register(`cta.buttons.${index}.text`)} placeholder="Button text" className='border-black' />
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={watch(`cta.buttons.${index}.isPrimary`)}
                                            onCheckedChange={(checked) => setValue(`cta.buttons.${index}.isPrimary`, !!checked)}
                                        />
                                        <Label>Primary</Label>
                                    </div>
                                    {buttonFields.length > 1 && (
                                        <Button type="button" variant="outline" size="sm" onClick={() => removeButton(index)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => appendButton({ text: '', isPrimary: false })} className="mt-2">
                                <Plus className="w-4 h-4 mr-1" /> Add Button
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Separator />

                <div className="flex justify-center">
                    <Button onClick={handleSubmit(onSubmit)} size="xl" className="px-8">
                        Submit Department Data
                    </Button>
                </div>
            </div>
        </div>
    );
}
