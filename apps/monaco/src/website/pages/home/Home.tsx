import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import { loadMonaco } from "../../../monaco-loader";
import { Page } from "../../components/Page";
import { Select } from "../../components/Select";
import {
	ControlledMonacoDiffEditor,
	ControlledMonacoEditor,
} from "../../components/monaco/MonacoEditor";
import { ObservablePromise } from "../../utils/ObservablePromise";
import React = require("react");
import { ref } from "../../utils/ref";
import { monacoEditorVersion } from "../../monacoEditorVersion";

export class Home extends React.Component {
	render() {
		return (
			<Page>
				<div className="container py-4">
					<EditorDemo />

					<DiffEditorDemo />
				</div>

				<footer className="container">
					<hr />
					<p className="text-center">
						<a href="https://microsoft.com" title="Microsoft">
							<img
								src="https://opensource.microsoft.com/assets/images/Microsoft_logo.svg"
								alt="Microsoft"
								style={{
									maxHeight: "23px",
									marginBottom: "12px",
								}}
							/>
						</a>
						<br />
						<small>&copy; {process.env.YEAR} Microsoft</small>
					</p>
				</footer>
			</Page>
		);
	}
}

interface Theme {
	id: string;
	name: string;
}

const themes: Theme[] = [
	{
		name: "Visual Studio",
		id: "vs",
	},
	{
		name: "Visual Studio Dark",
		id: "vs-dark",
	},
	{
		name: "High Contrast Dark",
		id: "hc-black",
	},
];

@observer
class EditorDemo extends React.Component {
	languages = new ObservablePromise(
		loadMonaco().then((m) => {
			const languages = m.languages.getLanguages();
			this.currentLanguage = languages.find(
				(l) => l.id === "typescript"
			)!;
			return languages;
		})
	);

	@observable.ref
	currentLanguage: monaco.languages.ILanguageExtensionPoint | undefined =
		undefined;

	@observable.ref
	currentTheme: Theme = themes[0];

	@computed get currentSample(): ObservablePromise<string | undefined> {
		return new ObservablePromise(
			this.currentLanguage
				? this.loadSample(this.currentLanguage.id)
				: Promise.resolve(undefined)
		);
	}

	async loadSample(name: string): Promise<string> {
		const result = (
			await import(`../../data/home-samples/sample.${name}.txt`)
		).default;
		return result;
	}

	render() {
		return (
			<div className="p-5 mb-4">
				<h2>Editor</h2>

				<div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
					<div className="col d-flex align-items-start">
						<div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
						<div>
							<h4>IntelliSense, Validation</h4>
							<p>
								Get completions and errors directly in the
								browser for supported languages. Or write your
								own completion providers in JavaScript.
							</p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
						<div>
							<h4>Basic Syntax Colorization</h4>
							<p>
								Colorize code using our pre-built syntax
								highlighting, or configure your own custom
								colorization.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-4 row row-cols-2">
					<div className="col">
						<label className="control-label">Language</label>
						<Select<monaco.languages.ILanguageExtensionPoint>
							values={this.languages.value || []}
							getLabel={(l) => l.id}
							value={ref(this, "currentLanguage")}
						/>
					</div>
					<div className="col">
						<label className="control-label">Theme</label>
						<Select<Theme>
							values={themes}
							getLabel={(l) => l.name}
							value={ref(this, "currentTheme")}
						/>
					</div>
				</div>

				<div className="mt-2 editor-container" style={{ height: 500 }}>
					<ControlledMonacoEditor
						value={this.currentSample.value || "loading..."}
						language={this.currentLanguage?.id}
						theme={this.currentTheme.id}
						onDidValueChange={() => {}}
					/>
				</div>
			</div>
		);
	}
}

class DiffEditorDemo extends React.Component {
	render() {
		return (
			<div className="p-5 mb-4">
				<h2>Diff Editor</h2>
				Side by side live comparison. Supports all languages out of the
				box.
				<div className="mt-2 editor-container" style={{ height: 500 }}>
					<ControlledMonacoDiffEditor
						originalValue={
							require("../../data/diff-sample/original.txt")
								.default
						}
						modifiedValue={
							require("../../data/diff-sample/modified.txt")
								.default
						}
						language="typescript"
					/>
				</div>
			</div>
		);
	}
}
