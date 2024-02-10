import React from 'react';
import { useSelector } from 'react-redux';
import { categories } from './sideBarItems';

const Sidebar = () => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

    if (!isMenuOpen) {
        return null;
    }

    return (
        
        <div className="w-64  h-full border-r border-gray-200 fixed left-0 mt-16 bg-white">
            
            <div className="p-4">
                {categories.map((category, index) => (
                    <div key={index} className="py-2 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            {category.icon}
                            <span>{category.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
    );
};

export default Sidebar;
