import { useState } from 'react';

const Header = () => {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const handleSearchClick = () => {
        setIsSearchExpanded(!isSearchExpanded);
        if (!isSearchExpanded) {
            setTimeout(() => {
                document.getElementById('searchInput')?.focus();
            }, 100);
        }
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-base-100">
            <div className="navbar container mx-auto px-4 justify-end">
                <div className="relative flex items-center">
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Search Movies"
                        className={`
                            h-12 
                            rounded-full
                            px-4
                            pr-12
                            outline-none
                            text-white
                            placeholder:text-gray-400
                            transition-all
                            duration-500
                            ease-in-out
                            ${isSearchExpanded 
                                ? 'w-[300px] bg-white/20 cursor-text opacity-100' 
                                : 'w-12 bg-transparent cursor-default opacity-0'
                            }
                        `}
                    />
                    <button 
                        onClick={handleSearchClick}
                        className={`
                            absolute 
                            right-3
                            h-12
                            w-12
                            flex
                            items-center
                            justify-center
                            text-xl
                            text-gray-400
                            transition-colors
                            hover:text-white
                            z-10
                            ${isSearchExpanded ? 'text-white' : 'text-gray-400'}
                        `}
                    >
                        {isSearchExpanded ? '✕' : '🔎'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;