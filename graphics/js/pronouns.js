const HE_HIM = 'He/Him';
const SHE_HER = 'She/Her';
const THEY_THEM = 'They/Them';

const pronouns = {
  BashPrime: HE_HIM
};

function getPronounsForPlayer(playerName) {
  return pronouns[playerName];
}
