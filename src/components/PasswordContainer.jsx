export default function PasswordContainer({ password }) {
  return (
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
  );
}
