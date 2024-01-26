export const validateLTShort = (value: string): boolean => {
  if (value.match(/[ąčęėįšųųūžĄČĘĖĮŠŲŪŽA-Za-z\-(), ]{1,40}/g)) {
    return false;
  }
  return true;
};

//later add AI to check if the input LANGUAGE is correct and if input doesn't contain profanity or inappropriate stuff
