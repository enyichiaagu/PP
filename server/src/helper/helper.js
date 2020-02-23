export const httpError = (res, status_code, status_message) => {
  return res.json({
    status_code,
    status_message,
    "success":false
  })
}

export const httpMsg = (res, status_Code, data, status_message) => {
  return res.json({
    status_code,
    data,
    status_message,
    "success": true
  })
}
