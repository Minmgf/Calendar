import React from 'react';
import Select from "../Form/Select.jsx";
import { BiChevronDown } from "react-icons/bi";

export const courts = {
    court1: "Corte 1",
    court2: "Corte 2",
    court3: "Corte 3",
    court4: "Corte 4",
};


const CourtPicker = ({ onChange, value }) => {
    return (
        <div className="flex items-center">
            <Select
                value={value}
                onChange={onChange}
                className="mt-0"
                inputBg="py-1 rounded"
                dropdownClass={"court-picker-dropdown"}
                withBg={false}

                render={(onChange) => (
                    <div className="grid grid-cols-1 gap-2 px-2">
                        {Object.entries(courts).map(([key, name]) => (
                            <span key={key} onClick={() => onChange(key)} className="block cursor-pointer">
                                {name}
                            </span>
                        ))}
                    </div>
                )}

                renderPlaceholderValue={(val) => (
                    <div className="flex items-center">
                        <span className="mr-1">{courts[val]}</span>
                        <BiChevronDown />
                    </div>
                )}
            >
            </Select>
        </div>
    );
};

export default CourtPicker;
