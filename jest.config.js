/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/* eslint-env node */

module.exports = {
    moduleFileExtensions: ['js'],
    moduleNameMapper: {
        '^lwc-wire-service$': require.resolve('@lwc/wire-service'),
        '^lwc-engine$': require.resolve('@lwc/engine'),
    },
    transform: {
        '^.+\\.js$': '@lwc/jest-transformer',
    },
    mapCoverage: true,
    collectCoverageFrom: ['src/*.js', '!**/__tests__/**'],
    coverageReporters: ['text', 'text-summary'],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 33,
            lines: 58,
            statements: 56
        },
    },
};