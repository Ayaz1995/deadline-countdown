// Function to check if at least one hardware camera fully covers the software camera's target range
function isSoftwareCameraCoveredSimply(targetDistance, targetLight, hardwareCameras) {
    return hardwareCameras.some(camera =>
      camera.distance[0] <= targetDistance[0] &&
      camera.distance[1] >= targetDistance[1] &&
      camera.light[0] <= targetLight[0] &&
      camera.light[1] >= targetLight[1]
    );
  }
  
  // Optional helper: Identify which cameras cover the target
  function getCoveringCameras(targetDistance, targetLight, hardwareCameras) {
    return hardwareCameras
      .map((camera, index) => ({ ...camera, index }))
      .filter(camera =>
        camera.distance[0] <= targetDistance[0] &&
        camera.distance[1] >= targetDistance[1] &&
        camera.light[0] <= targetLight[0] &&
        camera.light[1] >= targetLight[1]
      );
  }
  
  // Sample input
  const targetDistance = [1.0, 5.0];
  const targetLight = [100, 500];
  
  const hardwareCameras = [
    { distance: [0.5, 6.0], light: [50, 600] },   // ✅ Covers
    { distance: [2.0, 4.0], light: [200, 400] },  // ❌ Doesn't cover all
    { distance: [1.0, 5.0], light: [100, 500] }   // ✅ Exact match
  ];
  
  // Run the check
  const isCovered = isSoftwareCameraCoveredSimply(targetDistance, targetLight, hardwareCameras);
  
  if (isCovered) {
    console.log("✅ Coverage is sufficient.");
    const cameras = getCoveringCameras(targetDistance, targetLight, hardwareCameras);
    cameras.forEach(cam =>
      console.log(`Camera ${cam.index + 1} covers: Distance ${cam.distance} | Light ${cam.light}`)
    );
  } else {
    console.log("❌ Coverage is insufficient.");
  }
  