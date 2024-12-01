/*=============================================== Generate single file component ===============================================*/

import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils/index.js"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("single-component", {
        description: "Generate single file React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter the component's name",
            },
            {
                type: "confirm",
                name: "props",
                message: "Add props?",
                default: false,
            },
            {
                type: "input",
                name: "tag",
                message: "Which HTML tag?",
                default: "div",
            },
            {
                type: "confirm",
                name: "export",
                message: "Export this component from components folder?",
            },
        ],
        actions: data => {
            const actions = [
                "Creating your new component",
                {
                    type: "add",
                    path: `${BASE_PATH}/components/{{ pascalCase name }}.tsx`,
                    templateFile: "./templates/single-component.hbs",
                },
            ]

            if (data?.export) {
                actions.push("Exporting your new component", {
                    type: "modify",
                    path: `${BASE_PATH}/components/index.ts`,
                    // @ts-ignore
                    template:
                        'export * from "components/{{ pascalCase name }}"\n$1',
                    pattern: /(\/\* Prepend - DO NOT REMOVE \*\/)/g,
                })
            }

            return actions
        },
    })
}
