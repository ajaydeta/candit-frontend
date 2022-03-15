const useRegexDigit = (val) => {
  return val.replace(/[^0-9]+/g, "")
}

export {
    useRegexDigit
}