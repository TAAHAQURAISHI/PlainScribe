Stack: Vite, React, Tailwind CSS, shadcn/ui (Nova preset).

Goal: Frontend application that transforms dense legal documents into structured, plain-language summaries.

Current Status: Document Settings form implemented for the Week 2 workflow drill.

Implementation decision: the document settings flow uses React Hook Form with Zod validation and shadcn-style controls. It accepts Brief, Balanced, or Thorough detail levels (Balanced by default), a Dyslexia-friendly font toggle (off by default), and an optional keyword capped at 50 characters. Submission is local-only and displays a confirmation; backend and model integration remain out of scope.

