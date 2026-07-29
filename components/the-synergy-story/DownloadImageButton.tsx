'use client'
import { DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";

export const DownloadImageButton = ({ filePath }: { filePath: string }) => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = filePath
    link.download = "" // optional: keeps the original file name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      title="click to download the image"
      className="hover:text-primary"
      onClick={handleDownload}
    >
      <DownloadIcon className="text-destructive stroke-[2.5px]" />
    </Button>
  )
}
