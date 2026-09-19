PlainScribe Project Context

Stack: Vite, React, Tailwind CSS, shadcn/ui (Nova preset).

Goal: Frontend application that transforms dense legal documents into structured, plain-language summaries.

Current Status: Executing Week 2 workflow drill (comparing vague vs. precise AI prompts).

## Settings Form Decision

The `feature/Precise-settings` branch refines the initial minimal settings screen
into a more explicit summary configuration. It provides an audience field,
summary detail choices (`Brief`, `Standard`, and `Detailed`), and a source
passages toggle enabled by default. The form uses controlled React state and
shadcn/ui components, but saving currently only prevents the default form
submission. It does not yet validate, persist settings, connect to a model
provider, or imply a backend submission contract. This keeps the branch focused
on making the settings requirements more precise before adding workflow
integration.
