import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import "../css/table.css";

export default function Table(props) {
    const [errorMatrix, setErrorMatrix] = useState(null);

    useEffect(() => {
        setErrorMatrix(
            Array(props.nodesAmount).fill(
                Array(props.nodesAmount).fill("")
            )
        );
    }, [props.nodesAmount]);

    function deepCopy(arr) {
        let arrCopy = [];
        for (let i = 0; i < arr.length; ++i) {
            arrCopy.push([...arr[i]]);
        }
        return arrCopy;
    }

    function setCell(rowNumber, colNumber, newVal) {
        let updatedMatrix = deepCopy(props.matrix);
        updatedMatrix[rowNumber][colNumber] = newVal;

        if (props.graphType === "undirected" && rowNumber !== colNumber) {
            updatedMatrix[colNumber][rowNumber] = newVal;

            const reversedCellId = `cell_${colNumber}:${rowNumber}`;
            let reversedCell = document.getElementById(reversedCellId);
            reversedCell.value = newVal;
        }

        props.setMatrix(updatedMatrix);
    }

    function cleanCell(rowNumber, colNumber) {
        let updatedMatrix = deepCopy(props.matrix);
        updatedMatrix[rowNumber][colNumber] = "-";
        props.setMatrix(updatedMatrix);

        const cellId = `cell_${rowNumber}:${colNumber}`;
        let cell = document.getElementById(cellId);
        cell.value = "";
    }

    function checkErrorMatrix(arr) {
        for (let i = 0; i < props.nodesAmount; ++i) {
            for (let j = 0; j < props.nodesAmount; ++j) {
                if (arr[i][j] !== "") {
                    props.setErrorMessageBottom(arr[i][j]);
                    return;
                }
            }
        }

        props.setErrorMessageBottom("");
    }

    function setCellError(rowNumber, colNumber, val) {
        let newErrorMatrix = deepCopy(errorMatrix);
        newErrorMatrix[rowNumber][colNumber] = val;
        setErrorMatrix(newErrorMatrix);
        checkErrorMatrix(newErrorMatrix);
    }

    return (<div>
        <h3>Fill in the adjacency matrix</h3>
        <table border="1">
            <tbody>
            <tr>
                <th>from\to</th>
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
                props.matrix.map((row, rowNumber) => {
                    return (
                        <TableRow
                            key={`row${rowNumber}`}
                            row={row}
                            rowNumber={rowNumber}
                            setCell={setCell}
                            cleanCell={cleanCell}
                            setCellError={setCellError}
                        />
                    );
                })
            }
            </tbody>
        </table>
    </div>);
}