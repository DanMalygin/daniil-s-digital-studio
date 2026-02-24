export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  pdfURL?: string;
}

export const projects: Project[] = [
  {
    id: "project-password-generator",
    title: "Secure Password Generator",
    subtitle: "JavaScript, HTML, CSS • Feb 2026",
    description: "Password generator with guaranteed character type inclusion and Fisher-Yates shuffle to eliminate positional bias. Features a modern flexbox UI with clipboard API integration for seamless copy functionality.",
    tags: ["JavaScript", "HTML", "CSS"],
    year: "2026",
    githubUrl: "https://github.com/DanMalygin/password-generator",
    liveUrl: "https://danmalygin.github.io/password-generator/",
  },
  {
    id: "project-asr-robots",
    title: "Real-Time Incremental ASR System",
    subtitle: "Python, ONNX, AI • May 2025 – Jul 2025",
    description: "Real-time streaming speech recognition pipeline for human-robot interaction. Replaced cloud-based recognition with an offline incremental model, reducing latency and improving transcription stability.",
    tags: ["Python", "Sherpa-ONNX", "ONNX Runtime", "PyTorch"],
    year: "2025",
    pdfURL: "/mythesis.pdf",
  }]