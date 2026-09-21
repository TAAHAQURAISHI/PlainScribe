Workflow comparison: vague prompt vs. precise prompt

## Summary
The branch comparison shows a clear difference between a minimal mockup and a more deliberate UI implementation. The `feature/vague-settings-form` branch creates a static settings screen with native form elements and no validation logic. The `feature/Precise-settings` branch introduces a more structured component layout and a clearer settings intent, but it still remains a front-end prototype rather than a complete validated form workflow.

## 1. Diff assessment
The vague branch in `src/components/settingsForm.jsx` defines a simple settings section with a `settings` array, native `<select>` fields, a checkbox, and a button labeled “Continue to PlainScribe.” `src/App.jsx` simply imports that component and wraps it in a shell container. This implementation is visually complete, but it is not stateful, validated, or reusable beyond the screen itself.

The precise branch alters the import path in `src/App.jsx` and reorganizes the form under a more explicit `forms` directory, indicating a more maintainable component structure. This is a meaningful improvement in code organization, but the functional difference remains limited: the screen still functions primarily as a visual configuration surface, not as a production-ready form with validation and submission logic.

## 2. Correctness and edge cases
A concrete AI failure in the vague branch is the use of bare HTML controls instead of the project’s shadcn/ui component system. The form relies on native `<select>` and checkbox inputs rather than the repo’s established patterns, which creates a mismatch with the project’s design system and can reduce accessibility consistency and keyboard interaction quality.

The same issue applies to edge-case handling. The vague form does not validate empty state, long strings, or invalid input. The precise branch improves structure and intent, but it still does not demonstrate real validation logic or guarded submit behavior. In that sense, the prompt quality improves the design process, but it does not yet guarantee correctness for production use.

## 3. Accessibility and review effort
Accessibility remains a primary concern because the branch diff does not show the kind of controlled, component-driven behavior expected from shadcn-based primitives. In practical terms, this means the AI-generated output still requires human review to check compliance, consistency, and behavior beyond the initial visual pass.

Review effort follows the same pattern. The vague prompt is fast to produce, but it creates more correction work because the model ignores project conventions. The more precise prompt takes longer to craft, but it reduces ambiguity and makes the resulting code easier to assess and refine. This produces a smaller correction loop, though not a fully validated implementation.

## Second Model Comparison (Stretch Goal)
To test how different AI tools handle precise constraints, the exact Round 2 prompt was run through Gemini as a secondary model. While both GitHub Copilot and Gemini successfully utilized `react-hook-form`, `zod`, and the required `shadcn/ui` components, their architectural choices diverged significantly. Copilot generated the Zod schema directly inside the component file, whereas Gemini proactively extracted the schema into a dedicated `settingsSchema.js` file to ensure clean, isolated imports for Vitest. Furthermore, Copilot's generated test focused primarily on a basic "happy path" validation. Gemini, by contrast, generated a more comprehensive test suite that explicitly checked the edge case of the 50-character limit on the keyword input. This comparison demonstrates that while a precise prompt guarantees correct tool usage across models, different AI engines will still diverge on separation of concerns and test thoroughness.

## Conclusion
The precise prompt is materially better for structuring AI work, but the branch comparison shows that prompt quality alone does not replace engineering review. The better workflow reduces rework and improves maintainability, yet correctness, validation, and accessibility still require explicit human verification.