// Add a new project by adding an object to this array —
// no component code needs to change.
export const projects = [
  {
    id: "imdb-medallion",
    title: "IMDB Medallion Pipeline",
    summary:
      "Problem: raw IMDB movies, TV shows, and cast data needed to become analytics-ready datasets for reporting and dashboards. Approach: designed an end-to-end medallion architecture using Google Cloud Storage, BigQuery, Dataproc, and Cloud Composer; built Python ingestion services pulling data from RapidAPI, then distributed PySpark transformations on Dataproc for cleansing and standardization. Outcome: idempotent, analytics-ready Gold datasets powering Looker dashboards for movie rankings, ratings, and cast insights.",
    tags: ["GCP", "Cloud Composer", "Dataproc", "BigQuery", "Looker", "PySpark"],
    thumbnailType: "schematic",
    codeUrl: "https://github.com/Sujit8459/imdb-medallion-pipeline",
    caseStudyUrl: null,
  },
  {
    id: "olympics-pipeline",
    title: "Olympics 2021 Data Pipeline",
    summary:
      "Problem: raw Tokyo Olympics datasets (athletes, coaches, teams, medals, participation) needed to become trusted, analytics-ready warehouse tables. Approach: built a Bronze-Silver-Gold medallion pipeline with PySpark and Delta Lake, modeling a Galaxy Schema with fact and dimension tables using surrogate keys from Spark Window Functions, plus an automated data quality framework for referential integrity and duplicate detection. Outcome: trusted KPI datasets for country performance, gender equality, and coach coverage, cutting manual data prep.",
    tags: ["PySpark", "Delta Lake", "GCP", "Kimball", "Data Modeling"],
    thumbnailType: "schematic",
    codeUrl: "https://github.com/Sujit8459/olympics-data-pipeline",
    caseStudyUrl: null,
  },
  {
    id: "smartconnect",
    title: "SmartConnect — Real-Time Chat Platform",
    summary:
      "Problem: existing chat apps lack smart, filter-based ways to find compatible people to talk to. Approach: built a full-stack MERN chat platform with Socket.io real-time messaging, WebRTC audio/video calls, JWT + bcrypt authentication, and AI-assisted filter-based matching by age, location, hobbies, and skills — later extended with Community Hubs, DND mode, PIN-protected hidden chats, and hybrid RSA+AES encryption. Outcome: a published, peer-reviewed chat platform (ICRACE) built and shipped by a 4-person team; I fixed backend crash-loops and resolved UI bugs across five core pages.",
    metrics: ["50+ concurrent users tested", "<80ms message latency", "99.3% delivery success", "JWT + bcrypt auth"],
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC"],
    thumbnailType: "screenshot",
    codeUrl: "https://github.com/Sujit8459/SmartConnect",
    caseStudyUrl: null,
    publication: {
      title: "SmartConnect – A Web-Based Chat Application with Filter-Based Matching and AI Enhancements",
      venue: "ICRACE 2026",
      url: "/certificates/smartconnect-icrace-2026.pdf",
    },
  },
  {
    id: "healthcare-pipeline",
    title: "Healthcare Data Engineering Pipeline",
    summary:
      "Problem: hospital datasets (patient, provider, claims, encounter, transaction, CPT code data) arrive raw and inconsistent across multiple sources with no historical tracking. Approach: architecting a Bronze-Silver-Gold medallion pipeline with data quality validation and duplicate detection to produce reliable, audit-ready datasets. Currently in active development — final architecture and orchestration details still being finalized.",
    tags: ["PySpark", "Delta Lake", "SQL", "Data Quality"],
    thumbnailType: "schematic",
    codeUrl: null,
    caseStudyUrl: null,
    inProgress: true,
  },
];
