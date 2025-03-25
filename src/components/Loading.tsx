import {Loader2} from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <h1 className="text-xl">Loading...</h1>
      <Loader2 className="animate-spin text-blue-500" size="64" />
    </div>
  )
}
export default Loading
