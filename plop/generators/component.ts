/*=============================================== Generate component ===============================================*/

import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils/index.js"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("component", {
        description: "React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter component's name",
            },
            {
                type: "input",
                name: "tag",
                message: "Enter HTML tag",
                default: "div",
            },
            {
                type: "input",
                name: "attribute",
                message: "Enter HTML attribute",
                default: (data: { tag: string }) => data.tag,
            },
            {
                type: "confirm",
                name: "forward",
                message: "Add `forwardRef`?",
                default: false,
            },
            {
                type: "confirm",
                name: "as",
                message: "Add `as` prop?",
                default: false,
            },
            {
                type: "confirm",
                name: "children",
                message: "Add `children` prop?",
                default: true,
            },
            {
                type: "confirm",
                name: "export",
                message: "Export this component from components folder?",
            },
        ],
        actions: data => {
            const actions = [
                "Creating new files",
                {
                    type: "addMany",
                    destination: `${BASE_PATH}/components/{{ pascalCase name }}`,
                    templateFiles: "./templates/component/*.hbs",
                    base: "./templates/component",
                    verbose: false,
                },
            ]

            if (data?.export) {
                actions.push("Exporting your new component", {
                    type: "modify",
                    // @ts-ignore
                    path: `${BASE_PATH}/components/index.ts`,
                    template:
                        'export * from "./{{ pascalCase name }}"\n$1',
                    pattern: /(\/\* Prepend - DO NOT REMOVE \*\/)/g,
                })
            }

            return actions
        },
    })
}
