import { useState } from "react";

export default function GeneratePassword() {
  const [password, setPassword] = useState({
    text: "Play with the range to generate!",
    length: 16,
    backgroundColorBasedOnLength: "bg-[#3e7f5d]",
    textToDisplayBasedOnLength: "Strong Password",
    iconToDisplayBasedOnLength: "fa-solid fa-anchor-circle-check",
  });
  const [needLetters, setNeedletters] = useState(true);
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
          passwordCharacters += "@&$!#?";
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
        "h-2/5 w-3/5 ml-auto mr-auto flex justify-center items-center flex-col gap-16 " +
        password.backgroundColorBasedOnLength
      }
    >
      <div className="w-4/5 mt-10">
        <h1 className="text-4xl mb-3 text-white">
          Generate passwords with our random password generator.
        </h1>
        <div className="border-b-[1px] w-full">
          <span className="text-2xl text-white w-9/12">
            <code>
              <input
                type="text"
                className="bg-transparent border-none outline-none w-full"
                value={password.text}
                readOnly
              />
            </code>
          </span>
        </div>
        <div className="flex w-full justify-between mt-6">
          <span className="text-white">
            <i className={password.iconToDisplayBasedOnLength}></i>{" "}
            {password.textToDisplayBasedOnLength}
          </span>
          <button
            className="bg-white rounded-md p-3 disabled:bg-gray-200 disabled:text-slate-600 disabled:cursor-not-allowed hover:bg-[#09363f] hover:text-white border-2"
            onClick={() => {
              navigator.clipboard.writeText(password.text);
              setIsCopied(true);
            }}
            disabled={
              password.text === "Play with the range to generate!"
                ? true
                : false
            }
          >
            {isCopied ? "Copied!" : "Copy Password"}
          </button>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label htmlFor="password-length-input" className="text-white mb-6">
            Length ({password.length})
          </label>
          <input
            type="range"
            min={4}
            max={40}
            value={password.length}
            className="rangeInput cursor-pointer bg-white rounded-lg appearance-none h-2"
            onChange={(e) => handleChange(e)}
            id="password-length-input"
          />
        </div>
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
            onChange={() => setNeedletters((state) => !state)}
            className="checkbox"
          />
          <label htmlFor="Numbers-checkbox" className="text-white">
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
          <label htmlFor="Symbols-checkbox" className="text-white">
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
