const actionCallback = (options, response) => {
  if (response.status === 200) {
    if (options.success) {
      options.success(response.data)
    }
    return;
  }
  if (options.error) {
    options.error(response)
  }
}
export default actionCallback;
