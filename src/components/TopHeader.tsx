import { useTranslation } from "react-i18next";
import { MapPinIcon, EnvelopeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";

const TopHeader = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    // Cerrar el dropdown cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Obtener la bandera según el idioma actual
    const getFlagCode = () => {
        return i18n.language === "en" ? "us" : "es";
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-2">
            <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                {/* Left side - Address and Email */}
                <div className="flex items-center space-x-14 text-gray-600">
                    <div className="flex items-center space-x-1">
                        <MapPinIcon className="h-4 w-4 text-blue-500" />
                        <span>{t("contact_info.address")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <EnvelopeIcon className="h-4 w-4 text-blue-500" />
                        <span>{t("contact_info.email")}</span>
                    </div>
                </div>

                {/* Right side - Language and Social Media */}
                <div className="flex items-center space-x-10">
                    {/* Language Switcher */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-md px-2 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            <img
                                src={`https://flagcdn.com/w20/${getFlagCode()}.png`}
                                alt={i18n.language === "en" ? "US Flag" : "Spain Flag"}
                                className="w-5 h-3 object-cover"
                            />
                            <span className="text-gray-700">
                                {i18n.language === "en" ? t("language.en") : t("language.es")}
                            </span>
                            <ChevronDownIcon className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10 py-1 border border-gray-200">
                                <button
                                    onClick={() => changeLanguage("en")}
                                    className={`flex items-center space-x-2 w-full text-left px-4 py-2 text-sm ${i18n.language === "en" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                                >
                                    <img
                                        src="https://flagcdn.com/w20/us.png"
                                        alt="US Flag"
                                        className="w-5 h-3 object-cover"
                                    />
                                    <span>{t("language.en")}</span>
                                </button>
                                <button
                                    onClick={() => changeLanguage("es")}
                                    className={`flex items-center space-x-2 w-full text-left px-4 py-2 text-sm ${i18n.language === "es" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                                >
                                    <img
                                        src="https://flagcdn.com/w20/es.png"
                                        alt="Spain Flag"
                                        className="w-5 h-3 object-cover"
                                    />
                                    <span>{t("language.es")}</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-3">
                        <a
                            href="https://twitter.com/friendsoft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <img src="src/assets/x.svg" alt="X (Twitter)" className="w-4 h-4" />
                        </a>
                        <a
                            href="https://facebook.com/friendsoft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <img src="src/assets/facebook.svg" alt="Facebook" className="w-4 h-4" />
                        </a>
                        <a
                            href="https://instagram.com/friendsoft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-600 transition-colors"
                        >
                            <img src="src/assets/instagram.svg" alt="Instagram" className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
