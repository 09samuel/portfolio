export interface ProjectLink {
    label: string;
    url: string;
    icon: "website" | "github" | "video";
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    bullets: string[];
    techStack: string[];
    imagePath: string;
    links: ProjectLink[];
}

export const projectsData: Project[] = [
    {
        id: "databasedump",
        title: "DatabaseDump",
        shortDescription: "A multi-tenant SaaS platform for automated database backups, supporting MySQL, PostgreSQL, and MongoDB with AWS S3 integration.",
        bullets: [
            "Designed and built a multi-tenant SaaS platform for automated database backup and recovery, supporting MySQL, PostgreSQL, and MongoDB across multiple client environments.",
            "Implemented scheduled backups and configurable retention policies, reliably managing hundreds of backup jobs per day.",
            "Integrated with client-managed AWS S3 buckets for secure, tenant-isolated backup storage, enabling on-demand restore and downloads and improving disaster recovery workflows.",
            "Reduced backup storage size by 30%+ and ensured data integrity by implementing compression and checksum-based verification across all database dump artifacts."
        ],
        techStack: ["React", "TailwindCSS", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "AWS S3", "AWS ECS", "AWS RDS", "GitHub Actions"],
        imagePath: "/images/databasedump-screenshot.webp", 
        links: [
            { label: "Live Demo", url: "http://databasedump.me/", icon: "website" },
            { label: "Source Code", url: "https://github.com/09samuel/DatabaseDump", icon: "github" }
        ]
    },
    {
        id: "codekeeper",
        title: "CodeKeeper",
        shortDescription: "A real-time collaborative code editor with conflict-free document synchronization using Yjs CRDT, WebSockets, and cloud-based document storage.",
        bullets: [
            "Designed, built, and deployed a real-time collaborative code editor, actively supporting real-time multi-user editing in production.",
            "Developed the backend using Node.js and Yjs CRDT, enabling conflict-free document synchronization under low latency.",
            "Integrated CodeMirror 6 with Angular to implement live cursor tracking and text selection highlights in a responsive UI, improving multi-user collaboration responsiveness across devices.",
            "Built a RESTful API backend with Node.js and Express.js, implementing JWT-based authentication, RBAC, and MongoDB, and integrated AWS S3 for document storage."
        ],
        techStack: ["Angular", "TailwindCSS", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebSockets", "AWS S3", "GitHub Actions"],
        imagePath: "/images/codekeeper-screenshot.webp", 
        links: [
            { label: "Live Demo", url: "https://codekeeper-nu.vercel.app/", icon: "website" },
            { label: "Source Code", url: "https://github.com/09samuel/codekeeper", icon: "github" },
            { label: "Demo Video", url: "https://drive.google.com/file/d/1Um7e37ChdT5ik6MXhxdgSgnfcvnw2ppE/view?usp=sharing", icon: "video" }
        ]
    },
    {
        id: "livescribe",
        title: "LiveScribe",
        shortDescription: "A cross-platform desktop app providing real-time transcription overlays and AI-generated summaries using Whisper and Transformers.",
        bullets: [
            "Built a cross-platform desktop application using Electron and React to display real-time transcription overlays on any active application.",
            "Implemented low-latency speech-to-text using Python realtimeSTT with Whisper tiny.en and large-v2 models.",
            "Integrated a Long-T5 Transformer model in a Flask backend to auto-generate summaries, reducing manual note-taking time by 80%.",
            "Developed a Node.js and Express.js REST API backend with MongoDB integration to store transcripts and summaries with fast search and retrieval capabilities."
        ],
        techStack: [ "React", "Electron", "Flask", "Express.js", "MongoDB", "Python", "Transformers"],
        imagePath: "/images/livescribe-screenshot.webp",
        links: [
            { label: "Source Code", url: "https://github.com/09samuel/live-scribe", icon: "github" },
            { label: "Demo Video", url: "https://drive.google.com/file/d/1T6mwD9k7a0aI6vBk7nnkWj1r6lCPqXel/view?usp=sharing", icon: "video" }
        ]
    },
    {
        id: "idtiemonitor",
        title: "IDTieMonitor",
        shortDescription: "A real-time computer vision system using YOLO and DeepFace to perform facial recognition and uniform compliance monitoring.",
        bullets: [
            "Designed and built a real-time computer vision pipeline integrating YOLO and DeepFace to automate uniform compliance monitoring and facial recognition.",
            "Implemented FAISS (Facebook AI Similarity Search) to enable high-speed vector similarity searches for facial recognition matches against a MongoDB database.",
            "Developed a responsive frontend in Angular to display live video streams, real-time alert logs, and compliance dashboard analytics.",
            "Engineered a low-latency backend with FastAPI to handle video stream inference processing and event-driven logging."
        ],
        techStack: ["Angular", "FastAPI", "MongoDB", "FAISS", "YOLO", "DeepFace"],
        imagePath: "/images/idtiemonitor-screenshot.webp",
        links: [
            { label: "Source Code", url: "https://github.com/09samuel/IDTieMonitor", icon: "github" }
        ]
    }
];