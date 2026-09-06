import React from "react";
import type { CharacterType } from "../types";
import { GenerateButton } from "./GenerateButton";
import { LengthControl } from "./LengthControl";
import { SymbolToggle } from "./SymbolToggle";
import { TypeSelector } from "./TypeSelector";

interface ConfigurationPanelProps {
  length: number;
  activeType: CharacterType;
  symbolsOn: boolean;
}

export function ConfigurationPanel({
  length,
  activeType,
  symbolsOn,
}: ConfigurationPanelProps): React.JSX.Element {
  return (
    <div>
      <div className="rounded-2xl border border-[#EDEAE1] bg-white">
        <LengthControl length={length} />
        <TypeSelector activeValue={activeType} />
        <SymbolToggle checked={symbolsOn} />
      </div>
      <div className="mt-4">
        <GenerateButton />
      </div>
    </div>
  );
}
