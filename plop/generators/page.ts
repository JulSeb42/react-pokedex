/*=============================================== Generate page ===============================================*/

import type { NodePlopAPI } from "plop"
import { toKebabCase, toTitleCase } from "@julseb-lib/utils"
import { BASE_PATH } from "../utils/index.js"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("page", {
        description: "Generate page",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter page's name",
            },
            {
                type: "input",
                name: "title",
                message: "Enter page title",
                default: (data: { name: string }) => toTitleCase(data.name),
            },
            {
                type: "input",
                name: "path",
                message: "Enter url path",
                default: (data: { name: string }) =>
                    `/${toKebabCase(data.name)}`,
            },
            {
                type: "confirm",
                name: "multi",
                message: "Is this a multi file page?",
                default: false,
            },
        ],

        actions: data => {
            const actions = [
                "Creating your new page",
                {
                    type: "add",
                    path: data?.multi
                        ? `${BASE_PATH}/pages/{{ pascalCase name }}/{{ pascalCase name }}.tsx`
                        : `${BASE_PATH}/pages/{{ pascalCase name }}.tsx`,
                    templateFile: "./templates/page/page-file.hbs",
                },
                "Importing your new page in routes file",
                {
                    type: "modify",
                    path: `${BASE_PATH}/routes/routes.tsx`,
                    template:
                        'import { {{ pascalCase name }} } from "pages/{{ pascalCase name }}"\n$1',
                    pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
                },
                "Adding your new page to the paths array",
                {
                    type: "modify",
                    path: `${BASE_PATH}/routes/routes.tsx`,
                    template: `{ path: PATHS.{{ constantCase name }}, element: <{{ pascalCase name }} /> },\n\t$1`,
                    pattern: /(\/\* Prepend route - DO NOT REMOVE \*\/)/g,
                },
                "Adding path to paths list",
                {
                    type: "modify",
                    path: `${BASE_PATH}/routes/paths.ts`,
                    template:
                        '{{ constantCase name }}: "{{ path }}",\n\t$1',
                    pattern: /(\/\* Prepend path - DO NOT REMOVE \*\/)/g,
                },
            ]

            if (data?.multi) {
                actions.push(
                    ...[
                        "Creating export from new folder",
                        {
                            type: "add",
                            path: `${BASE_PATH}/pages/{{ pascalCase name }}/index.ts`,
                            templateFile: "./templates/page/page-index.hbs",
                        },
                    ]
                )
            }

            return actions
        },
    })
}
