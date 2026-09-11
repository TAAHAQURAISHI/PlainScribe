PlainScribe Project Context

Stack: Vite, React, Tailwind CSS, shadcn/ui (Nova preset).

Goal: Frontend application that transforms dense legal documents into structured, plain-language summaries.

Current Status: Executing Week 2 workflow drill (comparing vague vs. precise AI prompts).

## Settings Form Decision

The `feature/vague-settings-form` branch begins with a deliberately minimal,
standalone settings screen. It provides visual summary preferences only:
reading level, summary detail, and source passages. The first implementation
does not persist settings, connect to a model provider, or imply a backend
submission contract. This keeps the branch focused on comparing the results of
a vague product prompt before requirements are made more precise.