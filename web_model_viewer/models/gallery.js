// 3D Model Gallery Configuration
// This file defines the models available in your gallery
// Works both locally and on GitHub Pages!

window.MODEL_GALLERY = [
    // ADD YOUR MODELS HERE:
    
    {
        name: "Cube -",
        file: "models/3Dcube.stl",  // Make sure this file exists!
        description: "First 3D cube"
    },
    {
        name: "Phone Case Design", 
        file: "models/phone-case.obj",
        description: "Custom protective phone case"
    },
    {
        name: "Decorative Vase",
        file: "models/vase.stl", 
        description: "Modern minimalist vase design"
    },
    {
        name: "Mechanical Gear",
        file: "models/gear.obj",
        description: "Precision engineering component"
    },
    {
        name: "Keychain",
        file: "models/keychain.stl",
        description: "Personalized keychain design"
    }
    
    // TO ADD MORE MODELS:
    // 1. Upload your STL/OBJ files to the models/ folder
    // 2. Add entries here using the format above
    // 3. Make sure the file paths match your actual files
    // 
    // EXAMPLE: If you have models/my-design.stl, add:
    // {
    //     name: "My Design",
    //     file: "models/my-design.stl", 
    //     description: "My awesome 3D creation"
    // },
];

// INSTRUCTIONS:
// 1. Replace the examples above with your actual models
// 2. Make sure file paths are correct (models/filename.stl)
// 3. Save this file as models/gallery.js in your project
// 4. Gallery will load automatically in the viewer!