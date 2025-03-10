(()=>{"use strict";var n={208:(n,r,e)=>{e.d(r,{A:()=>i});var t=e(354),o=e.n(t),A=e(314),a=e.n(A)()(o());a.push([n.id,'/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\n/* 3. Add accessible line-height and improve text rendering */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\n/* 4. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 5. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 6. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 7. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/* 8. Create a root stacking context */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* -------------------------------------------- */\n\n/* Sidebar */\n#side-bar {\n  flex: 1;\n  height: 100vh;\n  background-color: #333;\n  color: #fff;\n  padding: 60px 30px;\n  border-top: none;\n}\n\n#side-bar h1 {\n  margin-bottom: 40px;\n}\n\n#side-bar h3 {\n  margin-bottom: 12px;\n}\n\n#side-bar input {\n  margin-bottom: 32px;\n  width: 150px;\n  margin-right: 8px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n/* Project Styles (Sidebar) */\n#projects > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 150px;\n  margin-bottom: 16px;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n}\n\n#projects > div:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n#projects > div > p {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n#projects > div > button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 16px;\n  color: #fff;\n}\n\n#projects img {\n  max-width: 16px;\n  filter: invert(1); /* Ensures visibility on dark background */\n  transition: transform 0.3s;\n}\n\n#projects img:hover {\n  transform: scale(1.2);\n}\n\n/* Main Content */\n#main {\n  flex: 3;\n  height: 100vh;\n  background-color: #f9f9f9;\n  padding: 60px 30px;\n  border-top: none;\n}\n\n#tasks h2 {\n  margin-bottom: 30px;\n}\n\n/* Task Styles */\n#tasks > div {\n  width: 700px;\n  margin-bottom: 16px;\n  padding: 16px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: box-shadow 0.3s;\n}\n\n#tasks > div:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n#tasks input[type="checkbox"] {\n  margin-right: 16px;\n  width: 16px;\n}\n\n#tasks img {\n  max-width: 20px;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\n#tasks img:hover {\n  transform: scale(1.2);\n}\n\n/* Add Task Button */\n#open-form-button {\n  margin-top: 32px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#open-form-button:hover {\n  background-color: #0056b3;\n}\n\n/* Form Styling */\nform {\n  padding: 20px;\n  margin-top: 32px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nform input,\nform select {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 250px;\n  margin-bottom: 16px;\n}\n\nform button {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\nform button:hover {\n  background-color: #0056b3;\n}\n\nform > div {\n  margin-top: 16px;\n}\n\n/* Modal Popup */\n#task-modal-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  padding: 30px;\n  background-color: #fff;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  z-index: 1;\n  display: none;\n  animation: fadeIn 0.3s;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n#task-modal-popup h2 {\n  margin-bottom: 20px;\n}\n\n#task-modal-popup input,\n#task-modal-popup textarea,\n#task-modal-popup select {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n#due-date-div {\n  margin-bottom: 12px;\n}\n\n#close-modal {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #aaa;\n}\n\n#close-modal:hover {\n  color: #000;\n}\n\n#update-modal {\n  padding: 8px;\n  text-align: center;\n  border-radius: 4px;\n  margin-top: 40px;\n  background-color: #007bff;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#update-modal:hover {\n  background-color: #0056b3;\n}\n\n/* Finished Tasks Section */\n#finished-tasks-div {\n  margin-top: 32px;\n}\n\n/* Responsiveness */\n@media (max-width: 768px) {\n  body {\n    flex-direction: column;\n  }\n\n  #side-bar,\n  #main {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n  }\n\n  #tasks > div {\n    width: 100%;\n  }\n}\n\n:root {\n  --primary: #6366f1;\n  --primary-hover: #4f46e5;\n  --dark: #1e1e2e;\n  --light: #f8fafc;\n  --sidebar-bg: #2a2a3c;\n  --task-priority-high: #ef4444;\n  --task-priority-medium: #eab308;\n  --task-priority-low: #22c55e;\n}\n\n/* Base Styles */\nbody {\n  background: var(--light);\n  color: #334155;\n}\n\n/* Sidebar Enhancements */\n#side-bar {\n  background: var(--sidebar-bg);\n  padding: 2rem 1.5rem;\n  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);\n}\n\n#side-bar h1 {\n  font-size: 1.8rem;\n  color: var(--light);\n  margin-bottom: 2rem;\n  position: relative;\n  padding-bottom: 1rem;\n}\n\n#side-bar h1::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 40px;\n  height: 3px;\n  background: var(--primary);\n}\n\n#side-bar h3 {\n  color: #94a3b8;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 1rem;\n}\n\n/* Project Input Enhancements */\n#add-project-field {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  padding: 0.75rem;\n  transition: all 0.3s ease;\n}\n\n#add-project-field:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary);\n}\n\n#add-project-button {\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n#add-project-button:hover {\n  background: var(--primary-hover);\n  transform: translateY(-1px);\n}\n\n/* Project Items */\n#projects > div {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  margin-bottom: 0.75rem;\n  transition: all 0.2s ease;\n}\n\n#projects > div:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: translateX(4px);\n}\n\n/* Main Content Area */\n#main {\n  background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);\n  padding: 2rem;\n}\n\n/* Task Cards */\n#tasks > div {\n  background: white;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease;\n  border: 1px solid #e2e8f0;\n}\n\n#tasks > div:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n\n/* Priority Badges */\n.priority-badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  display: inline-block;\n}\n\n.high-priority {\n  background: var(--task-priority-high);\n  color: white;\n}\n.medium-priority {\n  background: var(--task-priority-medium);\n  color: black;\n}\n.low-priority {\n  background: var(--task-priority-low);\n  color: white;\n}\n\n/* Custom Checkbox */\ninput[type="checkbox"] {\n  width: 1.2em;\n  height: 1.2em;\n  border: 2px solid #cbd5e1;\n  border-radius: 4px;\n  appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n\ninput[type="checkbox"]:checked {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n\ninput[type="checkbox"]:checked::after {\n  content: "✓";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 0.9em;\n}\n\n/* Modal Enhancements */\n#task-modal-popup {\n  border: none;\n  border-radius: 16px;\n  background: white;\n  animation: slideIn 0.3s ease;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translate(-50%, -60%);\n    opacity: 0;\n  }\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n\n#close-modal {\n  background: var(--primary);\n  color: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n\n  padding-bottom: 8px;\n}\n\n#close-modal:hover {\n  background: var(--primary-hover);\n}\n\n/* Form Styling */\nform input,\nform select {\n  border: 2px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n\nform input:focus,\nform select:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  #side-bar {\n    padding: 1.5rem 1rem;\n  }\n\n  #main {\n    padding: 1.5rem;\n  }\n\n  #tasks > div {\n    padding: 1rem;\n  }\n}\n\n/* Floating Action Button */\n#open-form-button {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  padding: 0;\n}\n\n/* Task Status Animation */\n@keyframes taskComplete {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n\n.task-complete {\n  animation: taskComplete 0.3s ease forwards;\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,6CAA6C;AAC7C;;;EAGE,sBAAsB;AACxB;;AAEA,6BAA6B;AAC7B;EACE,SAAS;AACX;;AAEA,6DAA6D;AAC7D;EACE,gBAAgB;EAChB,mCAAmC;EACnC,aAAa;EACb;wEACsE;AACxE;;AAEA,8BAA8B;AAC9B;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA,uCAAuC;AACvC;;;;EAIE,aAAa;AACf;;AAEA,4BAA4B;AAC5B;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA,6BAA6B;AAC7B;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA,sCAAsC;AACtC;;EAEE,kBAAkB;AACpB;;AAEA,iDAAiD;;AAEjD,YAAY;AACZ;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB,EAAE,0CAA0C;EAC7D,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,iBAAiB;AACjB;EACE,OAAO;EACP,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,oBAAoB;AACpB;EACE,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;;EAEE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,wCAAwC;EACxC,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,2BAA2B;AAC3B;EACE,gBAAgB;AAClB;;AAEA,mBAAmB;AACnB;EACE;IACE,sBAAsB;EACxB;;EAEA;;IAEE,WAAW;IACX,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,6BAA6B;EAC7B,+BAA+B;EAC/B,4BAA4B;AAC9B;;AAEA,gBAAgB;AAChB;EACE,wBAAwB;EACxB,cAAc;AAChB;;AAEA,yBAAyB;AACzB;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,+BAA+B;AAC/B;EACE,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,qCAAqC;EACrC,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,0BAA0B;AAC5B;;AAEA,sBAAsB;AACtB;EACE,8DAA8D;EAC9D,aAAa;AACf;;AAEA,eAAe;AACf;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;AACA;EACE,uCAAuC;EACvC,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,YAAY;EACZ,gBAAgB;AAClB;;AAEA,uBAAuB;AACvB;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE;IACE,gCAAgC;IAChC,UAAU;EACZ;EACA;IACE,gCAAgC;IAChC,UAAU;EACZ;AACF;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;AAClC;;AAEA,iBAAiB;AACjB;;EAEE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,4BAA4B;EAC5B,6CAA6C;AAC/C;;AAEA,sBAAsB;AACtB;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA,2BAA2B;AAC3B;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,UAAU;AACZ;;AAEA,0BAA0B;AAC1B;EACE;IACE,UAAU;IACV,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;AACF;;AAEA;EACE,0CAA0C;AAC5C",sourcesContent:['/* 1. Use a more-intuitive box-sizing model */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* 2. Remove default margin */\r\n* {\r\n  margin: 0;\r\n}\r\n\r\n/* 3. Add accessible line-height and improve text rendering */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  display: flex;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n/* 4. Improve media defaults */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n/* 5. Inherit fonts for form controls */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* 6. Avoid text overflows */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n/* 7. Improve line wrapping */\r\np {\r\n  text-wrap: pretty;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-wrap: balance;\r\n}\r\n\r\n/* 8. Create a root stacking context */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* -------------------------------------------- */\r\n\r\n/* Sidebar */\r\n#side-bar {\r\n  flex: 1;\r\n  height: 100vh;\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 60px 30px;\r\n  border-top: none;\r\n}\r\n\r\n#side-bar h1 {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n#side-bar h3 {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n#side-bar input {\r\n  margin-bottom: 32px;\r\n  width: 150px;\r\n  margin-right: 8px;\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* Project Styles (Sidebar) */\r\n#projects > div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 150px;\r\n  margin-bottom: 16px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n#projects > div:hover {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n#projects > div > p {\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\n#projects > div > button {\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  color: #fff;\r\n}\r\n\r\n#projects img {\r\n  max-width: 16px;\r\n  filter: invert(1); /* Ensures visibility on dark background */\r\n  transition: transform 0.3s;\r\n}\r\n\r\n#projects img:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n/* Main Content */\r\n#main {\r\n  flex: 3;\r\n  height: 100vh;\r\n  background-color: #f9f9f9;\r\n  padding: 60px 30px;\r\n  border-top: none;\r\n}\r\n\r\n#tasks h2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/* Task Styles */\r\n#tasks > div {\r\n  width: 700px;\r\n  margin-bottom: 16px;\r\n  padding: 16px;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: box-shadow 0.3s;\r\n}\r\n\r\n#tasks > div:hover {\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#tasks input[type="checkbox"] {\r\n  margin-right: 16px;\r\n  width: 16px;\r\n}\r\n\r\n#tasks img {\r\n  max-width: 20px;\r\n  cursor: pointer;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n#tasks img:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n/* Add Task Button */\r\n#open-form-button {\r\n  margin-top: 32px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n#open-form-button:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n/* Form Styling */\r\nform {\r\n  padding: 20px;\r\n  margin-top: 32px;\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nform input,\r\nform select {\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 250px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\nform button {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\nform button:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\nform > div {\r\n  margin-top: 16px;\r\n}\r\n\r\n/* Modal Popup */\r\n#task-modal-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 400px;\r\n  padding: 30px;\r\n  background-color: #fff;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  z-index: 1;\r\n  display: none;\r\n  animation: fadeIn 0.3s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#task-modal-popup h2 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#task-modal-popup input,\r\n#task-modal-popup textarea,\r\n#task-modal-popup select {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-bottom: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n#due-date-div {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n#close-modal {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  color: #aaa;\r\n}\r\n\r\n#close-modal:hover {\r\n  color: #000;\r\n}\r\n\r\n#update-modal {\r\n  padding: 8px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  margin-top: 40px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n#update-modal:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n/* Finished Tasks Section */\r\n#finished-tasks-div {\r\n  margin-top: 32px;\r\n}\r\n\r\n/* Responsiveness */\r\n@media (max-width: 768px) {\r\n  body {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #side-bar,\r\n  #main {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 20px;\r\n  }\r\n\r\n  #tasks > div {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n:root {\r\n  --primary: #6366f1;\r\n  --primary-hover: #4f46e5;\r\n  --dark: #1e1e2e;\r\n  --light: #f8fafc;\r\n  --sidebar-bg: #2a2a3c;\r\n  --task-priority-high: #ef4444;\r\n  --task-priority-medium: #eab308;\r\n  --task-priority-low: #22c55e;\r\n}\r\n\r\n/* Base Styles */\r\nbody {\r\n  background: var(--light);\r\n  color: #334155;\r\n}\r\n\r\n/* Sidebar Enhancements */\r\n#side-bar {\r\n  background: var(--sidebar-bg);\r\n  padding: 2rem 1.5rem;\r\n  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#side-bar h1 {\r\n  font-size: 1.8rem;\r\n  color: var(--light);\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n#side-bar h1::after {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 40px;\r\n  height: 3px;\r\n  background: var(--primary);\r\n}\r\n\r\n#side-bar h3 {\r\n  color: #94a3b8;\r\n  font-size: 0.9rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* Project Input Enhancements */\r\n#add-project-field {\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border: none;\r\n  color: white;\r\n  border-radius: 8px;\r\n  padding: 0.75rem;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#add-project-field:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 2px var(--primary);\r\n}\r\n\r\n#add-project-button {\r\n  background: var(--primary);\r\n  color: white;\r\n  border: none;\r\n  padding: 0.75rem 1.5rem;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#add-project-button:hover {\r\n  background: var(--primary-hover);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n/* Project Items */\r\n#projects > div {\r\n  background: rgba(255, 255, 255, 0.05);\r\n  border-radius: 8px;\r\n  padding: 0.75rem 1rem;\r\n  margin-bottom: 0.75rem;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n#projects > div:hover {\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: translateX(4px);\r\n}\r\n\r\n/* Main Content Area */\r\n#main {\r\n  background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);\r\n  padding: 2rem;\r\n}\r\n\r\n/* Task Cards */\r\n#tasks > div {\r\n  background: white;\r\n  border-radius: 12px;\r\n  padding: 1.25rem;\r\n  margin-bottom: 1rem;\r\n  transition: all 0.2s ease;\r\n  border: 1px solid #e2e8f0;\r\n}\r\n\r\n#tasks > div:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Priority Badges */\r\n.priority-badge {\r\n  font-size: 0.75rem;\r\n  padding: 0.25rem 0.75rem;\r\n  border-radius: 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.high-priority {\r\n  background: var(--task-priority-high);\r\n  color: white;\r\n}\r\n.medium-priority {\r\n  background: var(--task-priority-medium);\r\n  color: black;\r\n}\r\n.low-priority {\r\n  background: var(--task-priority-low);\r\n  color: white;\r\n}\r\n\r\n/* Custom Checkbox */\r\ninput[type="checkbox"] {\r\n  width: 1.2em;\r\n  height: 1.2em;\r\n  border: 2px solid #cbd5e1;\r\n  border-radius: 4px;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\ninput[type="checkbox"]:checked {\r\n  background: var(--primary);\r\n  border-color: var(--primary);\r\n}\r\n\r\ninput[type="checkbox"]:checked::after {\r\n  content: "✓";\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* Modal Enhancements */\r\n#task-modal-popup {\r\n  border: none;\r\n  border-radius: 16px;\r\n  background: white;\r\n  animation: slideIn 0.3s ease;\r\n}\r\n\r\n@keyframes slideIn {\r\n  from {\r\n    transform: translate(-50%, -60%);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translate(-50%, -50%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#close-modal {\r\n  background: var(--primary);\r\n  color: white;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 0.2s ease;\r\n\r\n  padding-bottom: 8px;\r\n}\r\n\r\n#close-modal:hover {\r\n  background: var(--primary-hover);\r\n}\r\n\r\n/* Form Styling */\r\nform input,\r\nform select {\r\n  border: 2px solid #e2e8f0;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\nform input:focus,\r\nform select:focus {\r\n  border-color: var(--primary);\r\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  #side-bar {\r\n    padding: 1.5rem 1rem;\r\n  }\r\n\r\n  #main {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  #tasks > div {\r\n    padding: 1rem;\r\n  }\r\n}\r\n\r\n/* Floating Action Button */\r\n#open-form-button {\r\n  position: fixed;\r\n  bottom: 2rem;\r\n  right: 2rem;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n  padding: 0;\r\n}\r\n\r\n/* Task Status Animation */\r\n@keyframes taskComplete {\r\n  from {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n.task-complete {\r\n  animation: taskComplete 0.3s ease forwards;\r\n}\r\n'],sourceRoot:""}]);const i=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);t&&a[p[0]]||(void 0!==A&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=A),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(o," */");return[r].concat([A]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var A={},a=[],i=0;i<n.length;i++){var d=n[i],s=t.base?d[0]+t.base:d[0],p=A[s]||0,c="".concat(s," ").concat(p);A[s]=p+1;var l=e(c),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)r[l].references++,r[l].updater(m);else{var E=o(m,t);t.byIndex=i,r.splice(i,0,{identifier:c,updater:E,references:1})}a.push(c)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var A=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=e(A[a]);r[i].references--}for(var d=t(n,o),s=0;s<A.length;s++){var p=e(A[s]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}A=d}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var A=r[t]={id:t,exports:{}};return n[t](A,A.exports,e),A.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.p="",e.nc=void 0;var t=e(72),o=e.n(t),A=e(825),a=e.n(A),i=e(659),d=e.n(i),s=e(56),p=e.n(s),c=e(540),l=e.n(c),m=e(113),E=e.n(m),C=e(208),B={};B.styleTagTransform=E(),B.setAttributes=p(),B.insert=d().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=l(),o()(C.A,B),C.A&&C.A.locals&&C.A.locals;class u{constructor(n){this.name=n,this.tasks=[]}addTask(n){this.tasks.push(n)}removeTask(n){this.tasks.splice(n,1)}}class g{constructor(n,r,e,t){this.title=n,this.description=r,this.dueDate=e,this.priority=t,this.complete=!1}}const b="todoListData",f={saveData(n,r){const e={projects:n.map((n=>({name:n.name,tasks:n.tasks.map((n=>({title:n.title,description:n.description,dueDate:n.dueDate,priority:n.priority,complete:n.complete})))}))),finishedTasks:r.map((n=>({title:n.title,description:n.description,dueDate:n.dueDate,priority:n.priority,complete:n.complete})))};localStorage.setItem(b,JSON.stringify(e))},loadData(){const n=localStorage.getItem(b);return n?JSON.parse(n):null},clearData(){localStorage.removeItem(b)}},h=f,x=e.p+"83e6e062d02de7526268.svg";let k=[],y=null,v=[];const w=document.getElementById("main"),I=document.createElement("button");function j(){const n=document.getElementById("projects");n.innerHTML="";const r=document.createElement("div"),e=document.createElement("p"),t=document.createElement("div"),o=document.createElement("p");e.innerText="All Tasks",r.appendChild(e),n.appendChild(r),o.innerText="Finished Tasks",t.appendChild(o),t.id="finished-tasks-div";let A=e;t.addEventListener("click",(()=>{k.forEach((n=>{n.nameElement&&(n.nameElement.style.fontWeight="normal")})),A.style.fontWeight="normal",t.style.fontWeight="bold",y=null,D(),I.style.display="none";const n=document.querySelector("form");n&&n.remove()})),r.addEventListener("click",(()=>{k.forEach((n=>{n.nameElement&&(n.nameElement.style.fontWeight="normal")})),A.style.fontWeight="bold",t.style.fontWeight="normal",y=null,Y(),I.style.display="none";const n=document.querySelector("form");n&&n.remove()})),k.forEach((r=>{const e=document.createElement("div"),o=document.createElement("p"),a=document.createElement("img");o.innerText=r.name,a.src=x,a.alt="Remove Project",e.appendChild(o),e.appendChild(a),n.appendChild(e),r.nameElement=o,a.addEventListener("click",(n=>{n.stopPropagation();const e=k.indexOf(r);if(e>-1&&(k.splice(e,1),h.saveData(k,v),y===r)){y=null,document.getElementById("tasks").innerHTML="",I.style.display="none";const n=document.querySelector("form");n&&n.remove()}j(),k.length>0&&(y=k[0],T())})),e.addEventListener("click",(()=>{k.forEach((n=>{n.nameElement&&(n.nameElement.style.fontWeight="normal")})),A.style.fontWeight="normal",t.style.fontWeight="normal",y=r,T(),o.style.fontWeight="bold",I.style.display="block";const n=document.querySelector("form");n&&n.remove()}))})),n.appendChild(t)}function T(){const n=document.getElementById("tasks");if(n.innerHTML="",!y)return;const r=document.createElement("h2");r.innerText=y.name,n.appendChild(r),y.tasks.forEach(((r,e)=>{const t=document.createElement("div"),o=document.createElement("div"),A=document.createElement("input"),a=document.createElement("h3"),i=document.createElement("p"),d=document.createElement("img");A.type="checkbox",a.innerText=r.title,i.innerText=r.dueDate,d.src=x,d.alt="Remove task",o.style.width="100%",A.addEventListener("click",(()=>{y.removeTask(r),v.push(r),h.saveData(k,v),T()})),d.addEventListener("click",(n=>{n.stopPropagation(),y.removeTask(e),h.saveData(k,v),T()})),o.addEventListener("click",(n=>{n.stopPropagation(),function(n){const r=document.getElementById("task-modal-popup"),e=document.getElementById("modal-title"),t=document.getElementById("modal-description"),o=document.getElementById("modal-duedate"),A=document.getElementById("modal-priority"),a=document.getElementById("close-modal"),i=document.getElementById("update-modal");e.value=n.title,t.value=n.description,o.value=n.dueDate,A.value=n.priority,r.style.display="block",setTimeout((()=>{const n=e=>{r.contains(e.target)||(r.style.display="none",document.removeEventListener("click",n))};document.addEventListener("click",n)}),0),a.onclick=()=>{r.style.display="none"},i.onclick=()=>{n.title=e.value,n.description=t.value,n.dueDate=o.value,n.priority=A.value,h.saveData(k,v),r.style.display="none",T()}}(r)})),t.appendChild(A),o.appendChild(a),o.appendChild(i),t.appendChild(o),t.appendChild(d),n.appendChild(t)}))}function Y(){const n=document.getElementById("tasks");n.innerHTML="";const r=document.createElement("h2");r.innerText="All Tasks",n.appendChild(r),k.forEach((r=>{r.tasks.forEach(((e,t)=>{const o=document.createElement("div"),A=document.createElement("div"),a=document.createElement("input"),i=document.createElement("h3"),d=document.createElement("p"),s=document.createElement("p"),p=document.createElement("img");a.type="checkbox",i.innerText=e.title,d.innerText=e.dueDate,s.innerText=`Project: ${r.name}`,s.style.color="#666",p.src=x,p.alt="Remove task",A.style.width="100%",a.addEventListener("click",(()=>{r.removeTask(e),v.push(e),h.saveData(k,v),Y()})),p.addEventListener("click",(n=>{n.stopPropagation(),r.removeTask(t),h.saveData(k,v),Y()})),A.addEventListener("click",(n=>{n.stopPropagation(),function(n){const r=document.getElementById("task-modal-popup"),e=document.getElementById("modal-title"),t=document.getElementById("modal-description"),o=document.getElementById("modal-duedate"),A=document.getElementById("modal-priority"),a=document.getElementById("close-modal"),i=document.getElementById("update-modal");e.value=n.title,t.value=n.description,o.value=n.dueDate,A.value=n.priority,r.style.display="block",setTimeout((()=>{const n=e=>{r.contains(e.target)||(r.style.display="none",document.removeEventListener("click",n))};document.addEventListener("click",n)}),0),a.onclick=()=>{r.style.display="none"},i.onclick=()=>{n.title=e.value,n.description=t.value,n.dueDate=o.value,n.priority=A.value,h.saveData(k,v),r.style.display="none",Y()}}(e)})),o.appendChild(a),A.appendChild(i),A.appendChild(d),A.appendChild(s),o.appendChild(A),o.appendChild(p),n.appendChild(o)}))}))}function D(){const n=document.getElementById("tasks");n.innerHTML="";const r=document.createElement("h2");r.innerText="Finished tasks",n.appendChild(r),v.forEach(((r,e)=>{const t=document.createElement("div"),o=document.createElement("div"),A=document.createElement("h3"),a=document.createElement("p"),i=document.createElement("img");A.innerText=r.title,a.innerText=r.dueDate,i.src=x,i.alt="Remove task",o.style.width="100%",i.addEventListener("click",(n=>{n.stopPropagation(),v.splice(e,1),h.saveData(k,v),D()})),o.appendChild(A),o.appendChild(a),t.appendChild(o),t.appendChild(i),n.appendChild(t)}))}I.id="open-form-button",I.innerText="Add task",I.style.display="none",w.appendChild(I),I.addEventListener("click",(()=>{const n=document.querySelector("form");n&&n.remove(),function(){const n=document.querySelector("form");n&&n.remove();const r=document.createElement("div");r.innerHTML='\n        <form id="taskForm">\n            <input type="text" id="taskTitle" placeholder="Task Title">\n            <input type="text" id="taskDescription" placeholder="Task Description">\n            <div>\n                <label for="taskDueDate">Due date</label>\n                <input type="date" id="taskDueDate">\n                <label for="taskPriority">Priority</label>\n                <select id="taskPriority">\n                    <option value="Low">Low</option>\n                    <option value="Medium">Medium</option>\n                    <option value="High">High</option>\n                </select>\n                <button id="addTaskBtn">Add Task</button>\n            </div>\n        </form>\n    ',w.appendChild(r);document.getElementById("taskForm").addEventListener("submit",(n=>{n.preventDefault();const e=document.getElementById("taskTitle").value,t=document.getElementById("taskDescription").value,o=document.getElementById("taskDueDate").value,A=document.getElementById("taskPriority").value;if(""===e||""===o)return void alert("Please fill in the task title and odue date.");const a=new g(e,t,o,A);y&&(y.tasks.push(a),h.saveData(k,v),T(),r.remove(),I.style.display="block")}))}(),I.style.display="none"}));const S=document.getElementById("add-project-button"),W=document.getElementById("add-project-field");S.addEventListener("click",(()=>{if(""===W.value)return void alert("enter valid name for project!");const n=W.value,r=new u(n);k.push(r),y=r,W.value="",j(),I.style.display="block",h.saveData(k,v)})),document.addEventListener("DOMContentLoaded",(()=>{const n=h.loadData();if(n)k.length=0,v.length=0,n.projects.forEach((n=>{const r=new u(n.name);n.tasks.forEach((n=>{const e=new g(n.title,n.description,n.dueDate,n.priority);e.complete=n.complete,r.addTask(e)})),k.push(r)})),n.finishedTasks.forEach((n=>{const r=new g(n.title,n.description,n.dueDate,n.priority);r.complete=n.complete,v.push(r)}));else{const n=new u("default"),r=new g("wash dishes","washes dishes before mom go home","2025-02-17","High"),e=new g("play tenis","i dont know","2025-02-17","Medium");n.addTask(r),n.addTask(e),k.push(n),h.saveData(k,v)}j()}))})();
//# sourceMappingURL=bundle.js.map