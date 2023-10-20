export default function Icon({ password }) {
  return (
    <span className="text-white">
      <i className={password.iconToDisplayBasedOnLength}></i>{" "}
      {password.textToDisplayBasedOnLength}
    </span>
  );
}
