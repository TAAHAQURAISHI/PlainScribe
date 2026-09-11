import { BookOpenText, Check, FileText, Quote } from 'lucide-react'

const settings = [
	{
		id: 'reading-level',
		label: 'Reading level',
		description: 'Choose how approachable the rewrite should feel.',
		options: [
			{ value: 'everyday', label: 'Everyday language' },
			{ value: 'professional', label: 'Professional but clear' },
			{ value: 'detailed', label: 'Detailed and precise' },
		],
	},
	{
		id: 'summary-length',
		label: 'Summary detail',
		description: 'Set the amount of context in the first pass.',
		options: [
			{ value: 'brief', label: 'Brief overview' },
			{ value: 'balanced', label: 'Balanced summary' },
			{ value: 'thorough', label: 'Thorough breakdown' },
		],
	},
]

function SettingsForm() {
	return (
		<section className="settings-card" aria-labelledby="settings-title">
			<div className="settings-card__intro">
				<div className="settings-card__icon" aria-hidden="true">
					<BookOpenText size={22} strokeWidth={1.8} />
				</div>
				<p className="eyebrow">PlainScribe preferences</p>
				<h1 id="settings-title">Shape your summaries.</h1>
				<p className="settings-card__lede">
					Set a starting point for turning dense legal writing into something
					easier to understand.
				</p>
			</div>

			<form className="settings-form">
				<div className="settings-form__fields">
					{settings.map(({ id, label, description, options }) => (
						<div className="field" key={id}>
							<label htmlFor={id}>{label}</label>
							<p>{description}</p>
							<select id={id} name={id} defaultValue={options[1].value}>
								{options.map((option) => (
									<option value={option.value} key={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>
					))}
				</div>

				<label className="check-field" htmlFor="show-sources">
					<span className="check-field__box">
						<input id="show-sources" name="show-sources" type="checkbox" defaultChecked />
						<Check size={15} strokeWidth={2.5} aria-hidden="true" />
					</span>
					<span>
						<strong>Show source passages</strong>
						<small>Keep the original language close by for context.</small>
					</span>
				</label>

				<div className="settings-form__note">
					<Quote size={17} aria-hidden="true" />
					<span>Your choices will guide future summaries.</span>
				</div>

				<button className="settings-form__button" type="button">
					<FileText size={17} aria-hidden="true" />
					Continue to PlainScribe
				</button>
			</form>
		</section>
	)
}

export default SettingsForm
