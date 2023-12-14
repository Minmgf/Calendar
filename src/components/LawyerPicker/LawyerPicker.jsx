import React, { useEffect, useState } from 'react';
import Select from "../Form/Select.jsx";
import { BiChevronDown } from "react-icons/bi";
import fullName from "../../utils/fullName.js";

export const lawyers = {
    lawyer1: "Juan Pérez",
    lawyer2: "Maria López",
    lawyer3: "Carlos Gómez",
    lawyer4: "1",
    lawyer5: "2",
    lawyer6: "3",
    lawyer7: "4",
    lawyer8: "5",
    lawyer9: "6",
    lawyer10: "7",
    lawyer11: "8",
    lawyer12: "9",
}

const LawyerPicker = ({ onChange, createdBy, value, auth, updateEventId }) => {
    const [selectedLawyer, setSelectedLawyer] = useState("lawyer1");

    function handleChangeLawyer(lawyer) {
        setSelectedLawyer(lawyer);
        onChange(lawyer);
    }

    useEffect(() => {
        if (value) {
            setSelectedLawyer(value);
        }
    }, [value]);

    return (
        <div className="flex items-center">
            {updateEventId ? (
                <div className="flex items-center gap-x-1">
                    <h4 className="mx-2 text-sm text-gray-600">
                        Lawyer:
                    </h4>
                </div>
            ) : (
                <div className="flex items-center text-sm text-gray-600 gap-x-1">
                    Lawyer:
                </div>
            )}

            <Select
                value={selectedLawyer}
                onChange={handleChangeLawyer}
                className="mt-0"
                inputBg="py-1 rounded"
                dropdownClass={"lawyer-picker-dropdown"}
                withBg={false}

                render={(onChange) => (
                    <div className="grid grid-cols-1 gap-2 px-2">
                        {Object.entries(lawyers).map(([key, name]) => (
                            <span key={key} onClick={() => onChange(key)} className="block cursor-pointer">
                                {name}
                            </span>
                        ))}
                    </div>
                )}
                
                renderPlaceholderValue={(val) => (
                    <div className="flex items-center">
                        <span className="mr-1">{lawyers[val]}</span>
                        <BiChevronDown />
                    </div>
                )}
            >
            </Select>
        </div>
    );
};

export default LawyerPicker;
