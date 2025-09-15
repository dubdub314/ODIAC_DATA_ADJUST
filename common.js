/* Common helpers for API responses & logging */
function sendSuccess(res, payload) {
  try {
    // Always return JSON
    if (typeof payload === 'string') {
      // If caller passed a JSON string, try parse; otherwise wrap
      try { payload = JSON.parse(payload); } catch (_) { payload = { message: payload }; }
    }
    console.log('[SUCCESS]', JSON.stringify(payload).slice(0, 2000));
    res.status(200).json(payload);
  } catch (err) {
    console.error('[SUCCESS_HANDLER_ERROR]', err);
    res.status(200).json({ ok: true });
  }
}

function sendError(res, status = 500, code = 'internal_error', message = 'Unexpected error') {
  const body = { code, message };
  console.error('[ERROR]', code, message);
  res.status(status).json(body);
}

module.exports = { sendSuccess, sendError };
