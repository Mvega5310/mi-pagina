(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SEO.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const SEO = (param)=>{
    let { title, description, keywords, type = 'website', image = '/og-image.jpg', url = '/', author = 'Friendsoft', siteName = 'Friendsoft', locale = 'es_ES', alternateLocales = [
        'en_US'
    ] } = param;
    _s();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const currentLocale = i18n.language === 'en' ? 'en_US' : 'es_ES';
    const finalTitle = title || t('seo.default.title', 'Friendsoft - Desarrollo de Software');
    const finalDescription = description || t('seo.default.description', 'Desarrollo profesional de software y soluciones tecnológicas');
    const finalKeywords = keywords || t('seo.default.keywords', 'desarrollo de software, desarrollo web, aplicaciones móviles');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: finalTitle
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: finalDescription
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: finalKeywords
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "author",
                content: author
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "robots",
                content: "index, follow"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "language",
                content: currentLocale
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: type
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: finalTitle
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: finalDescription
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: url
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:site_name",
                content: siteName
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:locale",
                content: currentLocale
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            alternateLocales.map((altLocale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    property: "og:locale:alternate",
                    content: altLocale
                }, altLocale, false, {
                    fileName: "[project]/src/components/SEO.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: finalTitle
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: finalDescription
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:image",
                content: image
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "theme-color",
                content: "#7B43D6"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "msapplication-TileColor",
                content: "#7B43D6"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: url
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                href: "/public/images/logo.svg"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SEO.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SEO, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = SEO;
const __TURBOPACK__default__export__ = SEO;
var _c;
__turbopack_context__.k.register(_c, "SEO");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/projectsDataGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        const services = t("projects.projectDetails.".concat(id, ".services"), '');
        const projectData = {
            id,
            title: t("projects.projectDetails.".concat(id, ".title"), "Project ".concat(id)),
            category: t("projects.projectDetails.".concat(id, ".category"), 'General'),
            color: t("projects.projectDetails.".concat(id, ".color"), 'bg-blue-100 text-blue-600'),
            client: t("projects.projectDetails.".concat(id, ".client"), 'Client'),
            services: Array.isArray(services) ? services : [],
            shortDescription: t("projects.projectDetails.".concat(id, ".shortDescription"), 'Short description'),
            longDescription: t("projects.projectDetails.".concat(id, ".longDescription"), 'Long description'),
            results: t("projects.projectDetails.".concat(id, ".results"), 'Results'),
            image: PROJECT_IMAGES[id] || '/default-image.jpg',
            fallback: PROJECT_IMAGES[id] || '/default-image.jpg',
            similar: SIMILAR_PROJECTS[id] || [],
            children: {
                category: t("projects.projectDetails.".concat(id, ".category"), 'General'),
                title: t("projects.projectDetails.".concat(id, ".title"), "Project ".concat(id)),
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
        const services = t("home.projectDetails.".concat(id, ".services"));
        const projectData = {
            id,
            title: t("projects.projectDetails.".concat(id, ".title"), "Proyecto ".concat(id)),
            category: t("projects.projectDetails.".concat(id, ".category"), 'General'),
            color: t("projects.projectDetails.".concat(id, ".color"), 'bg-blue-100 text-blue-600'),
            client: t("projects.projectDetails.".concat(id, ".client"), 'Cliente'),
            services: Array.isArray(services) ? services : [],
            shortDescription: t("projects.projectDetails.".concat(id, ".shortDescription"), 'Descripción corta del proyecto'),
            longDescription: t("projects.projectDetails.".concat(id, ".longDescription"), 'Descripción detallada del proyecto'),
            results: t("projects.projectDetails.".concat(id, ".results"), 'Resultados del proyecto'),
            image: PROJECT_IMAGES[id] || '/default-image.jpg',
            fallback: PROJECT_IMAGES[id] || '/default-image.jpg',
            similar: SIMILAR_PROJECTS[id] || [],
            children: {
                category: t("projects.projectDetails.".concat(id, ".category"), 'General'),
                title: t("projects.projectDetails.".concat(id, ".children.title"), "Proyecto Relacionado ".concat(id)),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEO.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/projectsDataGenerator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Projects Carousel Component
const ProjectsCarousel = (param)=>{
    let { projects } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    // Don't render if no projects
    if (projects.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-lg",
                children: t('projects.noProjects', 'No hay proyectos disponibles')
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
            role: "grid",
            "aria-label": t('projects.gridLabel', 'Portfolio de proyectos'),
            children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "group relative bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg",
                    role: "gridcell",
                    "aria-labelledby": "project-title-".concat(project.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            style: {
                                height: '240px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            srcSet: project.image,
                                            type: "image/webp"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.fallback,
                                            alt: "".concat(project.title, " - ").concat(project.category),
                                            className: "w-full h-full object-cover",
                                            width: "400",
                                            height: "240",
                                            loading: index < 3 ? 'eager' : 'lazy',
                                            decoding: index < 3 ? 'sync' : 'async'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-85 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-white p-4 sm:p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg sm:text-xl font-bold mb-2",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 line-clamp-3",
                                                children: project.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/projects/".concat(project.id),
                                                className: "bg-white text-gray-900 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded inline-block",
                                                "aria-label": "".concat(t('projects.viewProject'), ": ").concat(project.title),
                                                children: t('projects.viewProject', 'Discover more')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 sm:top-4 left-3 sm:left-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-700 text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded shadow-sm",
                                        role: "badge",
                                        "aria-label": "Categoría: ".concat(project.category),
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-700 text-xs sm:text-sm font-semibold",
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "project-title-".concat(project.id),
                                    className: "text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-sm leading-relaxed line-clamp-3",
                                    children: project.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 sm:mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/projects/".concat(project.id),
                                        className: "text-blue-700 text-sm sm:text-base font-semibold hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1",
                                        "aria-label": "".concat(t('projects.viewProject'), ": ").concat(project.title),
                                        children: t('projects.viewProject', 'Discover more')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, project.id, true, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectsCarousel, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ProjectsCarousel;
const ProjectsPage = ()=>{
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    // Generate projects data from translations
    const projectsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$projectsDataGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateProjectsData"])(t);
    // Preload critical images for LCP optimization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsPage.useEffect": ()=>{
            const preloadImages = [
                "/images/projects/section1-imagen1.webp",
                "/images/projects/section1-imagen2.webp",
                "/images/projects/section1-imagen3.webp"
            ];
            preloadImages.forEach({
                "ProjectsPage.useEffect": (src)=>{
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = src;
                    link.type = 'image/webp';
                    document.head.appendChild(link);
                }
            }["ProjectsPage.useEffect"]);
        }
    }["ProjectsPage.useEffect"], []);
    // Map images to projects data
    const imageMap = {
        '1': {
            webp: "/images/projects/section1-imagen1.webp",
            jpg: "/images/projects/section1-imagen1.jpg"
        },
        '2': {
            webp: "/images/projects/section1-imagen2.webp",
            jpg: "/images/projects/section1-imagen2.jpg"
        },
        '3': {
            webp: "/images/projects/section1-imagen3.webp",
            jpg: "/images/projects/section1-imagen3.jpg"
        },
        '4': {
            webp: "/images/projects/section1-imagen4.webp",
            jpg: "/images/projects/section1-imagen4.jpg"
        },
        '5': {
            webp: "/images/projects/section1-imagen5.webp",
            jpg: "/images/projects/section1-imagen5.jpg"
        },
        '6': {
            webp: "/images/projects/section1-imagen6.webp",
            jpg: "/images/projects/section1-imagen6.jpg"
        }
    };
    // Combine projects data with images
    const projects = projectsData.map((project)=>{
        var _imageMap_project_id, _imageMap_project_id1;
        return {
            ...project,
            image: ((_imageMap_project_id = imageMap[project.id]) === null || _imageMap_project_id === void 0 ? void 0 : _imageMap_project_id.webp) || project.image,
            fallback: ((_imageMap_project_id1 = imageMap[project.id]) === null || _imageMap_project_id1 === void 0 ? void 0 : _imageMap_project_id1.jpg) || project.image
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: t('seo.projects.title', 'Portfolio de Proyectos | Friendsoft'),
                description: t('seo.projects.description', 'Explora nuestro portfolio de proyectos exitosos en desarrollo de software, aplicaciones web y móviles. Casos de éxito y soluciones innovadoras.'),
                keywords: t('seo.projects.keywords', 'portfolio proyectos, casos éxito, desarrollo software, aplicaciones web, aplicaciones móviles, soluciones tecnológicas'),
                type: "website",
                image: '/images/projects/section1-imagen1.webp',
                url: "/projects"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectsCarousel, {
                        projects: projects
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ProjectsPage, "yIHkV3cUFHCxFeD16vLIxDL2JDQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = ProjectsPage;
const __TURBOPACK__default__export__ = ProjectsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectsCarousel");
__turbopack_context__.k.register(_c1, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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

//# sourceMappingURL=_94b88ce9._.js.map