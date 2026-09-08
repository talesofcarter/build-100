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
  setCharType: React.Dispatch<React.SetStateAction<CharacterType>>;
  symbolsOn: boolean;
  setIncludeSymbols: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ConfigurationPanel({
  onGenerate,
  length,
  onLengthChange,
  activeType,
  setCharType,
  symbolsOn,
  setIncludeSymbols,
}: ConfigurationPanelProps): React.JSX.Element {
  return (
    <div>
      <div className="rounded-2xl border border-[#EDEAE1] bg-white">
        <LengthControl length={length} onLengthChange={onLengthChange} />
        <TypeSelector activeValue={activeType} onTypeChange={setCharType} />
        <SymbolToggle checked={symbolsOn} onChangeSymbols={setIncludeSymbols} />
      </div>
      <div className="mt-4">
        <GenerateButton onGenerate={onGenerate} />
      </div>
    </div>
  );
}
