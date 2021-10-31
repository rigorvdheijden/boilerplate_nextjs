# Install NextJs

Using NextJS version 12

    npx create-next-app

project name: frontend

This creates a directory called frontend where package.json is created.

To test whether install worked:

    cd frontend
    npm run dev

Site is running on: http://localhost:3000

# Configure VSCode: Eslint and prettier

Follow the instructions from Wes Bos:
https://github.com/wesbos/eslint-config-wesbos

Skip the 'npm init' instruction since this was already done when installing NextJS

Modify the .eslintrc file to content below:

    {
      "extends": ["wesbos"],
      "rules": {
        "react/prop-types": "off"
      }
    }

Make sure that the vscode settings are updated as described in the link.

The settings are such that the title bar is colored orange/yellow to indicate that your editing in the nextjs environment (Thanks Wes for this tip).

# Styled components

    npm install --save styled-components
    npm install --save-dev babel-plugin-styled-components

Note that NextJS 12 uses Rust compiler based on SWC. There plans to include parsing of styled-components. Until this is implemented we need to use a babel plugin. So create a babel run-control file .babelrc and add following content:

    {
      "presets": [
        "next/babel"
      ],
      "plugins": [
        [
          "styled-components",
          {
            "ssr": true,
            "displayName": true,
            "preprocess": false
          }
        ]
      ]
    }

# Document customizations

Consider the following modifications for the document page(?):

- Set the correct language: <Html lang="en-us"> or <Html lang="nl">
- Set the default title
- Configure the font (eg https://fonts.google.com/)
- Set the favicon
