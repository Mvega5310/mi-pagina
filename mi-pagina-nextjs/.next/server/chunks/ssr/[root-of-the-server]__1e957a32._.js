module.exports = [
"[project]/.next-internal/server/app/projects/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/utils/projectsDataGenerator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECT_IDS",
    ()=>PROJECT_IDS,
    "generateProjectsData",
    ()=>generateProjectsData,
    "getProjectById",
    ()=>getProjectById,
    "getProjectByIdStatic",
    ()=>getProjectByIdStatic,
    "getSimilarProjects",
    ()=>getSimilarProjects,
    "getSimilarProjectsStatic",
    ()=>getSimilarProjectsStatic
]);
// Project IDs that exist in the translation files
const PROJECT_IDS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
];
// Image mapping for projects
const PROJECT_IMAGES = {
    '1': '/images/projects/section1-imagen1.webp',
    '2': '/images/projects/section1-imagen3.webp',
    '3': '/images/projects/section1-imagen5.webp',
    '4': '/images/projects/section1-imagen1.webp',
    '5': '/images/projects/section1-imagen3.webp',
    '6': '/images/projects/section1-imagen5.webp',
    '7': '/images/projects/section1-imagen1.webp',
    '8': '/images/projects/section1-imagen3.webp',
    '9': '/images/projects/section1-imagen5.webp',
    '10': '/images/projects/section1-imagen1.webp',
    '11': '/images/projects/section1-imagen3.webp',
    '12': '/images/projects/section1-imagen5.webp'
};
// Children images mapping
const CHILDREN_IMAGES = {
    '1': '/images/projects/section1-imagen2.webp',
    '2': '/images/projects/section1-imagen4.webp',
    '3': '/images/projects/section1-imagen6.webp',
    '4': '/images/projects/section1-imagen2.webp',
    '5': '/images/projects/section1-imagen4.webp',
    '6': '/images/projects/section1-imagen6.webp',
    '7': '/images/projects/section1-imagen2.webp',
    '8': '/images/projects/section1-imagen4.webp',
    '9': '/images/projects/section1-imagen6.webp',
    '10': '/images/projects/section1-imagen2.webp',
    '11': '/images/projects/section1-imagen4.webp',
    '12': '/images/projects/section1-imagen6.webp'
};
// Similar projects mapping
const SIMILAR_PROJECTS = {
    '1': [
        '12'
    ],
    '2': [
        '1',
        '4',
        '6'
    ],
    '3': [
        '1',
        '2',
        '7'
    ],
    '4': [
        '8',
        '9'
    ],
    '5': [
        '1',
        '3'
    ],
    '6': [
        '2',
        '9'
    ],
    '7': [
        '3',
        '6'
    ],
    '8': [
        '4',
        '9'
    ],
    '9': [
        '6',
        '8'
    ],
    '10': [
        '11',
        '12'
    ],
    '11': [
        '10',
        '12'
    ],
    '12': [
        '7',
        '11'
    ]
};
const generateProjectsData = (t)=>{
    return PROJECT_IDS.map((id)=>{
        // Get services array directly from translation (it's already an array in the JSON)
        const services = t(`projects.projectDetails.${id}.services`, '');
        const projectData = {
            id,
            title: t(`projects.projectDetails.${id}.title`, `Project ${id}`),
            category: t(`projects.projectDetails.${id}.category`, 'General'),
            color: t(`projects.projectDetails.${id}.color`, 'bg-blue-100 text-blue-600'),
            client: t(`projects.projectDetails.${id}.client`, 'Client'),
            services: Array.isArray(services) ? services : [],
            shortDescription: t(`projects.projectDetails.${id}.shortDescription`, 'Short description'),
            longDescription: t(`projects.projectDetails.${id}.longDescription`, 'Long description'),
            results: t(`projects.projectDetails.${id}.results`, 'Results'),
            image: PROJECT_IMAGES[id] || '/default-image.jpg',
            fallback: PROJECT_IMAGES[id] || '/default-image.jpg',
            similar: SIMILAR_PROJECTS[id] || [],
            children: {
                category: t(`projects.projectDetails.${id}.category`, 'General'),
                title: t(`projects.projectDetails.${id}.title`, `Project ${id}`),
                image: CHILDREN_IMAGES[id] || '/default-image.jpg'
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
    const similarIds = SIMILAR_PROJECTS[id] || [];
    const allProjects = generateProjectsData(t);
    const similarProjects = allProjects.filter((project)=>similarIds.includes(project.id));
    return similarProjects;
};
const generateProjectsDataStatic = (t)=>{
    return PROJECT_IDS.map((id)=>{
        const services = t(`home.projectDetails.${id}.services`);
        const projectData = {
            id,
            title: t(`projects.projectDetails.${id}.title`, `Proyecto ${id}`),
            category: t(`projects.projectDetails.${id}.category`, 'General'),
            color: t(`projects.projectDetails.${id}.color`, 'bg-blue-100 text-blue-600'),
            client: t(`projects.projectDetails.${id}.client`, 'Cliente'),
            services: Array.isArray(services) ? services : [],
            shortDescription: t(`projects.projectDetails.${id}.shortDescription`, 'Descripción corta del proyecto'),
            longDescription: t(`projects.projectDetails.${id}.longDescription`, 'Descripción detallada del proyecto'),
            results: t(`projects.projectDetails.${id}.results`, 'Resultados del proyecto'),
            image: PROJECT_IMAGES[id] || '/default-image.jpg',
            fallback: PROJECT_IMAGES[id] || '/default-image.jpg',
            similar: SIMILAR_PROJECTS[id] || [],
            children: {
                category: t(`projects.projectDetails.${id}.category`, 'General'),
                title: t(`projects.projectDetails.${id}.children.title`, `Proyecto Relacionado ${id}`),
                image: CHILDREN_IMAGES[id] || '/default-image.jpg'
            }
        };
        return projectData;
    });
};
const getProjectByIdStatic = (id, t)=>{
    if (!PROJECT_IDS.includes(id)) {
        return null;
    }
    const projects = generateProjectsDataStatic(t);
    const project = projects.find((project)=>project.id === id) || null;
    return project;
};
const getSimilarProjectsStatic = (id, t)=>{
    const similarIds = SIMILAR_PROJECTS[id] || [];
    const allProjects = generateProjectsDataStatic(t);
    const similarProjects = allProjects.filter((project)=>similarIds.includes(project.id));
    return similarProjects;
};
;
}),
"[project]/src/app/projects/[id]/ProjectDetailsClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/projects/[id]/ProjectDetailsClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/projects/[id]/ProjectDetailsClient.tsx <module evaluation>", "default");
}),
"[project]/src/app/projects/[id]/ProjectDetailsClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/projects/[id]/ProjectDetailsClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/projects/[id]/ProjectDetailsClient.tsx", "default");
}),
"[project]/src/app/projects/[id]/ProjectDetailsClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/projects/[id]/ProjectDetailsClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/projects/[id]/ProjectDetailsClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/projectsDataGenerator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/projects/[id]/ProjectDetailsClient.tsx [app-rsc] (ecmascript)");
;
;
;
async function generateMetadata({ params }) {
    const { id } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectByIdStatic"])(id, mockT);
    if (!project) {
        return {
            title: 'Proyecto no encontrado | Friendsoft',
            description: 'El proyecto solicitado no fue encontrado.'
        };
    }
    return {
        title: `${project.title} | Portfolio de Proyectos | Friendsoft`,
        description: project.shortDescription,
        keywords: `${project.category}, ${project.client}, ${project.services.join(', ')}, proyecto, caso de éxito`,
        openGraph: {
            type: 'article',
            title: `${project.title} | Portfolio de Proyectos | Friendsoft`,
            description: project.shortDescription,
            images: [
                project.image
            ],
            url: `/projects/${id}`
        }
    };
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECT_IDS"].map((id)=>({
            id: id
        }));
}
// Simple translation function for static generation
const mockT = (key, fallback)=>fallback || key;
const ProjectDetails = async ({ params })=>{
    const { id } = await params;
    // Get project data
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectByIdStatic"])(id, mockT);
    const similarProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSimilarProjectsStatic"])(id, mockT);
    const translations = {
        home: 'Inicio',
        projects: 'Proyectos',
        description: 'Descripción del Proyecto',
        results: 'Resultados del Proyecto',
        category: 'Categoría',
        client: 'Cliente',
        services: 'Servicios',
        relatedProject: 'Proyecto Relacionado',
        similarProjects: 'Proyectos Similares',
        backToProjects: 'Volver a Proyectos'
    };
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[id]/page.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$id$5d2f$ProjectDetailsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            project: project,
            similarProjects: similarProjects,
            translations: translations
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[id]/page.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/projects/[id]/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProjectDetails;
}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1e957a32._.js.map