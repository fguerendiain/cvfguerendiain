"use client";

import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "@/components/pdf/PDFDocument";
import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export default function ExportPDFButton({ bigStyle }: { bigStyle?: boolean }) {
  const { t: tGeneral } = useTranslation();

  const handleExportPDF = async () => {
    const blob = await pdf(<PDFDocument />).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV_Franco_Guerendiain.pdf";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExportPDF}
      title={tGeneral("pdfExportTooltip")}
      className={clsx(
        "cursor-pointer flex items-center gap-2 transition-all duration-200",
        bigStyle
          ? [
              "px-6 py-4",
              "rounded-2xl shadow-lg",
              "my-3",
              "bg-blue-400 text-gray-800 hover:bg-blue-500 dark:bg-blue-600/70 dark:text-gray-200 dark:hover:bg-blue-700",
              "text-base font-semibold",
            ]
          : [
              "p-2 rounded-md",
              "hover:bg-gray-300 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700",
            ]
      )}
    >
      {bigStyle && <span>{tGeneral("pdfExportMsg")}</span>}
      <FileText className={bigStyle ? "w-6 h-6" : "w-5 h-5"} />
    </button>
  );
}
