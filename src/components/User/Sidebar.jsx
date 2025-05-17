import Link from "next/link";
import {
    FiHome,
    FiShoppingCart,
    FiUser,
    FiMapPin,
    FiSettings,
    FiKey,
    FiFileText,
    FiBox,
    FiBarChart2,
    FiEdit,
} from "react-icons/fi";

const Sidebar = () => {
    const sidebarMenu = [
        { title: "Admin Panel", route: "/admin", icon: <FiSettings />, color: "text-red-400" },
        { title: "Dashboard", route: "/dashboard", icon: <FiHome />, color: "text-blue-400" },
        { title: "Profile", route: "/profiles", icon: <FiUser />, color: "text-purple-400" },
        { title: "Addresses", route: "/address", icon: <FiMapPin />, color: "text-yellow-400" },
        { title: "Orders", route: "/orders", icon: <FiBox />, color: "text-orange-400" },
        { title: "Checkout", route: "/checkout", icon: <FiShoppingCart />, color: "text-green-400" },
        { title: "Update Profile", route: "/update-profile", icon: <FiEdit />, color: "text-gray-400" },
        { title: "Invoice", route: "/invoice", icon: <FiFileText />, color: "text-pink-400" },
        { title: "Account", route: "/profiles", icon: <FiKey />, color: "text-indigo-400" },
        { title: "Analytics", route: "/analytics", icon: <FiBarChart2 />, color: "text-teal-400" },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col min-h-screen border-r py-28 border-gray-700">

            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-1 p-4">
                    {sidebarMenu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.route} passHref>
                                <a className="flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200 group">
                                    <span className={`text-lg ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-sm font-medium">{item.title}</span>
                                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>


        </aside>
    );
};

export default Sidebar;