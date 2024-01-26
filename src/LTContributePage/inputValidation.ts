import profanityList from "./profanity-list.json";

export const validateLTShort = (value: string): boolean => {
  if (value.match(/[ąčęėįšųųūžĄČĘĖĮŠŲŪŽA-Za-z\-(),'" ]{1,40}/g)) {
    return true;
  }
  return false;
};

export const profanityCheck = (word: string) => {
  let isProfane = true;
  profanityList.forEach((profanity) => {
    if (word.toLowerCase().includes(profanity.toLowerCase())) {
      isProfane = false;
    }
  });
  return isProfane;
};

//later add AI to check if the input LANGUAGE is correct and if input doesn't contain profanity or inappropriate stuff
