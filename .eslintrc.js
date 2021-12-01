module.exports = {
  root: true,
  // 预设环境全局变量
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // globals方式预设变量，防止eslint报错writable|readonly
  globals: {
    uni: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: ['error', 'never'], // 末尾不要加分号
    'max-len': [ // 最大长度
      'error', 100, 2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': ['error', {
      'destructuring': 'all',
      'ignoreReadBeforeAssign': true
    }],
    "object-shorthand": ["error", "always"],
    'no-magic-numbers': 'off',
    'sort-imports': 'off',
    'no-ternary': 'off',
    'capitalized-comments': 'off',
    'one-var': ['error', 'never'],
    'require-unicode-regexp': 'off',
    'prettier/prettier': 'error',
    'prefer-named-capture-group': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-statements': 'off',
    complexity: 'off',
    camelcase: ['error', {
      properties: 'never'
    }],
    'id-length': 'off',
    'require-atomic-updates': 'off',
    'prefer-destructuring': ['error', {
      object: true,
      array: false
    }],
    'multiline-comment-style': 'off',
    'no-bitwise': 'off',
    'vue/attributes-order': ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ],
      "alphabetical": true
    }],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "key",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        ["provide", "inject"],
        "ROUTER_GUARDS",
        "layout",
        "middleware",
        "validate",
        "scrollToTop",
        "transition",
        "loading",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "emits",
        "setup",
        "asyncData",
        "data",
        "fetch",
        "head",
        "computed",
        "watch",
        "watchQuery",
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "activated",
        "deactivated",
        "beforeUnmount",
        "beforeDestroy",
        "unmounted",
        "destroyed",
        "errorCaptured",
        "renderTracked",
        "renderTriggered",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
};
