export default function Button({text, width=52, round="lg"}) {
  return (
    <button className={`bg-[#FFC900] p-4 w-${width} rounded-${round}`}>{text}</button>
  )
}
