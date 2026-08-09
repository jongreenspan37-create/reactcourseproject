import BtnBlue from "./BtnBlue";

export default function Photo({ id, src, title, onClick }) {
  return (
    <div className="mt-4 flex flex-col gap-4 items-center">
      <h1 className="text-3xl">This is {title}</h1>
      <img className="rounded-lg" width="600" height="auto" src={src} />
      <BtnBlue onClick={onClick}>Back</BtnBlue>
    </div>
  );
}
