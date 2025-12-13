"use client";

import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "@/components/pdf/PDFDocument";
import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExportPDFButton() {
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
      className="p-2 hover:bg-gray-200 rounded-md"
      title={tGeneral('pdfExportTooltip')}
    >
      <FileText className="w-5 h-5" />
    </button>
  );
}
