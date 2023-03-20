import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { defineCustomElements } from "stencil-plugin/loader";
// defineCustomElements()

import { defineCustomElement } from 'stencil-plugin/dist/components/my-component'
defineCustomElement()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// Solution 1:
// - Link stencil plugin to this project
// - "stencil-plugin": "*" dependency?
// - import defineCustomElements and call it
// - Use <my-component />

// Solution 2:
// - Install published/packed plugin
// 
// In src/index.js or main.tsx or w/e entrypoint...
// import { defineCustomElement } from 'stencil-plugin/dist/components/my-component'
// defineCustomElement()
// 
// In App.jsx...
// <my-component></my-component>
