export default function CopyButton({password, isCopied, setIsCopied}) {
  return (
    <button
      className="bg-white rounded-md p-3 disabled:bg-gray-200 disabled:text-slate-600 disabled:cursor-not-allowed hover:bg-[#09363f] hover:text-white border-2"
      onClick={() => {
        navigator.clipboard.writeText(password.text);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 4000);
      }}
      disabled={
        password.text === "Play with the range to generate!" ? true : false
      }
    >
      {isCopied ? "Copied!" : "Copy Password"}
    </button>
  );
}
