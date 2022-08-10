module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		extraFileExtensions: ['.json'],
	},
	ignorePatterns: ['.eslintrc.js', '**/*.js', '**/node_modules/**', '**/dist/**'],
	settings: {
		jsdoc: {
			mode: 'typescript',
			structuredTags: {
				type: {
					type: true,
					required: ['type'],
				},
			},
			ignoreInternal: true,
		},
	},
	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/community-package-json-author-email-still-default': 'off', //The `author.email` value in the `package.json` of a community package must be different from the default value `jan@n8n.io`.
				'n8n-nodes-base/community-package-json-author-missing': 'error', //The `author` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-author-name-missing': 'error', //The `author.name` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-author-name-still-default': 'off', //The `author.name` value in the `package.json` of a community package must be different from the default value `Jan Oberhauser`.
				'n8n-nodes-base/community-package-json-description-missing': 'error', //The `description` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-description-still-default': 'off', //The `description` value in the `package.json` of a community package must be different from the default value `Example starter module for custom n8n nodes.`.
				'n8n-nodes-base/community-package-json-keywords-missing': 'error', //The `keywords` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-keywords-without-official-tag': 'error', //The `keywords` value in the `package.json` of a community package must be an array containing the value `'n8n-community-node-package'`.
				'n8n-nodes-base/community-package-json-license-missing': 'error', //The `description` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-license-not-default': 'error', //The `license` key in the `package.json` of a community package must be the default value `MIT`.
				'n8n-nodes-base/community-package-json-n8n-api-version-missing': 'error', //The `n8n.n8nNodesApiVersion` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-n8n-api-version-not-number': 'error', //The `n8n.n8nNodesApiVersion` value in the `package.json` of a community package must be a number.
				'n8n-nodes-base/community-package-json-n8n-missing': 'error', //The `n8n` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-n8n-nodes-empty': 'error', //The `n8n.nodes` value in the `package.json` of a community package must contain at least one filepath.
				'n8n-nodes-base/community-package-json-n8n-nodes-missing': 'error', //The `n8n.nodes` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-name-missing': 'error', //The `name` key must be present in the `package.json` of a community package.
				'n8n-nodes-base/community-package-json-name-still-default': 'off', //The `name` key in the `package.json` of a community package must be different from the default value `n8n-nodes-starter`.
				'n8n-nodes-base/community-package-json-repository-url-still-default': 'off', //The `repository.url` value in the `package.json` of a community package must be different from the default value `git+https://github.com/n8n-io/n8n-nodes-starter.git`.
				'n8n-nodes-base/community-package-json-version-missing': 'error', //The `version` key must be present in the `package.json` of a community package.
			},
		},
		{
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/cred-class-field-display-name-miscased': 'error', //`displayName` field in credential class must be title cased.
				'n8n-nodes-base/cred-class-field-display-name-missing-api': 'error', //`displayName` field in credential class must be end with `API`.
				'n8n-nodes-base/cred-class-field-display-name-missing-oauth2': 'error', //`displayName` field in credential class must mention `OAuth2` if the credential is OAuth2.
				'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off', //`documentationUrl` field in credential class must be camel cased. Only applicable to nodes in the main repository.
				'n8n-nodes-base/cred-class-field-documentation-url-missing': 'off', //`documentationUrl` field in credential class must be present.
				'n8n-nodes-base/cred-class-field-documentation-url-not-http-url': 'off', //`documentationUrl` field in credential class must be an HTTP URL. Only applicable to community credentials.
				'n8n-nodes-base/cred-class-field-name-missing-oauth2': 'error', //`name` field in credential class must mention `OAuth2` if the credential is OAuth2.
				'n8n-nodes-base/cred-class-field-name-unsuffixed': 'error', //`name` field in credential class must be suffixed with `-Api`.
				'n8n-nodes-base/cred-class-field-name-uppercase-first-char': 'error', //First char in `name` in credential class must be lowercase.
				'n8n-nodes-base/cred-class-field-placeholder-url-missing-eg': 'error', //`placeholder` for a URL in credential class must be prepended with `e.g.`.
				'n8n-nodes-base/cred-class-field-properties-assertion': 'error', //In a credential class, the field `properties` must be typed `INodeProperties` and individual properties must have no assertions.
				'n8n-nodes-base/cred-class-name-missing-oauth2-suffix': 'error', //Credential class name must mention `OAuth2` if the credential is OAuth2.
				'n8n-nodes-base/cred-class-name-unsuffixed': 'error', //Credential class name must be suffixed with `-Api`.
				'n8n-nodes-base/cred-filename-against-convention': 'error', //Credentials filename must match credentials class name, excluding the filename suffix. Example: `TestApi.credentials.ts` matches `TestApi` in `class TestApi implements ICredentialType`.
			},
		},
		{
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/node-class-description-credentials-name-unsuffixed': 'error', //`name` under `credentials` in node class description must be suffixed with `-Api`.
				'n8n-nodes-base/node-class-description-display-name-unsuffixed-trigger-node': 'error', //`displayName` in node class description for trigger node must be suffixed with `-Trigger`.
				'n8n-nodes-base/node-class-description-empty-string': 'error', //`description` in node class description must be filled out.
				'n8n-nodes-base/node-class-description-icon-not-svg': 'error', //`icon` in node class description should be an SVG icon.
				'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'error', //The number of `inputs` in node class description for regular node should be one, or two for Merge node.
				'n8n-nodes-base/node-class-description-inputs-wrong-trigger-node': 'error', //The number of `inputs` in node class description for trigger node should be zero.
				'n8n-nodes-base/node-class-description-missing-subtitle': 'error', //`subtitle` in node class description must be present.
				'n8n-nodes-base/node-class-description-name-unsuffixed-trigger-node': 'error', //`name` in node class description for trigger node must be suffixed with `-Trigger`.
				'n8n-nodes-base/node-class-description-outputs-wrong': 'error', //The number of `outputs` in node class description for any node must be one, or two for If node, or four for Switch node.
				'n8n-nodes-base/node-dirname-against-convention': 'error', //Node dirname must match node filename, excluding the filename suffix. Example: `Test` node dirname matches `Test` section of `Test.node.ts` node filename.
				'n8n-nodes-base/node-execute-block-double-assertion-for-items': 'error', //In the `execute()` method there is no need to double assert the type of `items.length`.
				'n8n-nodes-base/node-execute-block-error-missing-item-index': 'error', //In the operations in the `execute()` method in a node, `NodeApiError` and `NodeOperationError` must specify `itemIndex` as the third argument.
				'n8n-nodes-base/node-execute-block-missing-continue-on-fail': 'error', //The `execute()` method in a node must implement `continueOnFail` in a try-catch block.
				'n8n-nodes-base/node-execute-block-operation-missing-plural-pairing': 'error', //Every `getAll` operation in the `execute()` method in a node must implement plural pairing.
				'n8n-nodes-base/node-execute-block-operation-missing-singular-pairing': 'error', //Every non-`getAll` operation in the `execute()` method in a node must implement singular pairing.
				'n8n-nodes-base/node-execute-block-wrong-error-thrown': 'error', //The `execute()` method in a node may only throw `NodeApiError` for failed network requests and `NodeOperationError` for internal errors, not the built-in `Error`. Refer to [`NodeErrors.ts`](https://github.com/n8n-io/n8n/blob/master/packages/workflow/src/NodeErrors.ts).
				'n8n-nodes-base/node-filename-against-convention': 'error', //Node filename must match `name` in node class description, excluding the filename suffix. Example: `Test.node.ts` matches `Test` in property `Test.description.name`.
				'n8n-nodes-base/node-param-array-type-assertion': 'error', //Array of node parameters must be typed, not type-asserted.
				'n8n-nodes-base/node-param-collection-type-unsorted-items': 'error', //Items in collection-type node parameter must be alphabetized by `name` if five or more than five.
				'n8n-nodes-base/node-param-color-type-unused': 'error', //`string`-type color-related node parameter must be `color`-type.
				'n8n-nodes-base/node-param-default-missing': 'error', //`default` must be present in a node parameter.
				'n8n-nodes-base/node-param-default-wrong-for-boolean': 'error', //`default` for boolean-type node parameter must be a boolean.
				'n8n-nodes-base/node-param-default-wrong-for-collection': 'error', //`default` for collection-type node parameter must be an object.
				'n8n-nodes-base/node-param-default-wrong-for-fixed-collection': 'error', //`default` for fixed-collection-type node parameter must be an object.
				'n8n-nodes-base/node-param-default-wrong-for-limit': 'error', //`default` for a Limit node parameter must be `50`.
				'n8n-nodes-base/node-param-default-wrong-for-multi-options': 'error', //`default` for a multi-options-type node parameter must be an array.
				'n8n-nodes-base/node-param-default-wrong-for-number': 'error', //`default` for a number-type node parameter must be a number, except for a number-type ID parameter.
				'n8n-nodes-base/node-param-default-wrong-for-options': 'error', //`default` for an options-type node parameter must be one of the options.
				'n8n-nodes-base/node-param-default-wrong-for-simplify': 'error', //`default` for a Simplify node parameter must be `true`.
				'n8n-nodes-base/node-param-default-wrong-for-string': 'error', //`default` for a string-type node parameter must be a string, unless `typeOptions.multipleValues` is set to `true`.
				'n8n-nodes-base/node-param-description-boolean-without-whether': 'error', //`description` in a boolean node parameter must start with `Whether`.
				'n8n-nodes-base/node-param-description-comma-separated-hyphen': 'error', //The string `comma-separated` in `description` must be hyphenated. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-empty-string': 'error', //`description` in node parameter or in option in options-type and multi-options-type param must be filled out or removed. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-excess-final-period': 'error', //`description` in node parameter must end without a final period if a single-sentence description. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-excess-inner-whitespace': 'error', //`description` in node parameter must not contain excess inner whitespace. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-identical-to-display-name': 'error', //`description` in node parameter must not be identical to `displayName`.
				'n8n-nodes-base/node-param-description-line-break-html-tag': 'error', //`description` in node parameter must not contain an HTML line break. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-lowercase-first-char': 'error', //First char in `description` in node parameter must be uppercase. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-miscased-id': 'error', //`ID` in `description` in node parameter must be fully uppercased. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-miscased-json': 'error', //`JSON` in `description` in node parameter must be fully uppercased. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-miscased-url': 'error', //`URL` in `description` in node parameter must be fully uppercased. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-missing-final-period': 'error', //`description` in node parameter must end with a final period if a multiple-sentence description, unless ending with `</code>`. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-missing-for-ignore-ssl-issues': 'error', //`description` for Ignore SSL node parameter must be present.
				'n8n-nodes-base/node-param-description-missing-for-return-all': 'error', //`description` for Return All node parameter must be present.
				'n8n-nodes-base/node-param-description-missing-for-simplify': 'error', //`description` for Simplify node parameter must be present.
				'n8n-nodes-base/node-param-description-missing-from-dynamic-multi-options': 'error', //`description` in dynamic-multi-options-type node parameter must be present.
				'n8n-nodes-base/node-param-description-missing-from-dynamic-options': 'error', //`description` in dynamic-options-type node parameter must be present.
				'n8n-nodes-base/node-param-description-missing-from-limit': 'error', //`description` in Limit node parameter must be present.
				'n8n-nodes-base/node-param-description-unencoded-angle-brackets': 'error', //`description` in node parameter must encode angle brackets for them to render. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-unneeded-backticks': 'error', //`description` in node parameter must not use unneeded backticks. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-untrimmed': 'error', //`description` in node parameter must be trimmed. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-url-missing-protocol': 'error', //`description` in node parameter must include protocol when containing a URL. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-weak': 'error', //`description` in node parameter must be either useful or omitted. Applicable by extension to `description` in option in options-type and multi-options-type node parameter.
				'n8n-nodes-base/node-param-description-wrong-for-dynamic-multi-options': 'error', //`description` in dynamic-multi-options-type node parameter must be `Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>`
				'n8n-nodes-base/node-param-description-wrong-for-dynamic-options': 'error', //`description` in dynamic-options-type node parameter must be `Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>`
				'n8n-nodes-base/node-param-description-wrong-for-ignore-ssl-issues': 'error', //`description` for Ignore SSL node parameter must be `Whether to connect even if SSL certificate validation is not possible`
				'n8n-nodes-base/node-param-description-wrong-for-limit': 'error', //`description` for Limit node parameter must be `Max number of results to return`
				'n8n-nodes-base/node-param-description-wrong-for-return-all': 'error', //`description` for Return All node parameter must be `Whether to return all results or only up to a given limit`
				'n8n-nodes-base/node-param-description-wrong-for-simplify': 'error', //`description` for Simplify node parameter must be `Whether to return a simplified version of the response instead of the raw data`
				'n8n-nodes-base/node-param-description-wrong-for-upsert': 'error', //`description` for Upsert node parameter must be `Create a new record, or update the current one if it already exists (upsert)`. The resource name e.g. `'contact'` is also allowed instead of `'record'`.
				'n8n-nodes-base/node-param-display-name-excess-inner-whitespace': 'error', //`displayName` in node parameter or in fixed collection section must not contain excess inner whitespace. Applicable by extension to `name` in options-type or multi-options-type node parameter.
				'n8n-nodes-base/node-param-display-name-miscased-id': 'error', //`ID` in `displayName` in node parameter must be fully uppercased. Applicable by extension to `name` in options-type or multi-options-type node parameter.
				'n8n-nodes-base/node-param-display-name-miscased': 'error', //`displayName` in node parameter or in fixed collection section must title cased. Applicable by extension to `name` in options-type or multi-options-type node parameter.
				'n8n-nodes-base/node-param-display-name-untrimmed': 'error', //`displayName` in node parameter or in fixed collection section must be trimmed. Applicable by extension to `name` in options-type or multi-options-type node parameter.
				'n8n-nodes-base/node-param-display-name-wrong-for-dynamic-multi-options': 'error', //`displayName` for dynamic-multi-options-type node parameter must end with `Names or IDs`
				'n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options': 'error', //`displayName` for dynamic-options-type node parameter must end with `Name or ID`
				'n8n-nodes-base/node-param-display-name-wrong-for-simplify': 'error', //`displayName` for Simplify node parameter must be Simplify
				'n8n-nodes-base/node-param-display-name-wrong-for-update-fields': 'error', //`displayName` for Update operation node parameter must be `Update Fields`
				'n8n-nodes-base/node-param-fixed-collection-type-unsorted-items': 'error', //Items in a fixed-collection-type node parameter section must be alphabetized by `displayName` if five or more than five, unless the items are address fields.
				'n8n-nodes-base/node-param-min-value-wrong-for-limit': 'error', //`minValue` for Limit node parameter must be a positive integer.
				'n8n-nodes-base/node-param-multi-options-type-unsorted-items': 'error', //Items in a multi-options-type node parameter must be alphabetized by `name` if five or more than five.
				'n8n-nodes-base/node-param-operation-option-action-miscased': 'error', //The property `action` in an option in an Operation node parameter must be sentence-cased.
				'n8n-nodes-base/node-param-operation-option-without-action': 'error', //An option in an Operation node parameter must have an `action` property. The `action` property may or may not be identical to the `description` property.
				'n8n-nodes-base/node-param-operation-without-no-data-expression': 'error', //`noDataExpression` in an Operation node parameter must be present and enabled.
				'n8n-nodes-base/node-param-option-description-identical-to-name': 'error', //`description` in option in options-type node parameter must not be identical to `name`.
				'n8n-nodes-base/node-param-option-name-containing-star': 'error', //Option `name` in options-type node parameter must not contain `*`. Use `[All]` instead.
				'n8n-nodes-base/node-param-option-name-duplicate': 'error', //Option `name` in options-type node parameter must not be a duplicate.
				'n8n-nodes-base/node-param-option-name-wrong-for-get-all': 'error', //Option `name` for Get All node parameter must be `Get All`
				'n8n-nodes-base/node-param-option-name-wrong-for-upsert': 'error', //Option `name` for Upsert node parameter must be `Create or Update`.
				'n8n-nodes-base/node-param-option-value-duplicate': 'error', //Option `value` in options-type node parameter must not be a duplicate.
				'n8n-nodes-base/node-param-options-type-unsorted-items': 'error', //Items in options-type node parameter must be alphabetized by `name` if five or more than five.
				'n8n-nodes-base/node-param-placeholder-miscased-id': 'error', //`ID` in `placeholder` in node parameter must be fully uppercased.
				'n8n-nodes-base/node-param-placeholder-missing-email': 'error', //`placeholder` for Email node parameter must exist.
				'n8n-nodes-base/node-param-required-false': 'error', //`required: false` in node parameter must be removed because it is implied.
				'n8n-nodes-base/node-param-resource-with-plural-option': 'error', //Option `name` for a Resource node parameter must be singular.
				'n8n-nodes-base/node-param-resource-without-no-data-expression': 'error', //`noDataExpression` in a Resource node parameter must be present and enabled.
				'n8n-nodes-base/node-param-type-options-missing-from-limit': 'error', //`typeOptions` in Limit node parameter must be present.
				'n8n-nodes-base/node-resource-description-filename-against-convention': 'error', //Resource description file must use singular form. Example: `UserDescription.ts`, not `UsersDescription.ts`.
			},
		},
		{
			files: ['./credentials/**/*.ts', './nodes/**/*.ts'],
			plugins: [
				'@typescript-eslint',
				'eslint',
				'eslint-plugin-deprecation',
				'eslint-plugin-import',
				'eslint-plugin-jsdoc',
				'eslint-plugin-promise',
			],
			rules: {
				'@typescript-eslint/adjacent-overload-signatures': 'error', //Require that member overloads be consecutive
				'@typescript-eslint/array-type': 'error', //Require using either `T[]` or `Array<T>` for arrays
				'@typescript-eslint/await-thenable': 'error', //Disallow awaiting a value that is not a Thenable
				'@typescript-eslint/ban-ts-comment': 'error', //Disallow `@ts-<directive>` comments or require descriptions after directive
				'@typescript-eslint/ban-tslint-comment': 'error', //Disallow `// tslint:<rule-flag>` comments
				'@typescript-eslint/ban-types': 'error', //Disallow certain types
				'@typescript-eslint/brace-style': 'off', //Enforce consistent brace style for blocks
				'@typescript-eslint/class-literal-property-style': 'error', //Enforce that literals on classes are exposed in a consistent style
				'@typescript-eslint/comma-dangle': 'off', //Require or disallow trailing commas
				'@typescript-eslint/comma-spacing': 'off', //Enforce consistent spacing before and after commas
				'@typescript-eslint/consistent-generic-constructors': 'error', //Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
				'@typescript-eslint/consistent-indexed-object-style': 'error', //Require or disallow the `Record` type
				'@typescript-eslint/consistent-type-assertions': 'error', //Enforce consistent usage of type assertions
				'@typescript-eslint/consistent-type-definitions': 'error', //Enforce type definitions to consistently use either `interface` or `type`
				'@typescript-eslint/consistent-type-exports': 'off', //Enforce consistent usage of type exports
				'@typescript-eslint/consistent-type-imports': 'off', //Enforce consistent usage of type imports
				'@typescript-eslint/default-param-last': 'off', //Enforce default parameters to be last
				'@typescript-eslint/dot-notation': 'error', //Enforce dot notation whenever possible
				'@typescript-eslint/explicit-function-return-type': 'off', //Require explicit return types on functions and class methods
				'@typescript-eslint/explicit-member-accessibility': 'off', //Require explicit accessibility modifiers on class properties and methods
				'@typescript-eslint/explicit-module-boundary-types': 'off', //Require explicit return and argument types on exported functions' and classes' public class methods
				'@typescript-eslint/func-call-spacing': 'off', //Require or disallow spacing between function identifiers and their invocations
				'@typescript-eslint/indent': 'off', //Enforce consistent indentation
				'@typescript-eslint/init-declarations': 'off', //Require or disallow initialization in variable declarations
				'@typescript-eslint/keyword-spacing': 'off', //Enforce consistent spacing before and after keywords
				'@typescript-eslint/lines-between-class-members': 'off', //Require or disallow an empty line between class members
				'@typescript-eslint/member-delimiter-style': 'off', //Require a specific member delimiter style for interfaces and type literals
				'@typescript-eslint/member-ordering': 'off', //Require a consistent member declaration order
				'@typescript-eslint/method-signature-style': 'off', //Enforce using a particular method signature syntax
				'@typescript-eslint/naming-convention': 'off', //Enforce naming conventions for everything across a codebase
				'@typescript-eslint/no-array-constructor': 'error', //Disallow generic `Array` constructors
				'@typescript-eslint/no-base-to-string': 'error', //Require `.toString()` to only be called on objects which provide useful information when stringified
				'@typescript-eslint/no-confusing-non-null-assertion': 'error', //Disallow non-null assertion in locations that may be confusing
				'@typescript-eslint/no-confusing-void-expression': 'off', //Require expressions of type void to appear in statement position
				'@typescript-eslint/no-dupe-class-members': 'off', //Disallow duplicate class members
				'@typescript-eslint/no-duplicate-enum-values': 'error', //Disallow duplicate enum member values
				'@typescript-eslint/no-dynamic-delete': 'error', //Disallow using the `delete` operator on computed key expressions
				'@typescript-eslint/no-empty-function': 'error', //Disallow empty functions
				'@typescript-eslint/no-empty-interface': 'error', //Disallow the declaration of empty interfaces
				'@typescript-eslint/no-explicit-any': 'error', //Disallow the `any` type
				'@typescript-eslint/no-extra-non-null-assertion': 'error', //Disallow extra non-null assertion
				'@typescript-eslint/no-extra-parens': 'off', //Disallow unnecessary parentheses
				'@typescript-eslint/no-extra-semi': 'error', //Disallow unnecessary semicolons
				'@typescript-eslint/no-extraneous-class': 'error', //Disallow classes used as namespaces
				'@typescript-eslint/no-floating-promises': 'error', //Require Promise-like statements to be handled appropriately
				'@typescript-eslint/no-for-in-array': 'error', //Disallow iterating over an array with a for-in loop
				'@typescript-eslint/no-implied-eval': 'error', //Disallow the use of `eval()`-like methods
				'@typescript-eslint/no-inferrable-types': 'error', //Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
				'@typescript-eslint/no-invalid-this': 'off', //Disallow `this` keywords outside of classes or class-like objects
				'@typescript-eslint/no-invalid-void-type': 'error', //Disallow `void` type outside of generic or return types
				'@typescript-eslint/no-loop-func': 'off', //Disallow function declarations that contain unsafe references inside loop statements
				'@typescript-eslint/no-loss-of-precision': 'error', //Disallow literal numbers that lose precision
				'@typescript-eslint/no-magic-numbers': 'off', //Disallow magic numbers
				'@typescript-eslint/no-meaningless-void-operator': 'error', //Disallow the `void` operator except when used to discard a value
				'@typescript-eslint/no-misused-new': 'error', //Enforce valid definition of `new` and `constructor`
				'@typescript-eslint/no-misused-promises': 'error', //Disallow Promises in places not designed to handle them
				'@typescript-eslint/no-namespace': 'error', //Disallow custom TypeScript modules and namespaces
				'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error', //Disallow non-null assertions in the left operand of a nullish coalescing operator
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error', //Disallow non-null assertions after an optional chain expression
				'@typescript-eslint/no-non-null-assertion': 'error', //Disallow non-null assertions using the `!` postfix operator
				'@typescript-eslint/no-redeclare': 'off', //Disallow variable redeclaration
				'@typescript-eslint/no-redundant-type-constituents': 'off', //Disallow members of unions and intersections that do nothing or override type information
				'@typescript-eslint/no-require-imports': 'off', //Disallow invocation of `require()`
				'@typescript-eslint/no-restricted-imports': 'off', //Disallow specified modules when loaded by `import`
				'@typescript-eslint/no-shadow': 'off', //Disallow variable declarations from shadowing variables declared in the outer scope
				'@typescript-eslint/no-this-alias': 'error', //Disallow aliasing `this`
				'@typescript-eslint/no-throw-literal': 'error', //Disallow throwing literals as exceptions
				'@typescript-eslint/no-type-alias': 'off', //Disallow type aliases
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', //Disallow unnecessary equality comparisons against boolean literals
				'@typescript-eslint/no-unnecessary-condition': 'error', //Disallow conditionals where the type is always truthy or always falsy
				'@typescript-eslint/no-unnecessary-qualifier': 'off', //Disallow unnecessary namespace qualifiers
				'@typescript-eslint/no-unnecessary-type-arguments': 'error', //Disallow type arguments that are equal to the default
				'@typescript-eslint/no-unnecessary-type-assertion': 'error', //Disallow type assertions that do not change the type of an expression
				'@typescript-eslint/no-unnecessary-type-constraint': 'error', //Disallow unnecessary constraints on generic types
				'@typescript-eslint/no-unsafe-argument': 'error', //Disallow calling a function with a value with type `any`
				'@typescript-eslint/no-unsafe-assignment': 'error', //Disallow assigning a value with type `any` to variables and properties
				'@typescript-eslint/no-unsafe-call': 'error', //Disallow calling a value with type `any`
				'@typescript-eslint/no-unsafe-member-access': 'error', //Disallow member access on a value with type `any`
				'@typescript-eslint/no-unsafe-return': 'error', //Disallow returning a value with type `any` from a function
				'@typescript-eslint/no-unused-expressions': 'off', //Disallow unused expressions
				'@typescript-eslint/no-unused-vars': 'error', //Disallow unused variables
				'@typescript-eslint/no-use-before-define': 'off', //Disallow the use of variables before they are defined
				'@typescript-eslint/no-useless-constructor': 'error', //Disallow unnecessary constructors
				'@typescript-eslint/no-useless-empty-export': 'off', //Disallow empty exports that don't change anything in a module file
				'@typescript-eslint/no-var-requires': 'error', //Disallow `require` statements except in import statements
				'@typescript-eslint/non-nullable-type-assertion-style': 'error', //Enforce non-null assertions over explicit type casts
				'@typescript-eslint/object-curly-spacing': 'off', //Enforce consistent spacing inside braces
				'@typescript-eslint/padding-line-between-statements': 'off', //Require or disallow padding lines between statements
				'@typescript-eslint/parameter-properties': 'off', //Require or disallow parameter properties in class constructors
				'@typescript-eslint/prefer-as-const': 'error', //Enforce the use of `as const` over literal type
				'@typescript-eslint/prefer-enum-initializers': 'off', //Require each enum member value to be explicitly initialized
				'@typescript-eslint/prefer-for-of': 'error', //Enforce the use of `for-of` loop over the standard `for` loop where possible
				'@typescript-eslint/prefer-function-type': 'error', //Enforce using function types instead of interfaces with call signatures
				'@typescript-eslint/prefer-includes': 'error', //Enforce `includes` method over `indexOf` method
				'@typescript-eslint/prefer-literal-enum-member': 'error', //Require all enum members to be literal values
				'@typescript-eslint/prefer-namespace-keyword': 'error', //Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
				'@typescript-eslint/prefer-nullish-coalescing': 'error', //Enforce using the nullish coalescing operator instead of logical chaining
				'@typescript-eslint/prefer-optional-chain': 'error', //Enforce using concise optional chain expressions instead of chained logical ands
				'@typescript-eslint/prefer-readonly': 'off', //Require private members to be marked as `readonly` if they're never modified outside of the constructor
				'@typescript-eslint/prefer-readonly-parameter-types': 'off', //Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
				'@typescript-eslint/prefer-reduce-type-parameter': 'error', //Enforce using type parameter when calling `Array#reduce` instead of casting
				'@typescript-eslint/prefer-regexp-exec': 'off', //Enforce `RegExp#exec` over `String#match` if no global flag is provided
				'@typescript-eslint/prefer-return-this-type': 'error', //Enforce that `this` is used when only `this` type is returned
				'@typescript-eslint/prefer-string-starts-ends-with': 'error', //Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
				'@typescript-eslint/prefer-ts-expect-error': 'error', //Enforce using `@ts-expect-error` over `@ts-ignore`
				'@typescript-eslint/promise-function-async': 'off', //Require any function or method that returns a Promise to be marked async
				'@typescript-eslint/quotes': 'off', //Enforce the consistent use of either backticks, double, or single quotes
				'@typescript-eslint/require-array-sort-compare': 'off', //Require `Array#sort` calls to always provide a `compareFunction`
				'@typescript-eslint/require-await': 'error', //Disallow async functions which have no `await` expression
				'@typescript-eslint/restrict-plus-operands': 'error', //Require both operands of addition to have type `number` or `string`
				'@typescript-eslint/restrict-template-expressions': 'error', //Enforce template literal expressions to be of `string` type
				'@typescript-eslint/return-await': 'off', //Enforce consistent returning of awaited values
				'@typescript-eslint/semi': 'off', //Require or disallow semicolons instead of ASI
				'@typescript-eslint/sort-type-union-intersection-members': 'off', //Enforce members of a type union/intersection to be sorted alphabetically
				'@typescript-eslint/space-before-blocks': 'off', //Enforce consistent spacing before blocks
				'@typescript-eslint/space-before-function-paren': 'off', //Enforce consistent spacing before function parenthesis
				'@typescript-eslint/space-infix-ops': 'off', //Require spacing around infix operators
				'@typescript-eslint/strict-boolean-expressions': 'off', //Disallow certain types in boolean expressions
				'@typescript-eslint/switch-exhaustiveness-check': 'off', //Require switch-case statements to be exhaustive with union type
				'@typescript-eslint/triple-slash-reference': 'error', //Disallow certain triple slash directives in favor of ES6-style import declarations
				'@typescript-eslint/type-annotation-spacing': 'off', //Require consistent spacing around type annotations
				'@typescript-eslint/typedef': 'off', //Require type annotations in certain places
				'@typescript-eslint/unbound-method': 'error', //Enforce unbound methods are called with their expected scope
				'@typescript-eslint/unified-signatures': 'error', //Disallow two overloads that could be unified into one with a union or an optional/rest parameter
				'accessor-pairs': 'off', //Enforce getter and setter pairs in objects and classes
				'array-bracket-newline': 'off', //Enforce linebreaks after opening and before closing array brackets
				'array-bracket-spacing': 'off', //Enforce consistent spacing inside array brackets
				'array-callback-return': 'off', //Enforce `return` statements in callbacks of array methods
				'array-element-newline': 'off', //Enforce line breaks after each array element
				'arrow-body-style': 'off', //Require braces around arrow function bodies
				'arrow-parens': 'off', //Require parentheses around arrow function arguments
				'arrow-spacing': 'off', //Enforce consistent spacing before and after the arrow in arrow functions
				'block-scoped-var': 'off', //Enforce the use of variables within the scope they are defined
				'block-spacing': 'off', //Disallow or enforce spaces inside of blocks after opening block and before closing block
				'brace-style': 'off', //Enforce consistent brace style for blocks
				camelcase: 'off', //Enforce camelcase naming convention
				'capitalized-comments': 'off', //Enforce or disallow capitalization of the first letter of a comment
				'class-methods-use-this': 'off', //Enforce that class methods utilize `this`
				'comma-dangle': 'off', //Require or disallow trailing commas
				'comma-spacing': 'off', //Enforce consistent spacing before and after commas
				'comma-style': 'off', //Enforce consistent comma style
				complexity: 'off', //Enforce a maximum cyclomatic complexity allowed in a program
				'computed-property-spacing': 'off', //Enforce consistent spacing inside computed property brackets
				'consistent-return': 'off', //Require `return` statements to either always or never specify values
				'consistent-this': 'off', //Enforce consistent naming when capturing the current execution context
				'constructor-super': 'error', //Require `super()` calls in constructors
				curly: 'off', //Enforce consistent brace style for all control statements
				'default-case': 'off', //Require `default` cases in `switch` statements
				'default-case-last': 'off', //Enforce default clauses in switch statements to be last
				'default-param-last': 'off', //Enforce default parameters to be last
				'dot-location': 'off', //Enforce consistent newlines before and after dots
				'dot-notation': 'off', //Enforce dot notation whenever possible
				'eol-last': 'off', //Require or disallow newline at the end of files
				eqeqeq: 'off', //Require the use of `===` and `!==`
				'for-direction': 'error', //Enforce "for" loop update clause moving the counter in the right direction.
				'func-call-spacing': 'off', //Require or disallow spacing between function identifiers and their invocations
				'func-name-matching': 'off', //Require function names to match the name of the variable or property to which they are assigned
				'func-names': 'off', //Require or disallow named `function` expressions
				'func-style': 'off', //Enforce the consistent use of either `function` declarations or expressions
				'function-call-argument-newline': 'off', //Enforce line breaks between arguments of a function call
				'function-paren-newline': 'off', //Enforce consistent line breaks inside function parentheses
				'generator-star-spacing': 'off', //Enforce consistent spacing around `*` operators in generator functions
				'getter-return': 'error', //Enforce `return` statements in getters
				'grouped-accessor-pairs': 'off', //Require grouped accessor pairs in object literals and classes
				'guard-for-in': 'off', //Require `for-in` loops to include an `if` statement
				'id-denylist': 'off', //Disallow specified identifiers
				'id-length': 'off', //Enforce minimum and maximum identifier lengths
				'id-match': 'off', //Require identifiers to match a specified regular expression
				'implicit-arrow-linebreak': 'off', //Enforce the location of arrow function bodies
				indent: 'off', //Enforce consistent indentation
				'init-declarations': 'off', //Require or disallow initialization in variable declarations
				'jsx-quotes': 'off', //Enforce the consistent use of either double or single quotes in JSX attributes
				'key-spacing': 'off', //Enforce consistent spacing between keys and values in object literal properties
				'keyword-spacing': 'off', //Enforce consistent spacing before and after keywords
				'line-comment-position': 'off', //Enforce position of line comments
				'linebreak-style': 'off', //Enforce consistent linebreak style
				'lines-around-comment': 'off', //Require empty lines around comments
				'lines-between-class-members': 'off', //Require or disallow an empty line between class members
				'max-classes-per-file': 'off', //Enforce a maximum number of classes per file
				'max-depth': 'off', //Enforce a maximum depth that blocks can be nested
				'max-len': 'off', //Enforce a maximum line length
				'max-lines': 'off', //Enforce a maximum number of lines per file
				'max-lines-per-function': 'off', //Enforce a maximum number of lines of code in a function
				'max-nested-callbacks': 'off', //Enforce a maximum depth that callbacks can be nested
				'max-params': 'off', //Enforce a maximum number of parameters in function definitions
				'max-statements': 'off', //Enforce a maximum number of statements allowed in function blocks
				'max-statements-per-line': 'off', //Enforce a maximum number of statements allowed per line
				'multiline-comment-style': 'off', //Enforce a particular style for multiline comments
				'multiline-ternary': 'off', //Enforce newlines between operands of ternary expressions
				'new-cap': 'off', //Require constructor names to begin with a capital letter
				'new-parens': 'off', //Enforce or disallow parentheses when invoking a constructor with no arguments
				'newline-per-chained-call': 'off', //Require a newline after each call in a method chain
				'no-alert': 'off', //Disallow the use of `alert`, `confirm`, and `prompt`
				'no-array-constructor': 'off', //Disallow `Array` constructors
				'no-async-promise-executor': 'error', //Disallow using an async function as a Promise executor
				'no-await-in-loop': 'off', //Disallow `await` inside of loops
				'no-bitwise': 'off', //Disallow bitwise operators
				'no-caller': 'off', //Disallow the use of `arguments.caller` or `arguments.callee`
				'no-case-declarations': 'error', //Disallow lexical declarations in case clauses
				'no-class-assign': 'error', //Disallow reassigning class members
				'no-compare-neg-zero': 'error', //Disallow comparing against -0
				'no-cond-assign': 'error', //Disallow assignment operators in conditional expressions
				'no-confusing-arrow': 'off', //Disallow arrow functions where they could be confused with comparisons
				'no-console': 'off', //Disallow the use of `console`
				'no-const-assign': 'error', //Disallow reassigning `const` variables
				'no-constant-binary-expression': 'off', //Disallow expressions where the operation doesn't affect the value
				'no-constant-condition': 'error', //Disallow constant expressions in conditions
				'no-constructor-return': 'off', //Disallow returning value from constructor
				'no-continue': 'off', //Disallow `continue` statements
				'no-control-regex': 'error', //Disallow control characters in regular expressions
				'no-debugger': 'error', //Disallow the use of `debugger`
				'no-delete-var': 'error', //Disallow deleting variables
				'no-div-regex': 'off', //Disallow division operators explicitly at the beginning of regular expressions
				'no-dupe-args': 'error', //Disallow duplicate arguments in `function` definitions
				'no-dupe-class-members': 'error', //Disallow duplicate class members
				'no-dupe-else-if': 'error', //Disallow duplicate conditions in if-else-if chains
				'no-dupe-keys': 'error', //Disallow duplicate keys in object literals
				'no-duplicate-case': 'error', //Disallow duplicate case labels
				'no-duplicate-imports': 'off', //Disallow duplicate module imports
				'no-else-return': 'off', //Disallow `else` blocks after `return` statements in `if` statements
				'no-empty': 'error', //Disallow empty block statements
				'no-empty-character-class': 'error', //Disallow empty character classes in regular expressions
				'no-empty-function': 'off', //Disallow empty functions
				'no-empty-pattern': 'error', //Disallow empty destructuring patterns
				'no-eq-null': 'off', //Disallow `null` comparisons without type-checking operators
				'no-eval': 'off', //Disallow the use of `eval()`
				'no-ex-assign': 'error', //Disallow reassigning exceptions in `catch` clauses
				'no-extend-native': 'off', //Disallow extending native types
				'no-extra-bind': 'off', //Disallow unnecessary calls to `.bind()`
				'no-extra-boolean-cast': 'error', //Disallow unnecessary boolean casts
				'no-extra-label': 'off', //Disallow unnecessary labels
				'no-extra-parens': 'off', //Disallow unnecessary parentheses
				'no-extra-semi': 'error', //Disallow unnecessary semicolons
				'no-fallthrough': 'error', //Disallow fallthrough of `case` statements
				'no-floating-decimal': 'off', //Disallow leading or trailing decimal points in numeric literals
				'no-func-assign': 'error', //Disallow reassigning `function` declarations
				'no-global-assign': 'error', //Disallow assignments to native objects or read-only global variables
				'no-implicit-coercion': 'off', //Disallow shorthand type conversions
				'no-implicit-globals': 'off', //Disallow declarations in the global scope
				'no-implied-eval': 'off', //Disallow the use of `eval()`-like methods
				'no-import-assign': 'error', //Disallow assigning to imported bindings
				'no-inline-comments': 'off', //Disallow inline comments after code
				'no-inner-declarations': 'error', //Disallow variable or `function` declarations in nested blocks
				'no-invalid-regexp': 'error', //Disallow invalid regular expression strings in `RegExp` constructors
				'no-invalid-this': 'off', //Disallow use of `this` in contexts where the value of `this` is `undefined`
				'no-irregular-whitespace': 'error', //Disallow irregular whitespace
				'no-iterator': 'off', //Disallow the use of the `__iterator__` property
				'no-label-var': 'off', //Disallow labels that share a name with a variable
				'no-labels': 'off', //Disallow labeled statements
				'no-lone-blocks': 'off', //Disallow unnecessary nested blocks
				'no-lonely-if': 'off', //Disallow `if` statements as the only statement in `else` blocks
				'no-loop-func': 'off', //Disallow function declarations that contain unsafe references inside loop statements
				'no-loss-of-precision': 'error', //Disallow literal numbers that lose precision
				'no-magic-numbers': 'off', //Disallow magic numbers
				'no-misleading-character-class': 'error', //Disallow characters which are made with multiple code points in character class syntax
				'no-mixed-operators': 'off', //Disallow mixed binary operators
				'no-mixed-spaces-and-tabs': 'error', //Disallow mixed spaces and tabs for indentation
				'no-multi-assign': 'off', //Disallow use of chained assignment expressions
				'no-multi-spaces': 'off', //Disallow multiple spaces
				'no-multi-str': 'off', //Disallow multiline strings
				'no-multiple-empty-lines': 'off', //Disallow multiple empty lines
				'no-negated-condition': 'off', //Disallow negated conditions
				'no-nested-ternary': 'off', //Disallow nested ternary expressions
				'no-new': 'off', //Disallow `new` operators outside of assignments or comparisons
				'no-new-func': 'off', //Disallow `new` operators with the `Function` object
				'no-new-object': 'off', //Disallow `Object` constructors
				'no-new-symbol': 'error', //Disallow `new` operators with the `Symbol` object
				'no-new-wrappers': 'off', //Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
				'no-nonoctal-decimal-escape': 'error', //Disallow `\8` and `\9` escape sequences in string literals
				'no-obj-calls': 'error', //Disallow calling global object properties as functions
				'no-octal': 'error', //Disallow octal literals
				'no-octal-escape': 'off', //Disallow octal escape sequences in string literals
				'no-param-reassign': 'off', //Disallow reassigning `function` parameters
				'no-plusplus': 'off', //Disallow the unary operators `++` and `--`
				'no-promise-executor-return': 'off', //Disallow returning values from Promise executor functions
				'no-proto': 'off', //Disallow the use of the `__proto__` property
				'no-prototype-builtins': 'error', //Disallow calling some `Object.prototype` methods directly on objects
				'no-redeclare': 'error', //Disallow variable redeclaration
				'no-regex-spaces': 'error', //Disallow multiple spaces in regular expressions
				'no-restricted-exports': 'off', //Disallow specified names in exports
				'no-restricted-globals': 'off', //Disallow specified global variables
				'no-restricted-imports': 'off', //Disallow specified modules when loaded by `import`
				'no-restricted-properties': 'off', //Disallow certain properties on certain objects
				'no-restricted-syntax': 'off', //Disallow specified syntax
				'no-return-assign': 'off', //Disallow assignment operators in `return` statements
				'no-return-await': 'off', //Disallow unnecessary `return await`
				'no-script-url': 'off', //Disallow `javascript:` urls
				'no-self-assign': 'error', //Disallow assignments where both sides are exactly the same
				'no-self-compare': 'off', //Disallow comparisons where both sides are exactly the same
				'no-sequences': 'off', //Disallow comma operators
				'no-setter-return': 'error', //Disallow returning values from setters
				'no-shadow': 'off', //Disallow variable declarations from shadowing variables declared in the outer scope
				'no-shadow-restricted-names': 'error', //Disallow identifiers from shadowing restricted names
				'no-sparse-arrays': 'error', //Disallow sparse arrays
				'no-tabs': 'off', //Disallow all tabs
				'no-template-curly-in-string': 'off', //Disallow template literal placeholder syntax in regular strings
				'no-ternary': 'off', //Disallow ternary operators
				'no-this-before-super': 'error', //Disallow `this`/`super` before calling `super()` in constructors
				'no-throw-literal': 'off', //Disallow throwing literals as exceptions
				'no-trailing-spaces': 'off', //Disallow trailing whitespace at the end of lines
				'no-undef': 'error', //Disallow the use of undeclared variables unless mentioned in `/*global */` comments
				'no-undef-init': 'off', //Disallow initializing variables to `undefined`
				'no-undefined': 'off', //Disallow the use of `undefined` as an identifier
				'no-underscore-dangle': 'off', //Disallow dangling underscores in identifiers
				'no-unexpected-multiline': 'error', //Disallow confusing multiline expressions
				'no-unmodified-loop-condition': 'off', //Disallow unmodified loop conditions
				'no-unneeded-ternary': 'off', //Disallow ternary operators when simpler alternatives exist
				'no-unreachable': 'error', //Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
				'no-unreachable-loop': 'off', //Disallow loops with a body that allows only one iteration
				'no-unsafe-finally': 'error', //Disallow control flow statements in `finally` blocks
				'no-unsafe-negation': 'error', //Disallow negating the left operand of relational operators
				'no-unsafe-optional-chaining': 'error', //Disallow use of optional chaining in contexts where the `undefined` value is not allowed
				'no-unused-expressions': 'off', //Disallow unused expressions
				'no-unused-labels': 'error', //Disallow unused labels
				'no-unused-private-class-members': 'off', //Disallow unused private class members
				'no-unused-vars': 'error', //Disallow unused variables
				'no-use-before-define': 'off', //Disallow the use of variables before they are defined
				'no-useless-backreference': 'error', //Disallow useless backreferences in regular expressions
				'no-useless-call': 'off', //Disallow unnecessary calls to `.call()` and `.apply()`
				'no-useless-catch': 'error', //Disallow unnecessary `catch` clauses
				'no-useless-computed-key': 'off', //Disallow unnecessary computed property keys in objects and classes
				'no-useless-concat': 'off', //Disallow unnecessary concatenation of literals or template literals
				'no-useless-constructor': 'off', //Disallow unnecessary constructors
				'no-useless-escape': 'error', //Disallow unnecessary escape characters
				'no-useless-rename': 'off', //Disallow renaming import, export, and destructured assignments to the same name
				'no-useless-return': 'off', //Disallow redundant return statements
				'no-var': 'off', //Require `let` or `const` instead of `var`
				'no-void': 'off', //Disallow `void` operators
				'no-warning-comments': 'off', //Disallow specified warning terms in comments
				'no-whitespace-before-property': 'off', //Disallow whitespace before properties
				'no-with': 'error', //Disallow `with` statements
				'nonblock-statement-body-position': 'off', //Enforce the location of single-line statements
				'object-curly-newline': 'off', //Enforce consistent line breaks after opening and before closing braces
				'object-curly-spacing': 'off', //Enforce consistent spacing inside braces
				'object-property-newline': 'off', //Enforce placing object properties on separate lines
				'object-shorthand': 'off', //Require or disallow method and property shorthand syntax for object literals
				'one-var': 'off', //Enforce variables to be declared either together or separately in functions
				'one-var-declaration-per-line': 'off', //Require or disallow newlines around variable declarations
				'operator-assignment': 'off', //Require or disallow assignment operator shorthand where possible
				'operator-linebreak': 'off', //Enforce consistent linebreak style for operators
				'padded-blocks': 'off', //Require or disallow padding within blocks
				'padding-line-between-statements': 'off', //Require or disallow padding lines between statements
				'prefer-arrow-callback': 'off', //Require using arrow functions for callbacks
				'prefer-const': 'off', //Require `const` declarations for variables that are never reassigned after declared
				'prefer-destructuring': 'off', //Require destructuring from arrays and/or objects
				'prefer-exponentiation-operator': 'off', //Disallow the use of `Math.pow` in favor of the `**` operator
				'prefer-named-capture-group': 'off', //Enforce using named capture group in regular expression
				'prefer-numeric-literals': 'off', //Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
				'prefer-object-has-own': 'off', //Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
				'prefer-object-spread': 'off', //Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
				'prefer-promise-reject-errors': 'off', //Require using Error objects as Promise rejection reasons
				'prefer-regex-literals': 'off', //Disallow use of the `RegExp` constructor in favor of regular expression literals
				'prefer-rest-params': 'off', //Require rest parameters instead of `arguments`
				'prefer-spread': 'off', //Require spread operators instead of `.apply()`
				'prefer-template': 'off', //Require template literals instead of string concatenation
				'quote-props': 'off', //Require quotes around object literal property names
				quotes: 'off', //Enforce the consistent use of either backticks, double, or single quotes
				radix: 'off', //Enforce the consistent use of the radix argument when using `parseInt()`
				'require-atomic-updates': 'off', //Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
				'require-await': 'off', //Disallow async functions which have no `await` expression
				'require-unicode-regexp': 'off', //Enforce the use of `u` flag on RegExp
				'require-yield': 'error', //Require generator functions to contain `yield`
				'rest-spread-spacing': 'off', //Enforce spacing between rest and spread operators and their expressions
				semi: 'off', //Require or disallow semicolons instead of ASI
				'semi-spacing': 'off', //Enforce consistent spacing before and after semicolons
				'semi-style': 'off', //Enforce location of semicolons
				'sort-imports': 'off', //Enforce sorted import declarations within modules
				'sort-keys': 'off', //Require object keys to be sorted
				'sort-vars': 'off', //Require variables within the same declaration block to be sorted
				'space-before-blocks': 'off', //Enforce consistent spacing before blocks
				'space-before-function-paren': 'off', //Enforce consistent spacing before `function` definition opening parenthesis
				'space-in-parens': 'off', //Enforce consistent spacing inside parentheses
				'space-infix-ops': 'off', //Require spacing around infix operators
				'space-unary-ops': 'off', //Enforce consistent spacing before or after unary operators
				'spaced-comment': 'off', //Enforce consistent spacing after the `//` or `/*` in a comment
				strict: 'off', //Require or disallow strict mode directives
				'switch-colon-spacing': 'off', //Enforce spacing around colons of switch statements
				'symbol-description': 'off', //Require symbol descriptions
				'template-curly-spacing': 'off', //Require or disallow spacing around embedded expressions of template strings
				'template-tag-spacing': 'off', //Require or disallow spacing between template tags and their literals
				'unicode-bom': 'off', //Require or disallow Unicode byte order mark (BOM)
				'use-isnan': 'error', //Require calls to `isNaN()` when checking for `NaN`
				'valid-typeof': 'error', //Enforce comparing `typeof` expressions against valid strings
				'vars-on-top': 'off', //Require `var` declarations be placed at the top of their containing scope
				'wrap-iife': 'off', //Require parentheses around immediate `function` invocations
				'wrap-regex': 'off', //Require parenthesis around regex literals
				'yield-star-spacing': 'off', //Require or disallow spacing around the `*` in `yield*` expressions
				yoda: 'off', //Require or disallow "Yoda" conditions
				'deprecation/deprecation': 'error', //Do not use deprecated APIs.
				'import/no-unresolved': 'off',
				'import/named': 'off',
				'import/default': 'off',
				'import/namespace': 'off',
				'import/no-namespace': 'off',
				'import/export': 'off',
				'import/no-mutable-exports': 'off',
				'import/extensions': 'off',
				'import/no-restricted-paths': 'off',
				'import/no-internal-modules': 'off',
				'import/group-exports': 'off',
				'import/no-relative-packages': 'off',
				'import/no-relative-parent-imports': 'off',
				'import/no-self-import': 'error', //Forbid a module from importing itself
				'import/no-cycle': 'off',
				'import/no-named-default': 'off',
				'import/no-named-as-default': 'off',
				'import/no-named-as-default-member': 'off',
				'import/no-anonymous-default-export': 'off',
				'import/no-unused-modules': 'off',
				'import/no-commonjs': 'off',
				'import/no-amd': 'off',
				'import/no-duplicates': 'off',
				'import/first': 'off',
				'import/max-dependencies': 'off',
				'import/no-extraneous-dependencies': 'off',
				'import/no-absolute-path': 'off',
				'import/no-nodejs-modules': 'off',
				'import/no-webpack-loader-syntax': 'off',
				'import/order': 'off',
				'import/newline-after-import': 'off',
				'import/prefer-default-export': 'off',
				'import/no-default-export': 'off',
				'import/no-named-export': 'off',
				'import/no-dynamic-require': 'off',
				'import/unambiguous': 'off',
				'import/no-unassigned-import': 'off',
				'import/no-useless-path-segments': 'off',
				'import/dynamic-import-chunkname': 'off',
				'import/no-import-module-exports': 'error', //Disallow import statements with module.exports
				'import/exports-last': 'off',
				'import/no-deprecated': 'off',
				'jsdoc/check-access': 'off', //Checks that `@access` tags have a valid value.
				'jsdoc/check-alignment': 'off', //Reports invalid alignment of JSDoc block asterisks.
				'jsdoc/check-examples': 'off', //Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
				'jsdoc/check-indentation': 'off', //Reports invalid padding inside JSDoc blocks.
				'jsdoc/check-line-alignment': 'off', //Reports invalid alignment of JSDoc block lines.
				'jsdoc/check-param-names': 'off', //Ensures that parameter names in JSDoc match those in the function declaration.
				'jsdoc/check-property-names': 'off', //Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
				'jsdoc/check-syntax': 'off', //Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
				'jsdoc/check-tag-names': 'off', //Reports invalid block tag names.
				'jsdoc/check-types': 'off', //Reports invalid types.
				'jsdoc/check-values': 'off', //This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
				'jsdoc/empty-tags': 'off', //Expects specific tags to be empty of any content.
				'jsdoc/implements-on-classes': 'off', //Reports an issue with any non-constructor function using `@implements`.
				'jsdoc/match-description': 'off', //Enforces a regular expression pattern on descriptions.
				'jsdoc/match-name': 'off', //Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
				'jsdoc/multiline-blocks': 'off', //Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
				'jsdoc/newline-after-description': 'off', //Enforces a consistent padding of the block description.
				'jsdoc/no-bad-blocks': 'off', //This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
				'jsdoc/no-defaults': 'off', //This rule reports defaults being used on the relevant portion of `@param` or `@default`.
				'jsdoc/no-missing-syntax': 'off', //Reports when certain comment structures are always expected.
				'jsdoc/no-multi-asterisks': 'off',
				'jsdoc/no-restricted-syntax': 'off', //Reports when certain comment structures are present.
				'jsdoc/no-types': 'off', //This rule reports types being used on `@param` or `@returns`.
				'jsdoc/no-undefined-types': 'off', //Checks that types in jsdoc comments are defined.
				'jsdoc/require-asterisk-prefix': 'off',
				'jsdoc/require-description': 'off', //Requires that all functions have a description.
				'jsdoc/require-description-complete-sentence': 'off', //Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
				'jsdoc/require-example': 'off', //Requires that all functions have examples.
				'jsdoc/require-file-overview': 'off', //Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
				'jsdoc/require-hyphen-before-param-description': 'off', //Requires a hyphen before the `@param` description.
				'jsdoc/require-jsdoc': 'error', //Require JSDoc comments
				'jsdoc/require-param': 'off', //Requires that all function parameters are documented.
				'jsdoc/require-param-description': 'off', //Requires that each `@param` tag has a `description` value.
				'jsdoc/require-param-name': 'off', //Requires that all function parameters have names.
				'jsdoc/require-param-type': 'off', //Requires that each `@param` tag has a `type` value.
				'jsdoc/require-property': 'off', //Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
				'jsdoc/require-property-description': 'off', //Requires that each `@property` tag has a `description` value.
				'jsdoc/require-property-name': 'off', //Requires that all function `@property` tags have names.
				'jsdoc/require-property-type': 'off', //Requires that each `@property` tag has a `type` value.
				'jsdoc/require-returns': 'off', //Requires that returns are documented.
				'jsdoc/require-returns-check': 'off', //Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
				'jsdoc/require-returns-description': 'off', //Requires that the `@returns` tag has a `description` value.
				'jsdoc/require-returns-type': 'off', //Requires that `@returns` tag has `type` value.
				'jsdoc/require-throws': 'off', //Requires that throw statements are documented.
				'jsdoc/require-yields': 'off', //Requires yields are documented.
				'jsdoc/require-yields-check': 'off', //Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
				'jsdoc/sort-tags': 'off',
				'jsdoc/tag-lines': 'off', //Enforces lines (or no lines) between tags.
				'jsdoc/valid-types': 'off', //Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
				'promise/param-names': 'off',
				'promise/no-return-wrap': 'off',
				'promise/always-return': 'off',
				'promise/catch-or-return': 'off',
				'promise/prefer-await-to-callbacks': 'off',
				'promise/prefer-await-to-then': 'off',
				'promise/no-native': 'off',
				'promise/no-callback-in-promise': 'off',
				'promise/no-promise-in-callback': 'off',
				'promise/no-nesting': 'off',
				'promise/avoid-new': 'off',
				'promise/no-new-statics': 'off',
				'promise/no-return-in-finally': 'off',
				'promise/valid-params': 'off', //Ensures the proper number of arguments are passed to Promise functions
			},
		},
	],
};
