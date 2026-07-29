import { FaUserDoctor, FaUsers } from "react-icons/fa6"
import { MdEvent, MdDashboard, MdBarChart, MdDescription, MdSettings } from 'react-icons/md'

export const sidebarItems = [
    {
        title: "Dashboard",
        icon: MdDashboard,
        href: "/dashboard",
    },
    {
        title: "Doctors",
        icon: FaUserDoctor,
        href: "/dashboard/doctors",
    },
    {
        title: "Departments",
        icon: MdBarChart,
        href: "/dashboard/departments",
    },
    {
        title: "Patients",
        icon: FaUsers,
        href: "/dashboard/patients",
    },
    {
        title: "Appointments",
        icon: MdEvent,
        href: "/dashboard/appointments",
    },
    {
        title: "Reports",
        icon: MdDescription,
        href: "/dashboard/reports",
    },
    {
        title: "Settings",
        icon: MdSettings,
        href: "/dashboard/settings",
    },
]
