(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/utils/projectsDataGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECT_IDS",
    ()=>PROJECT_IDS,
    "generateProjectsData",
    ()=>generateProjectsData,
    "getProjectById",
    ()=>getProjectById,
    "getProjectNavigation",
    ()=>getProjectNavigation,
    "getSimilarProjects",
    ()=>getSimilarProjects
]);
// Helper function to extract numeric ID from project ID
const getNumericId = (projectId)=>{
    return projectId.replace("proyecto-", "");
};
// Helper function to convert numeric ID to project ID
const getProjectId = (numericId)=>{
    return "proyecto-".concat(numericId);
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
        const servicesData = t("projects.projectDetails.".concat(numericId, ".services"), {
            returnObjects: true,
            defaultValue: []
        });
        const services = Array.isArray(servicesData) ? servicesData : [];
        const scopesData = t("projects.projectDetails.".concat(numericId, ".scopes"), {
            returnObjects: true,
            defaultValue: []
        });
        const scopes = Array.isArray(scopesData) ? scopesData : [];
        const projectData = {
            id: id,
            title: t("projects.projectDetails.".concat(numericId, ".title"), "Project ".concat(numericId)),
            category: t("projects.projectDetails.".concat(numericId, ".category"), "General"),
            color: t("projects.projectDetails.".concat(numericId, ".color"), "bg-blue-100 text-blue-600"),
            client: t("projects.projectDetails.".concat(numericId, ".client"), "Client"),
            services,
            scopes,
            web: t("projects.projectDetails.".concat(numericId, ".web"), "Web"),
            shortDescription: t("projects.projectDetails.".concat(numericId, ".shortDescription"), "Short description"),
            longDescription: t("projects.projectDetails.".concat(numericId, ".longDescription"), "Long description"),
            results: t("projects.projectDetails.".concat(numericId, ".results"), "Results"),
            coverImage: COVER_IMAGES[numericId] || "/default-image.jpg",
            image: PROJECT_IMAGES[numericId] || "/default-image.jpg",
            fallback: PROJECT_IMAGES[numericId] || "/default-image.jpg",
            similar: SIMILAR_PROJECTS[numericId] || [],
            children: {
                category: t("projects.projectDetails.".concat(numericId, ".category"), "General"),
                title: t("projects.projectDetails.".concat(numericId, ".title"), "Project ".concat(numericId)),
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
const getProjectNavigation = (id, t)=>{
    const numericId = +getNumericId(id);
    const previousNumericId = numericId - 1;
    const nextNumericId = numericId + 1;
    const previousProject = getProjectById(getProjectId(previousNumericId === null || previousNumericId === void 0 ? void 0 : previousNumericId.toString()), t);
    const nextProject = getProjectById(getProjectId(nextNumericId === null || nextNumericId === void 0 ? void 0 : nextNumericId.toString()), t);
    return {
        previous: {
            id: (previousProject === null || previousProject === void 0 ? void 0 : previousProject.id) || "",
            title: (previousProject === null || previousProject === void 0 ? void 0 : previousProject.title) || ""
        },
        next: {
            id: (nextProject === null || nextProject === void 0 ? void 0 : nextProject.id) || "",
            title: (nextProject === null || nextProject === void 0 ? void 0 : nextProject.title) || ""
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ProjectDetailsClient = (param)=>{
    let { project, similarProjects, projectNavigation } = param;
    var _projectNavigation_previous, _projectNavigation_next;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "relative mb-36",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-lg shadow-lg mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: project.coverImage,
                                alt: project.title,
                                className: "w-full h-64 sm:h-80 lg:h-96 object-cover",
                                width: 1200,
                                height: 600,
                                loading: "eager"
                            }, void 0, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4/6 w-full bg-transparent p-8 sm:p-4 mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-lg  p-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative md:pr-6 flex flex-col justify-center md:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2",
                                                        children: t('projects.projectDetailGeneral.client')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-medium text-gray-900",
                                                        children: project.client
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-200"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative md:pr-6 flex flex-col justify-center md:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2",
                                                        children: t('projects.projectDetailGeneral.category')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-medium text-gray-900",
                                                        children: project.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-200"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative md:pr-6 flex flex-col justify-center md:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2",
                                                        children: t('projects.projectDetailGeneral.services')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: project.services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-medium text-gray-900",
                                                                children: [
                                                                    service,
                                                                    index < project.services.length - 1 ? ',' : ''
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-200"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-center md:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2",
                                                    children: t('projects.projectDetailGeneral.web')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-medium text-gray-900",
                                                children: project.web
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6",
                            children: t('projects.projectDetailGeneral.description')
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg max-w-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 leading-relaxed text-lg",
                                children: project.longDescription
                            }, void 0, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-4 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-1",
                            children: t('projects.projectDetailGeneral.description')
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 leading-relaxed text-lg",
                            children: project.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-2 lg:order-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.image,
                                            alt: project.title,
                                            className: "w-full h-64 object-cover",
                                            width: 400,
                                            height: 256,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-1 lg:order-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: project.scopes.map((scope, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-2 h-2 sm:w-3 sm:h-3 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: scope
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6",
                            children: t('projectDetails.results', 'Resultados del Proyecto')
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 sm:p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-800 leading-relaxed text-lg font-medium",
                                children: project.results
                            }, void 0, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12 py-8 border-y-2 border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: (projectNavigation === null || projectNavigation === void 0 ? void 0 : (_projectNavigation_previous = projectNavigation.previous) === null || _projectNavigation_previous === void 0 ? void 0 : _projectNavigation_previous.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/projects/".concat(projectNavigation.previous.id),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4 group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 bg-[#F7F7F9] hover:bg-blue-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 transition-colors duration-200",
                                                    fill: "none",
                                                    stroke: "#6653E8",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M15 19l-7-7 7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: t('projects.projectDetailGeneral.previous')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200",
                                                        children: projectNavigation.previous.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "invisible flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm mb-1",
                                                    children: t('projects.projectDetailGeneral.previous')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-semibold",
                                                    children: "Placeholder"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: (projectNavigation === null || projectNavigation === void 0 ? void 0 : (_projectNavigation_next = projectNavigation.next) === null || _projectNavigation_next === void 0 ? void 0 : _projectNavigation_next.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/projects/".concat(projectNavigation.next.id),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4 group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: t('projects.projectDetailGeneral.next')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200",
                                                        children: projectNavigation.next.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 bg-[#F7F7F9] hover:bg-blue-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 transition-colors duration-200",
                                                    fill: "none",
                                                    stroke: "#6653E8",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                        lineNumber: 216,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "invisible flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm mb-1",
                                                    children: t('projects.projectDetailGeneral.next')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-semibold",
                                                    children: "Placeholder"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                similarProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-8",
                            children: t('projectDetails.similarProjects', 'Proyectos Similares')
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: similarProjects.map((similarProject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/projects/".concat(similarProject.id),
                                    className: "group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: similarProject.image,
                                                    alt: similarProject.title,
                                                    className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300",
                                                    width: 400,
                                                    height: 192,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 left-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-blue-700 text-white px-2 py-1 text-xs font-semibold rounded shadow-sm",
                                                        children: similarProject.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200",
                                                    children: similarProject.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm line-clamp-2",
                                                    children: similarProject.shortDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors duration-200",
                                                        children: [
                                                            t('projects.viewProject', 'Ver proyecto'),
                                                            " →"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, similarProject.id, true, {
                                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                                    lineNumber: 254,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectDetailsClient, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ProjectDetailsClient;
const __TURBOPACK__default__export__ = ProjectDetailsClient;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
;
;
const SEO = (param)=>{
    let { title, description, keywords, type = 'website', image = '/og-image.jpg', url = '/', author = 'Friendsoft', siteName = 'Friendsoft', locale = 'es_ES', alternateLocales = [
        'en_US'
    ] } = param;
    const finalTitle = title || 'Friendsoft - Desarrollo de Software';
    const finalDescription = description || 'Desarrollo profesional de software y soluciones tecnológicas';
    const finalKeywords = keywords || 'desarrollo de software, desarrollo web, aplicaciones móviles';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: finalTitle
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: finalDescription
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: finalKeywords
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "author",
                content: author
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "robots",
                content: "index, follow"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "language",
                content: locale
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: type
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: finalTitle
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: finalDescription
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: url
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:site_name",
                content: siteName
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:locale",
                content: locale
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            alternateLocales.map((altLocale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    property: "og:locale:alternate",
                    content: altLocale
                }, altLocale, false, {
                    fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: finalTitle
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: finalDescription
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "theme-color",
                content: "#7B43D6"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "msapplication-TileColor",
                content: "#7B43D6"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: url
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                href: "/public/images/logo.svg"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous"
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SEO;
const __TURBOPACK__default__export__ = SEO;
var _c;
__turbopack_context__.k.register(_c, "SEO");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/utils/projectsDataGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectDetailsClient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/components/SEO.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProjectPageClient(param) {
    let { projectId } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [similarProjects, setSimilarProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projectNavigation, setProjectNavigation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPageClient.useEffect": ()=>{
            if (t) {
                const projectData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"])(projectId, t);
                if (!projectData) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
                    return;
                }
                const similarProjectsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSimilarProjects"])(projectId, t);
                const projectNavigationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectNavigation"])(projectId, t);
                setProject(projectData);
                setSimilarProjects(similarProjectsData);
                setProjectNavigation(projectNavigationData);
                setLoading(false);
            }
        }
    }["ProjectPageClient.useEffect"], [
        projectId,
        t
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg",
                children: t('common.loading', 'Cargando...')
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "".concat(project.title, " | ").concat(t('seo.projects.title', 'Portfolio de Proyectos | Friendsoft')),
                description: project.shortDescription,
                keywords: "".concat(project.category, ", ").concat(project.client, ", ").concat(project.services.join(', '), ", proyecto, caso de éxito"),
                type: "article",
                image: project.image,
                url: "/projects/".concat(project.id)
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                project: project,
                similarProjects: similarProjects,
                projectNavigation: projectNavigation
            }, void 0, false, {
                fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProjectPageClient, "R+SuzvkK4zLTI3YKk9QrqmhAgCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ProjectPageClient;
var _c;
__turbopack_context__.k.register(_c, "ProjectPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoopHead;
    }
});
function NoopHead() {
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-head.js.map
}),
]);

//# sourceMappingURL=Documents_work_person_mi-pagina-old_mi-pagina-nextjs_f42fcc7b._.js.map