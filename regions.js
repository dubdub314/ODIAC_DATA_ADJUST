// Region utilities
function isSupportedRegion(availableRegions, lat, lon) {
  if (!availableRegions || typeof availableRegions !== 'object') return false;
  if (typeof lat !== 'number' || typeof lon !== 'number') return false;
  for (const key of Object.keys(availableRegions)) {
    const r = availableRegions[key] || {};
    const { minLat, maxLat, minLon, maxLon } = r;
    if (typeof minLat !== 'number' || typeof maxLat !== 'number' || typeof minLon !== 'number' || typeof maxLon !== 'number') continue;
    if (lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon) return true;
  }
  return false;
}

module.exports = { isSupportedRegion };
