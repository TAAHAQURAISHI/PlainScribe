Stack: Vite, React, Tailwind CSS, shadcn/ui (Nova preset).

Goal: Frontend application that transforms dense legal documents into structured, plain-language summaries.

Current Status: Document Settings form implemented for the Week 2 workflow drill.

Vague Settings Form Decision
The feature/vague-settings-form branch begins with a deliberately minimal,
standalone settings screen. It provides visual summary preferences only:
reading level, summary detail, and source passages. The first implementation
does not persist settings, connect to a model provider, or imply a backend
submission contract. This keeps the branch focused on comparing the results of
a vague product prompt before requirements are made more precise.

Precise Settings Form Decision 
The document settings flow uses React Hook Form with Zod validation and shadcn-style controls. It accepts Brief, Balanced, or Thorough detail levels (Balanced by default), a Dyslexia-friendly font toggle (off by default), and an optional keyword capped at 50 characters. Submission is local-only and displays a confirmation; backend and model integration remain out of scope.
