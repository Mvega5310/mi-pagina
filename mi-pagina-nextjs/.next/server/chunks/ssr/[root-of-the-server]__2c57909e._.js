module.exports = [
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/.next-internal/server/app/projects/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/utils/projectsDataGenerator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
const getProjectNavigation = (id, t)=>{
    const numericId = +getNumericId(id);
    const previousNumericId = numericId - 1;
    const nextNumericId = numericId + 1;
    const previousProject = getProjectById(getProjectId(previousNumericId?.toString()), t);
    const nextProject = getProjectById(getProjectId(nextNumericId?.toString()), t);
    return {
        previous: {
            id: previousProject?.id || "",
            title: previousProject?.title || ""
        },
        next: {
            id: nextProject?.id || "",
            title: nextProject?.title || ""
        }
    };
};
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx <module evaluation>", "default");
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx", "default");
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/utils/projectsDataGenerator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/ProjectPageClient.tsx [app-rsc] (ecmascript)");
;
;
;
// Mock translation function for SSG that implements TFunction interface
const mockTranslation = (key, defaultValue)=>{
    return defaultValue || key.split('.').pop() || key;
};
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECT_IDS"].map((id)=>({
            id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectById"])(id, mockTranslation);
    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.'
        };
    }
    return {
        title: `${project.title} | Portfolio de Proyectos | Friendsoft`,
        description: project.shortDescription,
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: [
                project.image
            ]
        }
    };
}
async function ProjectPage({ params }) {
    const { id } = await params;
    // Verify project exists for SSG
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectById"])(id, mockTranslation);
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Project not found"
        }, void 0, false, {
            fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/page.tsx",
            lineNumber: 49,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$work$2f$person$2f$mi$2d$pagina$2d$old$2f$mi$2d$pagina$2d$nextjs$2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        projectId: id
    }, void 0, false, {
        fileName: "[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/page.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
}),
"[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/work/person/mi-pagina-old/mi-pagina-nextjs/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2c57909e._.js.map