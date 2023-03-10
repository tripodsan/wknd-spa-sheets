/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  root: true,
  extends: [
    "react-app",
    '@adobe/helix',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'implicit-arrow-linebreak': 0,
  },
};
