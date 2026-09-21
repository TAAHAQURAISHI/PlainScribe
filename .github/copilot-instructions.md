## PlainScribe AI Coding Constraints

State & Validation: Forms must strictly use react-hook-form and zod for state and validation; never use native uncontrolled inputs.

Accessibility: UI elements must utilize standard accessible components from our installed shadcn/ui library (e.g., <Input>, <Select>) rather than custom styling on native HTML elements.

Testing: Every form component and Zod schema must include a corresponding Vitest schema validation file.