module.exports = [
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/utils/projectsDataGenerator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECT_IDS",
    ()=>PROJECT_IDS,
    "generateProjectsData",
    ()=>generateProjectsData,
    "getProjectById",
    ()=>getProjectById,
    "getSimilarProjects",
    ()=>getSimilarProjects
]);
// Helper function to extract numeric ID from project ID
const getNumericId = (projectId)=>{
    return projectId.replace("proyecto-", "");
};
// Helper function to convert numeric ID to project ID
const getProjectId = (numericId)=>{
    return `proyecto-${numericId}`;
};
const PROJECT_IDS = [
    "proyecto-1",
    "proyecto-2",
    "proyecto-3",
    "proyecto-4",
    "proyecto-5",
    "proyecto-6",
    "proyecto-7",
    "proyecto-8",
    "proyecto-9",
    "proyecto-10",
    "proyecto-11",
    "proyecto-12"
];
// Image mapping for projects
const PROJECT_IMAGES = {
    "1": "/images/projects/section1-imagen1.webp",
    "2": "/images/projects/section1-imagen3.webp",
    "3": "/images/projects/section1-imagen5.webp",
    "4": "/images/projects/section1-imagen1.webp",
    "5": "/images/projects/section1-imagen3.webp",
    "6": "/images/projects/section1-imagen5.webp",
    "7": "/images/projects/section1-imagen1.webp",
    "8": "/images/projects/section1-imagen3.webp",
    "9": "/images/projects/section1-imagen5.webp",
    "10": "/images/projects/section1-imagen1.webp",
    "11": "/images/projects/section1-imagen3.webp",
    "12": "/images/projects/section1-imagen5.webp"
};
const COVER_IMAGES = {
    "1": "/images/projects/covers/project1-cover.jpg",
    "2": "/images/projects/covers/project1-cover.jpg",
    "3": "/images/projects/covers/project1-cover.jpg",
    "4": "/images/projects/covers/project1-cover.jpg",
    "5": "/images/projects/covers/project1-cover.jpg",
    "6": "/images/projects/covers/project1-cover.jpg",
    "7": "/images/projects/covers/project1-cover.jpg",
    "8": "/images/projects/covers/project1-cover.jpg",
    "9": "/images/projects/covers/project1-cover.jpg",
    "10": "/images/projects/covers/project1-cover.jpg",
    "11": "/images/projects/covers/project1-cover.jpg",
    "12": "/images/projects/covers/project1-cover.jpg"
};
// Children images mapping
const CHILDREN_IMAGES = {
    "1": "/images/projects/section1-imagen2.webp",
    "2": "/images/projects/section1-imagen4.webp",
    "3": "/images/projects/section1-imagen6.webp",
    "4": "/images/projects/section1-imagen2.webp",
    "5": "/images/projects/section1-imagen4.webp",
    "6": "/images/projects/section1-imagen6.webp",
    "7": "/images/projects/section1-imagen2.webp",
    "8": "/images/projects/section1-imagen4.webp",
    "9": "/images/projects/section1-imagen6.webp",
    "10": "/images/projects/section1-imagen2.webp",
    "11": "/images/projects/section1-imagen4.webp",
    "12": "/images/projects/section1-imagen6.webp"
};
// Similar projects mapping
const SIMILAR_PROJECTS = {
    "1": [
        "12"
    ],
    "2": [
        "1",
        "4",
        "6"
    ],
    "3": [
        "1",
        "2",
        "7"
    ],
    "4": [
        "8",
        "9"
    ],
    "5": [
        "1",
        "3"
    ],
    "6": [
        "2",
        "9"
    ],
    "7": [
        "3",
        "6"
    ],
    "8": [
        "4",
        "9"
    ],
    "9": [
        "6",
        "8"
    ],
    "10": [
        "11",
        "12"
    ],
    "11": [
        "10",
        "12"
    ],
    "12": [
        "7",
        "11"
    ]
};
const generateProjectsData = (t)=>{
    return PROJECT_IDS.map((id)=>{
        const numericId = getNumericId(id);
        // Get services array directly from translation (it's already an array in the JSON)
        const servicesData = t(`projects.projectDetails.${numericId}.services`, {
            returnObjects: true,
            defaultValue: []
        });
        const services = Array.isArray(servicesData) ? servicesData : [];
        const scopesData = t(`projects.projectDetails.${numericId}.scopes`, {
            returnObjects: true,
            defaultValue: []
        });
        const scopes = Array.isArray(scopesData) ? scopesData : [];
        const projectData = {
            id: id,
            title: t(`projects.projectDetails.${numericId}.title`, `Project ${numericId}`),
            category: t(`projects.projectDetails.${numericId}.category`, "General"),
            color: t(`projects.projectDetails.${numericId}.color`, "bg-blue-100 text-blue-600"),
            client: t(`projects.projectDetails.${numericId}.client`, "Client"),
            services,
            scopes,
            web: t(`projects.projectDetails.${numericId}.web`, "Web"),
            shortDescription: t(`projects.projectDetails.${numericId}.shortDescription`, "Short description"),
            longDescription: t(`projects.projectDetails.${numericId}.longDescription`, "Long description"),
            results: t(`projects.projectDetails.${numericId}.results`, "Results"),
            coverImage: COVER_IMAGES[numericId] || "/default-image.jpg",
            image: PROJECT_IMAGES[numericId] || "/default-image.jpg",
            fallback: PROJECT_IMAGES[numericId] || "/default-image.jpg",
            similar: SIMILAR_PROJECTS[numericId] || [],
            children: {
                category: t(`projects.projectDetails.${numericId}.category`, "General"),
                title: t(`projects.projectDetails.${numericId}.title`, `Project ${numericId}`),
                image: CHILDREN_IMAGES[numericId] || "/default-image.jpg"
            }
        };
        return projectData;
    });
};
const getProjectById = (id, t)=>{
    if (!PROJECT_IDS.includes(id)) {
        return null;
    }
    const projects = generateProjectsData(t);
    const project = projects.find((project)=>project.id === id) || null;
    return project;
};
const getSimilarProjects = (id, t)=>{
    const numericId = getNumericId(id);
    const similarNumericIds = SIMILAR_PROJECTS[numericId] || [];
    // Convert numeric IDs to full project IDs
    const similarProjectIds = similarNumericIds.map((numId)=>getProjectId(numId));
    const allProjects = generateProjectsData(t);
    const similarProjects = allProjects.filter((project)=>similarProjectIds.includes(project.id));
    return similarProjects;
};
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/utils/projectsDataGenerator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Image mapping for projects
const projectImages = [
    "/images/home/section5-image1.jpg",
    "/images/home/section5-image2.jpg",
    "/images/home/section5-image3.jpg",
    "/images/home/section5-image4.jpg"
];
// Transform translation data to component format - showing project data
const transformProjectsData = (t)=>{
    const projectsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateProjectsData"])(t);
    return projectsData.map((project, index)=>{
        return {
            id: project.id,
            title: project.title,
            category: project.category,
            image: project.image || projectImages[index % projectImages.length],
            categoryColor: project?.color || 'bg-gray-100 text-gray-600'
        };
    });
};
// Projects Carousel Component
const ProjectsCarousel = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileActiveTab, setMobileActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Get projects data with translations
    const projectsData = transformProjectsData(t);
    // Handle project click navigation
    const handleProjectClick = (projectId)=>{
        // Navigate to project detail page using Next.js router
        console.log('projectId', projectId);
        router.push(`/projects/${projectId}`);
    };
    // Auto-slide functionality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAutoPlaying) return;
        const goToNext = ()=>{
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentPage((prev)=>(prev + 1) % 3);
            setTimeout(()=>setIsTransitioning(false), 300);
        };
        const interval = setInterval(()=>{
            goToNext();
        }, 5000); // Change page every 5 seconds
        return ()=>clearInterval(interval);
    }, [
        isAutoPlaying,
        isTransitioning
    ]);
    // Get projects for current page (4 projects per page)
    const getCurrentPageProjects = ()=>{
        const startIndex = currentPage * 4;
        return projectsData.slice(startIndex, startIndex + 4);
    };
    // Navigation functions with smooth transitions
    const goToPage = (pageIndex)=>{
        if (isTransitioning || pageIndex === currentPage) return;
        setIsTransitioning(true);
        setCurrentPage(pageIndex);
        setTimeout(()=>setIsTransitioning(false), 300);
    };
    // Mobile tab navigation
    const handleMobileTabClick = (tabIndex)=>{
        setMobileActiveTab(tabIndex);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        onMouseEnter: ()=>setIsAutoPlaying(false),
        onMouseLeave: ()=>setIsAutoPlaying(true),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block sm:hidden mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-4 bg-gray-100 rounded-lg p-1 mx-4",
                        children: getCurrentPageProjects().map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleMobileTabClick(index),
                                className: `flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-200 ${mobileActiveTab === index ? 'bg-white text-[#7B43D6] shadow-sm' : 'text-gray-600 hover:text-gray-900'}`,
                                children: project.category
                            }, project.id, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    getCurrentPageProjects()[mobileActiveTab] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group cursor-pointer transform transition-all duration-300 hover:-translate-y-1",
                            onClick: ()=>handleProjectClick(getCurrentPageProjects()[mobileActiveTab].id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden shadow-lg bg-white rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: getCurrentPageProjects()[mobileActiveTab].image,
                                        alt: getCurrentPageProjects()[mobileActiveTab].title,
                                        className: "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500",
                                        width: 400,
                                        height: 256,
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 bg-white p-4 mx-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-block ${getCurrentPageProjects()[mobileActiveTab].categoryColor} text-xs font-semibold px-3 py-1 mb-3 uppercase tracking-wide rounded-full`,
                                                children: getCurrentPageProjects()[mobileActiveTab].category
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-gray-900 font-bold text-lg leading-tight group-hover:text-[#7B43D6] transition-colors duration-300",
                                                children: getCurrentPageProjects()[mobileActiveTab].title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-300 ${isTransitioning ? 'opacity-75 scale-95' : 'opacity-100 scale-100'}`,
                children: getCurrentPageProjects().map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2",
                        onClick: ()=>handleProjectClick(project.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden shadow-lg bg-white rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: project.image,
                                    alt: project.title,
                                    className: "w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500",
                                    width: 400,
                                    height: 256,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 bg-white p-3 sm:p-4 lg:p-6 mx-1 sm:mx-2 mb-1 sm:mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block ${project.categoryColor} text-xs font-semibold px-2 sm:px-3 py-1 mb-2 sm:mb-3 uppercase tracking-wide rounded-full`,
                                            children: project.category
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-gray-900 font-bold text-base sm:text-lg lg:text-xl leading-tight group-hover:text-[#7B43D6] transition-colors duration-300",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, project.id, false, {
                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center space-x-3",
                        children: [
                            0,
                            1,
                            2
                        ].map((pageIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    goToPage(pageIndex);
                                    // Reset mobile tab when changing page
                                    setMobileActiveTab(0);
                                },
                                disabled: isTransitioning,
                                className: `w-3 h-3 rounded-full transition-all duration-300 ${pageIndex === currentPage ? 'bg-[#7B43D6] scale-125' : 'bg-[#A8A8B8] hover:bg-[#8B8B9A] hover:scale-110'} disabled:opacity-50 disabled:cursor-not-allowed`,
                                "aria-label": `Go to page ${pageIndex + 1}`
                            }, pageIndex, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 font-medium",
                        children: [
                            t(`home.section5.page`),
                            " ",
                            currentPage + 1,
                            "  ",
                            t(`home.section5.of`),
                            " 3"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ProjectsSection = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-transparent py-8 sm:py-12 pt-2 sm:pt-4 px-4 sm:px-6 lg:px-8 relative z-[1]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center lg:text-left mb-8 sm:mb-12 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#7B43D6] text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wide",
                            children: t('home.section5.subtitle')
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl lg:max-w-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold text-gray-900 leading-tight mb-4 sm:!mb-6",
                                    children: t('home.section5.title')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0",
                                    children: t('home.section5.description')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectsCarousel, {}, void 0, false, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/home/ProjectsSection.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProjectsSection;
}),
];

//# sourceMappingURL=Documents_work_person_mi-pagina-old_mi-pagina-nextjs_src_15f8a1ab._.js.map