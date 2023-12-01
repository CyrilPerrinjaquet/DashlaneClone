import { useState } from "react";
import CopyButton from "./CopyButton";
import Icon from "./Icon";
import PasswordContainer from "./PasswordContainer";
import RangeInput from "./RangeInput";

export default function GeneratePassword() {
  const [password, setPassword] = useState({
    text: "Play with the range to generate!",
    length: 16,
    backgroundColorBasedOnLength: "bg-[#3e7f5d]",
    textToDisplayBasedOnLength: "Strong Password",
    iconToDisplayBasedOnLength: "fa-solid fa-anchor-circle-check",
  });
  const [needLetters, setNeedLetters] = useState(true);
  const [needNumbers, setNeedNumbers] = useState(true);
  const [needSymbols, setNeedSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  let passwordCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopkrstuvxyz0123456789";

  function handleChange(event) {
    let finalPasswordResult = "";

    while (finalPasswordResult.length < event.target.value) {
      if (needLetters) {
        passwordCharacters =
          "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopkrstuvxyz";
        if (needNumbers) {
          passwordCharacters += "0123456789";
        }
        if (needSymbols) {
          passwordCharacters += "@&$!#?_-£!";
        }
      } else if (needNumbers) {
        passwordCharacters = "0123456789";
        if (needSymbols) {
          passwordCharacters += "@&$!#?";
        }
      }

      finalPasswordResult += passwordCharacters.charAt(
        Math.random() * passwordCharacters.length
      );
    }

    if (password.length < 6) {
      setPassword({
        text: finalPasswordResult,
        length: event.target.value,
        backgroundColorBasedOnLength: "bg-[#d1364e]",
        textToDisplayBasedOnLength: "Weak Password",
        iconToDisplayBasedOnLength: "fa-solid fa-flag",
      });
      return;
    } else if (password.length >= 6 && password.length <= 8) {
      setPassword({
        text: finalPasswordResult,
        length: event.target.value,
        backgroundColorBasedOnLength: "bg-[#be4e3a]",
        textToDisplayBasedOnLength: "Fairly Strong",
        iconToDisplayBasedOnLength: "fa-solid fa-anchor-circle-check",
      });
      return;
    }

    setPassword({
      text: finalPasswordResult,
      length: event.target.value,
      backgroundColorBasedOnLength: "bg-[#3e7f5d]",
      textToDisplayBasedOnLength: "Strong Password",
      iconToDisplayBasedOnLength: "fa-solid fa-anchor-circle-check",
    });
  }

  return (
    <div
      className={
        "h-1/2 w-full ml-auto mr-auto flex justify-center items-center flex-col gap-16 " +
        password.backgroundColorBasedOnLength
      }
    >
      <div className="w-4/5 mt-10">
        <h1 className="text-4xl mb-3 text-white">
          Generate passwords with our random password generator.
        </h1>
        <PasswordContainer password={password} />
        <div className="flex w-full justify-between mt-6">
          <Icon password={password} />
          <CopyButton
            password={password}
            isCopied={isCopied}
            setIsCopied={setIsCopied}
          />
        </div>
        <RangeInput password={password} handleChange={handleChange} />
        <div className="flex gap-4 mt-12 items-center">
          <label htmlFor="letters-checkbox" className="text-white">
            Letters (ie. Aa)
          </label>
          <input
            type="checkbox"
            id="letters-checkbox"
            defaultChecked={needLetters}
            disabled={
              needLetters && !needNumbers && !needSymbols ? true : false
            }
            onChange={() => setNeedLetters((state) => !state)}
            className="checkbox"
          />
          <label htmlFor="numbers-checkbox" className="text-white">
            Numbers (ie. 345)
          </label>
          <input
            type="checkbox"
            id="numbers-checkbox"
            onChange={() => setNeedNumbers((state) => !state)}
            disabled={
              !needLetters && needNumbers && !needSymbols ? true : false
            }
            defaultChecked={needNumbers}
            className="checkbox"
          />
          <label htmlFor="symbols-checkbox" className="text-white">
            Symbols (@$!#?)
          </label>
          <input
            type="checkbox"
            id="symbols-checkbox"
            defaultChecked={needSymbols}
            onChange={() => setNeedSymbols((state) => !state)}
            className="checkbox"
          />
        </div>
      </div>
    </div>
  );
}
