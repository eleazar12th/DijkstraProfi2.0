import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import "../css/table.css";

export default function Table(props) {
    const [matrix, setMatrix] = useState([]);

    useEffect(() => {
        setMatrix(
            Array(props.nodesAmount).fill(
                Array(props.nodesAmount).fill("-")
            )
        );
    }, [props.nodesAmount]);

    function setRow(rowNumber, newRow) {
        let updatedMatrix = matrix.map((oldRow, i) => {
            if (i === rowNumber) {
                return newRow;
            }

            return oldRow;
        });

        setMatrix(updatedMatrix);
    }

    function setCell(rowNumber, colNumber, newVal) {
        let updatedRow = matrix[rowNumber].map((oldVal, i) => {
            if (i === colNumber) {
                return newVal;
            }

            return oldVal;
        });

        setRow(rowNumber, updatedRow);
    }

    function setCells(rowNumber, colNumber, newVal) {
        setCell(rowNumber, colNumber, newVal);

        if (props.mode === "normal") {
            setCell(colNumber, rowNumber, newVal);

            const reversedCellId = `cell_${colNumber}:${rowNumber}`;
            let reversedCell = document.getElementById(reversedCellId);
            reversedCell.value = newVal;
        }
    }

    return (<div>
        <table border="1">
            <tbody>
            <tr>
                <th></th>
                {Array(props.nodesAmount)
                    .fill(true)
                    .map((item, index) => {
                        return (
                            <th key={index}>{index + 1}</th>
                        );
                    })
                }
            </tr>

            {
                matrix.map((row, rowNumber) => {
                    return (
                        <TableRow
                            key={`row${rowNumber}`}
                            row={row}
                            rowNumber={rowNumber}
                            setCells={setCells}
                        />
                    );
                })
            }
            </tbody>
        </table>
    </div>);
}