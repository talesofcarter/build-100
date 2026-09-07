import React from "react";
import type { CharacterType } from "../types";
import { GenerateButton } from "./GenerateButton";
import { LengthControl } from "./LengthControl";
import { SymbolToggle } from "./SymbolToggle";
import { TypeSelector } from "./TypeSelector";

interface ConfigurationPanelProps {
  onGenerate: () => void;
  length: number;
  onLengthChange: React.Dispatch<React.SetStateAction<number>>;
  activeType: CharacterType;
  symbolsOn: boolean;
}

export function ConfigurationPanel({
  onGenerate,
  length,
  onLengthChange,
  activeType,
  symbolsOn,
}: ConfigurationPanelProps): React.JSX.Element {
  return (
    <div>
      <div className="rounded-2xl border border-[#EDEAE1] bg-white">
        <LengthControl length={length} onLengthChange={onLengthChange} />
        <TypeSelector activeValue={activeType} />
        <SymbolToggle checked={symbolsOn} />
      </div>
      <div className="mt-4">
        <GenerateButton onGenerate={onGenerate} />
      </div>
    </div>
  );
}
