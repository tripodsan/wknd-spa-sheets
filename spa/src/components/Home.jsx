/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import React from 'react';
import Adventures from './Adventures.jsx';
import Card from './Card.jsx';
import Summary from './Summary.jsx';
import Title from './Title.jsx';
/** *
 * Displays a grid of current adventures
 */
function Home() {
  return (
      <div className="Home">
        <Card/>
        <hr/>
        <Title itemID="urn:aemconnection:/content/wknd/us/en/about-us/jcr:content/root/container/title_393953656_copy" itemType="text" itemProp="jcr:title"/>
        <Adventures />
        <hr/>
        <Summary />
    </div>
  );
}

export default Home;
