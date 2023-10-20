export default function RangeInput({ password, handleChange }) {
  return (
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
  );
}
