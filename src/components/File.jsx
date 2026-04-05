import { Worker, ViewMode, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function File() {
  return (
    <div className="h-full overflow-hidden">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl="/files/file.pdf" />
      </Worker>
    </div>
  );
}

export default File;